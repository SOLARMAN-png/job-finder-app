const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const sendPasswordResetEmail = require("./sendEmail");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory user store (replace with DB in production)
const users = [];

// Registration endpoint
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.json({ success: false, error: "All fields required." });
  }
  const existing = users.find((u) => u.email === email);
  if (existing) {
    return res.json({ success: false, error: "Email already registered." });
  }
  const hashed = await bcrypt.hash(password, 10);
  users.push({ username, email, password: hashed });
  res.json({ success: true });
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.json({ success: false, error: "Invalid credentials." });
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.json({ success: false, error: "Invalid credentials." });
  }
  res.json({ success: true, username: user.username });
});

// Password reset request endpoint
app.post("/api/request-password-reset", (req, res) => {
  const { email } = req.body;
  const user = users.find((u) => u.email === email);
  // For security, always respond with success
  if (!user) {
    console.log("Password reset requested for non-existent email:", email);
    return res.json({ success: true });
  }
  // Generate a dummy token for testing
  const token = Math.random().toString(36).substring(2);
  user.resetToken = token;
  user.resetTokenExpiry = Date.now() + 3600 * 1000;
  console.log("Attempting to send password reset email to:", email);
  sendPasswordResetEmail(email, token)
    .then(() => {
      console.log("Password reset email sent!");
      res.json({ success: true });
    })
    .catch((error) => {
      console.log("Failed to send password reset email:", error);
      res.json({ success: false, error: error.message });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
