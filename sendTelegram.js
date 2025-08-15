import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const BOT_TOKEN = process.env.TELE_API;
const CHAT_ID = process.env.CHAT_ID;

app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;
  const text = `📩 *New Contact Form Submission*\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
    });

    const data = await response.json();
    if (data.ok) res.status(200).json({ success: true });
    else res.status(500).json({ success: false, error: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
