import { Router } from "express";
import { sendContactEmail } from "../lib/mailer.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};
    if (!name?.trim() || !email?.trim()) {
      return res.status(400).json({
        success: false,
        error: "Name and email are required.",
      });
    }
    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? String(phone).trim() : undefined,
      message: message ? String(message).trim() : undefined,
    });
    return res.json({ success: true, message: "Message sent successfully." });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({
      success: false,
      error: "Failed to send message. Please try again later.",
    });
  }
});

export default router;
