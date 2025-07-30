// sendEmail.js
const SibApiV3Sdk = require("sib-api-v3-sdk");
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = "38PHm0vZMEagqTx9";

function sendPasswordResetEmail(email, token) {
  const resetUrl = `http://localhost:3000/enterNewPasswordPage?token=${token}`;
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  const sendSmtpEmail = {
    to: [{ email }],
    sender: { email: "sanusitaiwo123@gmail.com", name: "JobFind" },
    subject: "Password Reset Request",
    htmlContent: `<p>You requested a password reset.</p><p>Click <a href='${resetUrl}'>here</a> to reset your password. This link will expire in 1 hour.</p>`,
  };

  return apiInstance
    .sendTransacEmail(sendSmtpEmail)
    .then((data) => {
      console.log("Email sent:", data);
    })
    .catch((error) => {
      console.log("Error sending email:", error);
    });
}

module.exports = sendPasswordResetEmail;
