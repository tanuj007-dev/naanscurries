# Naans & Curries API – Schema for Postman

Base URL (local): `http://localhost:4000`

---

## GET /api/health

**Description:** Check if the server is running.

**Response:** `200`  
```json
{ "ok": true }
```

---

## POST /api/contact

**Headers:**  
`Content-Type: application/json`

**Body (JSON):**

| Field   | Type   | Required | Description        |
|---------|--------|----------|--------------------|
| name    | string | Yes      | Sender name        |
| email   | string | Yes      | Sender email       |
| phone   | string | No       | Phone number       |
| message | string | No       | Message content    |

**Example body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+506 12345678",
  "message": "Hello, I would like to know more about your catering options."
}
```

**Success:** `200`  
```json
{ "success": true, "message": "Message sent successfully." }
```

**Error (validation):** `400`  
```json
{ "success": false, "error": "Name and email are required." }
```

---

## POST /api/reservation

**Headers:**  
`Content-Type: application/json`

**Body (JSON):**

| Field    | Type   | Required | Description              |
|----------|--------|----------|--------------------------|
| location | string | No       | Restaurant location      |
| name     | string | Yes      | Guest name               |
| email    | string | Yes      | Guest email              |
| phone    | string | No       | Phone number             |
| guests   | string | No       | e.g. "2 Persons"         |
| date     | string | Yes      | Date (YYYY-MM-DD)        |
| time     | string | Yes      | e.g. "07:00 pm"         |
| message  | string | No       | Special instructions     |

**Example body:**
```json
{
  "location": "Naans & Curries, Lindora Plaza",
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+506 87654321",
  "guests": "2 Persons",
  "date": "2026-03-20",
  "time": "07:00 pm",
  "message": "Window table if possible."
}
```

**Success:** `200`  
```json
{ "success": true, "message": "Reservation request sent." }
```

**Error (validation):** `400`  
```json
{ "success": false, "error": "Name, email, date and time are required." }
```

**Error (server):** `500`  
```json
{ "success": false, "error": "Failed to submit reservation. Please try again later." }
```
