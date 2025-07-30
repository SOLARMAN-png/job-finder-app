import React, { useState } from "react";
import { Link } from "react-router-dom";

const RecoveryEmailPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("please check your email");
  };

  return (
    <div className="recoveryEmail-container">
      <div className="recoveryEmail-leftContent">
        <h2 className="recoveryEmail-title">Recovery Password</h2>
        <p className="recoveryEmail-subtitle">
          Enter your email address to receive a link to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            id="recoveryEmail-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <p className="createAccount-loginNote">
          Remember password? <Link to="/login">Login</Link>
        </p>
        <p>
          By continuing you agree to jobFind Term of use and confirm that
          <br />
          you have read the privacy policy
        </p>
      </div>
      <div className="recoveryEmail-rightContent">
        <img src="/recoveryEmail-image.png" alt="" />
      </div>
    </div>
  );
};

export default RecoveryEmailPage;
