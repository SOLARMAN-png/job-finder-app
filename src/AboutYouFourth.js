const AboutYouFourthPage = () => {
  return (
    <div className="aboutYou-fourthPageContainer">
      <div className="aboutYou-fourthPageLeftContainer">
        <div class="back-arrow">&#8592;</div>
        <h1>Tell us about you.</h1>
        <p class="subtext">
          Please help us by entering the data below correctly to make it easier
          for us to know who you are.
        </p>
        <div class="steps">
          <div class="step">&#10003;</div>
          <div class="step">&#10003;</div>
          <div class="step">4</div>
        </div>
        <div class="upload-section">
          <label>
            Upload Image.{" "}
            <span style="font-size: 12px; color: #888;">(Max. size 2 Mb)</span>
          </label>
          <div class="upload-box">🔒 Upload Image</div>
        </div>
        <div class="upload-section">
          <label>Upload Background.</label>
          <div class="upload-box">🔒 recommended size 440 × 100 mm</div>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Full Name" />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Location" />
        </div>

        <button>Next</button>
      </div>
      <div className="aboutYou-fourthPageRightContainer"></div>
    </div>
  );
};

export default AboutYouFourthPage;
