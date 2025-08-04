import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutYouFirstPage = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleRadioClick = (type) => {
    setSelected((prev) => (prev === type ? "" : type));
  };

  const handleNext = () => {
    navigate("/aboutyousecond");
  };

  return (
    <div className="aboutYou-firstPageContainer">
      <div className="aboutYou-firstPageLeftContainer">
        <div className="aboutYou-firstPageLeftContent">
          <button className="AboutYou-firstPageBackButton">&#8592;</button>
          <h1 className="AboutYou-firstPageTopic">Tell us about you.</h1>
          <p className="AboutYou-firstPageSubTopic">
            Which title most closely matches your day-to-day <br />
            role?
          </p>
          <div className="steps">
            <div className="step-dot">
              <span className="step-span">1</span>
            </div>
            <div className="step-dot">
              <span className="step-span">2</span>
            </div>
            <div className="step-dot">
              <span className="step-span">3</span>
            </div>
            <div className="step-dot">
              <span className="step-span">4</span>
            </div>
          </div>

          <button
            className="aboutYou-firstPageRadioButtonOne"
            onClick={() => handleRadioClick("jobSeeker")}
            style={{
              border: selected === "jobSeeker" ? "2px solid blue" : undefined,
            }}
          >
            <label htmlFor="" className="jobSeeker-label">
              Job Seeker
            </label>
            <input type="radio" checked={selected === "jobSeeker"} readOnly />
          </button>

          <button
            className="aboutYou-firstPageRadioButtonTwo"
            onClick={() => handleRadioClick("recruiter")}
            style={{
              border: selected === "recruiter" ? "2px solid blue" : undefined,
            }}
          >
            <label htmlFor="" className="recruiter-label">
              Recruiter
            </label>
            <input type="radio" checked={selected === "recruiter"} readOnly />
          </button>

          <button className="aboutYou-firstPageNextButton" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
      <div className="aboutYou-firstPageRightContainer">
        <img
          src="/AboutYou-page1.png"
          alt=""
          className="aboutYou-firstPageRightImg"
        />
      </div>
    </div>
  );
};

export default AboutYouFirstPage;
