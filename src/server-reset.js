// Express backend logic for password reset token generation
const express = require("express");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const sendPasswordResetEmail = require("./sendEmail");
const app = express();
app.use(bodyParser.json());

// Simulated user database
let users = [
  // Example: { email: 'user@example.com', password: '...', resetToken: '', resetTokenExpiry: 0 }
];

// Step 2: Generate token and store with expiration
app.post("/api/request-password-reset", (req, res) => {
  const { email } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) {
    // For security, always respond with success
    return res.json({ success: true });
  }
  // Generate secure token
  const token = crypto.randomBytes(32).toString("hex");
  user.resetToken = token;
  user.resetTokenExpiry = Date.now() + 3600 * 1000; // 1 hour expiry
  // Send password reset email
  sendPasswordResetEmail(email, token)
    .then(() => {
      return res.json({ success: true });
    })
    .catch(() => {
      return res.json({ success: false, error: "Failed to send email" });
    });
});

module.exports = app;
