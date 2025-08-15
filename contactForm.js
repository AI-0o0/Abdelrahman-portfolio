document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // stop form from reloading the page

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  try {
    const response = await fetch("/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      document.getElementById("formSuccess").style.display = "block";
      document.getElementById("contactForm").reset();
    } else {
      alert("Error sending message.");
    }
  } catch (err) {
    console.error(err);
    alert("Failed to send message.");
  }
});
