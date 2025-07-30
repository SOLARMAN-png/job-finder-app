const VerificationCodePage = () => {
  return (
    <div className="verificationCode-container">
      <div className="verificationCode-leftContent">
        <h2 className="verificationCode-title">Verification OTP</h2>
        <p className="verificationCode-subtitle">
          Enter the verification code we just sent to your email <br />
          address
        </p>
        <div className="verificationCode-inputs">
          <input
            type="text"
            placeholder="Enter Verification Code"
            id="verificationCode-input"
          />

          <input
            type="text"
            placeholder="Enter Verification Code"
            id="verificationCode-input"
          />

          <input
            type="text"
            placeholder="Enter Verification Code"
            id="verificationCode-input"
          />

          <input
            type="text"
            placeholder="Enter Verification Code"
            id="verificationCode-input"
          />
        </div>
        <button className="verificationCode-submit">Submit</button>
        <div className="verificationCode-resendContainer">
          <p className="verificationCode-resendNote">Resend code in</p>

          <div className="verificationCode-timer">
            <span className="verificationCode-time">00:30</span>
          </div>
        </div>
        <p className="verificationCode-footerNote">
          Didn't receive the code? Check your email spam folder
        </p>
        <a href="">Use another email address?</a>
      </div>
      <div className="verificationCode-rightContent">
        <img src="/verificationPage-image.png" alt="" />
      </div>
    </div>
  );
};

export default VerificationCodePage;
