const AboutYouFirstPage = () => {
  return (
    <div className="aboutYou-firstPageContainer">
      <div className="aboutYou-firstPageLeftContainer">
        <div className="aboutYou-firstPageLeftContent">
          <button class="AboutYou-firstPageBackButton">&#8592;</button>
          <h1 className="AboutYou-firstPageTopic">Tell us about you.</h1>
          <p className="AboutYou-firstPageSubTopic">
            Which title most closely matches your day-to-day <br />
            role?
          </p>
          <div class="steps">
            <div class="step-dotOne">
              <span className="step-span">1</span>
            </div>
            <div class="step-dotTwo">
              <span className="step-span">2</span>
            </div>
            <div class="step-dotThree">
              <span className="step-span">3</span>
            </div>
            <div class="step-dotFour">
              <span className="step-span">4</span>
            </div>
          </div>
          <button className="aboutYou-firstPageRadioButtonOne">
            <label htmlFor="" className="jobSeeker-label">
              Job Seeker
            </label>
            <input type="radio" />
          </button>

          <button className="aboutYou-firstPageRadioButtonTwo">
            <label htmlFor="" className="recruiter-label">
              Recruiter
            </label>
            <input type="radio" />
          </button>

          <button class="aboutYou-firstPageNextButton">Next</button>
        </div>
      </div>
      <div className="aboutYou-firstPageRightContainer">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default AboutYouFirstPage;
