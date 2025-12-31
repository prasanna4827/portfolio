function sendMail() {
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Construct subject and body
  const subject = `Portfolio Contact from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

  // Replace with your email
  const yourEmail = "prasanna4827@gmail.com";

  // Open default mail client / Gmail
  window.location.href = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
