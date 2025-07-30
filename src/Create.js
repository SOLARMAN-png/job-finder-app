import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Password strength logic
  const getPasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[a-zA-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++; // optional: special char
    return strength;
  };

  // Update password strength as user types
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrength(getPasswordStrength(value));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    // Validate password
    if (
      password.length < 8 ||
      !/[a-zA-Z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      setError(
        "Password must be at least 8 characters and contain both letters and numbers."
      );
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Account created!");
        setUsername("");
        setEmail("");
        setPassword("");
        setPasswordStrength(0);
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (err) {
      setError("Network error");
    }
    setLoading(false);
  };

  return (
    <div className="create-account-page">
      <div className="createAccount-leftContent">
        <h2 className="createAccount-title">Create New Account</h2>
        <p className="createAccount-subtitle">
          Help us get to know you from the information you <br /> provide to get
          free access to JobFind
        </p>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            id="createPage-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email Address"
            id="createPage-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="createPage-password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <div
            className="password-icon-container"
            onClick={handleTogglePassword}
            style={{ cursor: "pointer" }}
          >
            <img
              src={
                showPassword
                  ? "/hide-password-img.png"
                  : "/show-password-img.png"
              }
              alt="password icon"
              className="password-icon"
            />
          </div>
          <div className="createAccount-passwordStrengthContainer">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="createAccount-passwordStrength"
                style={{
                  backgroundColor: i < passwordStrength ? "blue" : "#eee",
                  width: "100px",
                  height: "6px",
                  marginLeft: "2px",
                  marginTop: "10px",
                  borderRadius: "4px",
                }}
              ></div>
            ))}
          </div>
          <p className="createAccount-passwordNote">
            Password must be 8 characters with a combination of letters <br />{" "}
            and numbers
          </p>
          {error && (
            <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
          )}
          {success && (
            <div style={{ color: "green", marginTop: "10px" }}>{success}</div>
          )}
          <button
            className="createAccount-submit"
            type="submit"
            disabled={loading}
          >
            {loading ? "Registering..." : "Submit"}
          </button>
        </form>

        <p className="createAccount-loginNote">
          Remember password? <Link to="/login">Login</Link>
        </p>
      </div>

      <div className="createAccount-rightContent">
        <img src="/CreateAccount.png.png" alt="Create Account" />
      </div>
    </div>
  );
};

export default CreateAccount;
