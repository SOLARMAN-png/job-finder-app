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
      <div className="recoveryEmail-leftContainer">
        <div className="recoveryEmail-leftContent">
          <button className="AboutYou-firstPageBackButton">&#8592;</button>
          <h2 className="recoveryEmail-title">Recovery Password</h2>
          <p className="recoveryEmail-subtitle">
            Enter your email address to receive a link to reset <br />
            your password.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              id="recoveryEmail-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="recoveryEmail-submitButton">
              Submit
            </button>
          </form>
          <p className="recoveryEmail-loginNote">
            Remember password? <Link to="/login">Login</Link>
          </p>
          <p className="recoveryEmail-termsNote">
            By continuing you agree to jobFind Term of use and confirm that
            <br />
            you have read the privacy policy
          </p>
        </div>
      </div>
      <div className="recoveryEmail-rightContent">
        <img
          src="/recoveryEmailPage-img.png"
          alt=""
          className="recoveryEmail-rightImage"
        />
      </div>
    </div>
  );
};

export default RecoveryEmailPage;
