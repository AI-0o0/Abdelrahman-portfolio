// sendTelegram.js (Node.js only)
const TELE_API = process.env.TELE_API; // GitHub Secret
const CHAT_ID = process.env.CHAT_ID; // GitHub Secret

import fetch from "node-fetch";

async function sendMessage(name, email, message) {
  const text = `📩 *New Contact Form Submission*\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELE_API}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: "Markdown",
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Failed to send message:", err);
  }
}

// Example usage
sendMessage("John Doe", "john@example.com", "Hello from GitHub Actions!");
