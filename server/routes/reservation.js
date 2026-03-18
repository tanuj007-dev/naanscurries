import { Router } from "express";
import {
  sendReservationEmail,
  sendReservationConfirmationToGuest,
} from "../lib/mailer.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { location, name, email, phone, guests, date, time, message } =
      req.body || {};
    if (!name?.trim() || !email?.trim() || !date?.trim() || !time?.trim()) {
      return res.status(400).json({
        success: false,
        error: "Name, email, date and time are required.",
      });
    }
    const payload = {
      location: location ? String(location).trim() : "—",
      name: name.trim(),
      email: email.trim(),
      phone: phone ? String(phone).trim() : undefined,
      guests: guests ? String(guests).trim() : "—",
      date: date.trim(),
      time: time.trim(),
      message: message ? String(message).trim() : undefined,
    };

    let emailError = null;
    try {
      await sendReservationEmail(payload);
    } catch (err) {
      emailError = err;
      console.error("Reservation email to restaurant failed:", err.message || err);
      if (err.response) console.error("SMTP response:", err.response);
    }
    try {
      await sendReservationConfirmationToGuest({
        email: payload.email,
        name: payload.name,
        location: payload.location,
        date: payload.date,
        time: payload.time,
      });
    } catch (confirmErr) {
      console.warn("Reservation confirmation email to guest failed:", confirmErr.message || confirmErr);
    }

    return res.json({ success: true, message: "Reservation request sent." });
  } catch (err) {
    console.error("Reservation form error:", err);
    return res.status(500).json({
      success: false,
      error: "Failed to submit reservation. Please try again later.",
    });
  }
});

export default router;
