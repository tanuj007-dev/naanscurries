import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.js";
import reservationRoutes from "./routes/reservation.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contact", contactRoutes);
app.use("/api/reservation", reservationRoutes);

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, error: "Internal server error." });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
