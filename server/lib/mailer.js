import nodemailer from "nodemailer";

const port = Number(process.env.SMTP_PORT) || 587;
const useGmail = (process.env.SMTP_HOST || "").toLowerCase().includes("gmail");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port,
  secure: process.env.SMTP_SECURE === "true",
  requireTLS: port === 587,
  auth: process.env.SMTP_USER && process.env.SMTP_PASS
    ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    : undefined,
});

if (useGmail && !process.env.SMTP_PASS) {
  console.warn(
    "[Mail] SMTP_PASS is empty. Gmail needs an App Password in server/.env — see https://support.google.com/accounts/answer/185833. Emails will not be sent until you set it."
  );
}

const fromName = process.env.MAIL_FROM_NAME || "Naans & Curries Website";
const fromEmail = process.env.MAIL_FROM_EMAIL || process.env.SMTP_USER || "noreply@localhost";
const mailTo = process.env.MAIL_TO || "Info@Naans.cr";
const reservationMailTo = process.env.RESERVATION_MAIL_TO || mailTo;

export async function sendContactEmail({ name, email, phone, message }) {
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(message || "")}</pre>
  `;
  const text = `Contact from ${name} (${email})\nPhone: ${phone || "—"}\n\nMessage:\n${message || ""}`;

  return transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: mailTo,
    replyTo: email,
    subject: `[Naans & Curries] Contact: ${name}`,
    text,
    html,
  });
}

/** Reservation email to restaurant (matches legacy PHP format). */
export async function sendReservationEmail({
  location,
  name,
  email,
  phone,
  guests,
  date,
  time,
  message,
}) {
  const loc = escapeHtml(location || "—");
  const ph = escapeHtml(phone || "—");
  const g = escapeHtml(guests || "—");
  const nm = escapeHtml(name || "—");
  const em = escapeHtml(email || "—");
  const spec = escapeHtml(message || "—");
  const d = escapeHtml(date || "—");
  const t = escapeHtml(time || "—");

  const text = [
    "",
    " Location: " + (location || "—"),
    " Phone: " + (phone || "—"),
    " Guests: " + (guests || "—"),
    " Name: " + (name || "—"),
    " Email: " + (email || "—"),
    " Special Instructions: " + (message || "—"),
    "",
    " DATE & TIME ",
    " Date: " + (date || "—"),
    " Time: " + (time || "—"),
    "",
  ].join("\n\n");

  const html = `
    <h2>New Table Reservation Request</h2>
    <p><strong>Location:</strong> ${loc}</p>
    <p><strong>Phone:</strong> ${ph}</p>
    <p><strong>Guests:</strong> ${g}</p>
    <p><strong>Name:</strong> ${nm}</p>
    <p><strong>Email:</strong> ${em}</p>
    <p><strong>Special Instructions:</strong> ${spec}</p>
    <hr/>
    <h3>DATE & TIME</h3>
    <p><strong>Date:</strong> ${d}</p>
    <p><strong>Time:</strong> ${t}</p>
  `;

  return transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: reservationMailTo,
    replyTo: email,
    subject: "Restaurant Reservation details from naans-curries.com",
    text,
    html,
  });
}

/** Confirmation email to customer (matches legacy PHP content). */
export async function sendReservationConfirmationToGuest({ email, name, location, date, time }) {
  const html = `
    <p>Thank you for your message. We look forward to welcoming you and serving you soon.</p>
    </br>
    <p>Do try our delicious classic Indian desserts and Chai.</p>
    </br>
    <p>Nb.: In case you have special dietary needs, please ensure to inform our service team.</p>
    <p>&nbsp;</p><p>&nbsp;</p>
    <p>Team Naans & Curries<br>
    Lindora : 22820001, 22825470<br>
    Pinares : 22717777<br>
    Lincoln Plaza : 25199595<br>
    Playas De Coco : 21003377<br>
    Tamarindo : 21002188<br>
    Nunciatura : 47115555</p>
  `;
  const text = [
    "Thank you for your message. We look forward to welcoming you and serving you soon.",
    "",
    "Do try our delicious classic Indian desserts and Chai.",
    "",
    "Nb.: In case you have special dietary needs, please ensure to inform our service team.",
    "",
    "Team Naans & Curries",
    "Lindora : 22820001, 22825470",
    "Pinares : 22717777",
    "Lincoln Plaza : 25199595",
    "Playas De Coco : 21003377",
    "Tamarindo : 21002188",
    "Nunciatura : 47115555",
  ].join("\n");

  return transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: email,
    subject: "Reply: Restaurant Reservation details from naans-curries.com",
    text,
    html,
  });
}

function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
