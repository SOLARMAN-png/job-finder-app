const AboutYouSecondPage = () => {
  return (
    <div className="aboutYou-secondPageContainer">
      <div className="aboutYou-secondPageLeftContainer">
        <button class="back-button">&#8592;</button>
        <h1>Tell us about you.</h1>
        <p>From the options below, which one best describes your position?</p>
        <div class="steps">
          <div class="step-circle">&#10003;</div>
          <div class="step-circle">2</div>
          <div class="step-dot"></div>
          <div class="step-dot"></div>
        </div>
        <label class="option selected">
          <input type="radio" name="experience" checked />
          Fresh Graduate
        </label>

        <label class="option">
          <input type="radio" name="experience" />
          Work experience less than 1 year
        </label>
        <label class="option">
          <input type="radio" name="experience" />
          Work experience in 2–4 year
        </label>

        <label class="option">
          <input type="radio" name="experience" />
          Work experience more than 4 year
        </label>

        <button class="next-btn">Next</button>
      </div>
      <div className="aboutYou-secondPageLeftContainer">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default AboutYouSecondPage;
