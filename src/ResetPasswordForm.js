import React, { useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

const ResetPasswordForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const getPasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[a-zA-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++;
    return strength;
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrength(getPasswordStrength(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (
      password.length < 8 ||
      !/[a-zA-Z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      setError(
        "Password must be at least 8 characters and contain both letters and numbers."
      );
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Password reset successful!");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(data.error || "Reset failed");
      }
    } catch {
      setError("Network error");
    }
    setLoading(false);
  };

  return (
    <div className="recoveryPassword-page">
      <div className="RecoveryPasswordPage-leftContent">
        <h2 className="recoveryPassword-title">Reset Password</h2>
        <p className="recoveryPassword-subtitle">
          Enter your new password below.
          <br />
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <div className="passwordStrength-container">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="passwordStrength"
                style={{
                  backgroundColor: i < passwordStrength ? "blue" : "#eee",
                  height: "8px",
                  margin: "2px",
                  borderRadius: "4px",
                }}
              ></div>
            ))}
          </div>
          <p className="recoveryPassword-passwordNote">
            Password must be at least 8 characters with a combination of letters
            <br />
            and numbers
          </p>
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div>
            <input
              type="checkbox"
              name="myCheckbox"
              id="myCheckbox"
              value="checkboxValue"
              required
            />
            <label htmlFor="myCheckbox" className="recoveryPassword-checkbox">
              By continuing you agree to jobFind Term of use and confirm that
              <br />
              you have read the privacy policy
            </label>
          </div>
          <button
            className="recoverPassword-submit"
            type="submit"
            disabled={loading}
          >
            {loading ? "Resetting..." : "Submit"}
          </button>
          {error && (
            <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
          )}
          {success && (
            <div style={{ color: "green", marginTop: "10px" }}>{success}</div>
          )}
        </form>
        <p className="createAccount-loginNote">
          Remember password? <Link to="/login">Login</Link>
        </p>
      </div>
      <div className="RecoveryPasswordPage-rightContent">
        <img src="/CreateAccount.png.png" alt="Create Account" />
      </div>
    </div>
  );
};

export default ResetPasswordForm;
