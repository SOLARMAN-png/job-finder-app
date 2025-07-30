const AboutYouFifthPage = () => {
  return (
    <div className="aboutYou-fifthPageContainer">
      <div className="aboutYou-fifthPageLeftContainer">
        <div class="back-arrow">&#8592;</div>
        <h1>Tell us about you.</h1>
        <p class="subtext">
          Please help us by entering the data below correctly to make it easier
          for us to know who you are.
        </p>
        <div class="steps">
          <div class="step">&#10003;</div>
          <div class="step">&#10003;</div>
          <div class="step">&#10003;</div>
          <div class="step">4</div>
        </div>
        <div class="upload-section">
          <div style="display: flex; align-items: center;">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              class="profile-image"
            />
            <div>
              <div class="upload-label">Upload Image.</div>
              <div style="font-size: 12px; color: #888;">Max. size 2 Mb</div>
            </div>
          </div>
        </div>

        <div class="upload-section">
          <div class="upload-label"></div>
          <img src="" alt="Background Preview" class="background-image" />
        </div>

        <div class="form-group">
          <input type="text" value="" />
        </div>

        <div class="form-group">
          <input type="text" value="" />
        </div>

        <button>Next</button>
      </div>
      <div className="aboutYou-fifthPageRightContainer"></div>
    </div>
  );
};

export default AboutYouFifthPage;
