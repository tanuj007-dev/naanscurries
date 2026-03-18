# Naans & Curries – Backend (Express + SMTP)

Sends contact and reservation form submissions via email using Nodemailer.

## Setup

1. **Install dependencies**
   ```bash
   cd server && npm install
   ```

2. **Configure environment**
   - Copy `.env.example` to `.env`
   - Set your SMTP credentials and `MAIL_TO` (where form submissions are sent)

   Example for **Gmail**:
   - Use an [App Password](https://support.google.com/accounts/answer/185833), not your normal password
   - `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_USER=your@gmail.com`, `SMTP_PASS=app-password`

3. **Run**
   ```bash
   npm run dev   # development with auto-reload
   npm start     # production
   ```

Server runs on **http://localhost:4000** by default. The Vite dev server proxies `/api` to this backend.

## API

- `POST /api/contact` – Contact form (body: `name`, `email`, `phone?`, `message?`)
- `POST /api/reservation` – Reservation form (body: `location`, `name`, `email`, `phone?`, `guests`, `date`, `time`, `message?`)
- `GET /api/health` – Health check

## Production

- Set `PORT` in `.env` if needed.
- In production, set `VITE_API_URL` when building the frontend to the full URL of this API (e.g. `https://api.yoursite.com`) so the client can reach it.
