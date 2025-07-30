const AboutYouThirdPage = () => {
  return (
    <div className="aboutYou-thirdPageContainer">
      <div className="aboutYou-thirdPageLeftContainer">
        <button class="back-button">&#8592;</button>
        <h1>Tell us about you.</h1>
        <p>
          Choose your fields. This information will help optimize our
          performance.
        </p>
        <div class="steps">
          <div class="step-circle">&#10003;</div>
          <div class="step-circle">&#10003;</div>
          <div class="step-number">3</div>
          <div class="step-dot"></div>
        </div>
        <label class="option">
          <input type="radio" name="field" />
          Management and accounting
        </label>

        <label class="option">
          <input type="radio" name="field" />
          Architecture & civil engineering
        </label>

        <label class="option selected">
          <input type="radio" name="field" checked />
          IT & Electrical Technician
        </label>

        <label class="option">
          <input type="radio" name="field" />
          Psychology
        </label>

        <label class="option">
          <input type="radio" name="field" />
          Other
        </label>

        <button class="next-btn">Next</button>
      </div>
      <div className="aboutYou-thirdPageRightContainer">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default AboutYouThirdPage;
