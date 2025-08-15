const BOT_TOKEN = "API"; // from BotFather
const CHAT_ID = "Chat_ID"; // from @userinfobot or getUpdates
const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = `📩 *New Contact Form Submission*\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;

  fetch(TELEGRAM_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
      parse_mode: "Markdown",
    }),
  })
    .then((response) => {
      if (response.ok) {
        document.getElementById("formSuccess").style.display = "block";
        document.getElementById("contactForm").reset();
      } else {
        alert("Error sending message. Please try again.");
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to send message.");
    });
});
