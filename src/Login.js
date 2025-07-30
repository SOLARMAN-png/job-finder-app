import { Link, useNavigate } from "react-router-dom";

import React, { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Login successful!");
        // You can store username/token here if needed
        navigate("/");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Network error");
    }
    setLoading(false);
  };

  return (
    <div className="Login-page">
      <div className="loginPage-content">
        <h2 className="loginPage-title">Welcome to JobFind</h2>
        <p className="loginPage-subtitle">
          Continue with google or enter your account Jobfind
        </p>

        <div className="loginPage-socials">
          <button className="login-LinkedIn">login with LinkedIn</button>
          <br />
          <button className="login-Google">login with Google</button>
        </div>

        <p className="use-jobfind">Or login with JobFind</p>

        <form onSubmit={handleLogin}>
          <div className="login-username">
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          </div>
          <div>
            <input
              type="checkbox"
              name="myCheckbox"
              id="myCheckbox"
              value="checkboxValue"
            />
            <label htmlFor="myCheckbox">Remember me</label>
            <a
              href=""
              className="recovery-note"
              onClick={(e) => {
                e.preventDefault();
                navigate("/recoveryEmailPage");
              }}
            >
              Recover Password?
            </a>
          </div>
          {error && (
            <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
          )}
          <button
            className="loginbutton-loginpage"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="createAccount-note">
          Don't have an account?{" "}
          <Link to="/create">Create account it's free</Link>
        </p>
      </div>

      <div className="loginPage-rightContent">
        <img src="/LoginPage.png.png" alt="" />
      </div>
    </div>
  );
};

export default LoginPage;
