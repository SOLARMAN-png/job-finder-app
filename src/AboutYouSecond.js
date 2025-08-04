import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutYouSecondPage = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleRadioClick = (type) => {
    setSelected((prev) => (prev === type ? "" : type));
  };

  return (
    <div className="aboutYou-secondPageContainer">
      <div className="aboutYou-secondPageLeftContainer">
        <div className="aboutYou-secondPageLeftContent">
          <button
            className="AboutYou-secondPageBackButton"
            onClick={() => navigate("/aboutyoufirst")}
          >
            ↲
          </button>
          <h1 className="AboutYou-secondPageTopic">Tell us about you.</h1>
          <p className="AboutYou-secondPageSubTopic">
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
            className="aboutYou-secondPageRadioButtonOne"
            onClick={() => handleRadioClick("freshGraduate")}
            style={{
              border:
                selected === "freshGraduate" ? "2px solid blue" : undefined,
            }}
          >
            <label htmlFor="" className="freshGraduate-label">
              Fresh Graduate
            </label>
            <input
              type="radio"
              checked={selected === "freshGraduate"}
              readOnly
            />
          </button>

          <button
            className="aboutYou-secondPageRadioButtonTwo"
            onClick={() => handleRadioClick("workExperienceLessThanOneYear")}
            style={{
              border:
                selected === "workExperienceLessThanOneYear"
                  ? "2px solid blue"
                  : undefined,
            }}
          >
            <label htmlFor="" className="workExperienceLessThanOneYear-label">
              Work Experience Less Than One Year
            </label>
            <input
              type="radio"
              checked={selected === "workExperienceLessThanOneYear"}
              readOnly
            />
          </button>

          <button
            className="aboutYou-secondPageRadioButtonThree"
            onClick={() => handleRadioClick("workExperienceTwoToFourYears")}
            style={{
              border:
                selected === "workExperienceTwoToFourYears"
                  ? "2px solid blue"
                  : undefined,
            }}
          >
            <label htmlFor="" className="workExperienceTwoToFourYears-label">
              Work Experience in 2-4 Years
            </label>
            <input
              type="radio"
              checked={selected === "workExperienceTwoToFourYears"}
              readOnly
            />
          </button>

          <button
            className="aboutYou-secondPageRadioButtonFour"
            onClick={() => handleRadioClick("workExperienceMoreThanFourYears")}
            style={{
              border:
                selected === "workExperienceMoreThanFourYears"
                  ? "2px solid blue"
                  : undefined,
            }}
          >
            <label htmlFor="" className="workExperienceMoreThanFourYears-label">
              Work Experience more than 4 years
            </label>
            <input
              type="radio"
              checked={selected === "workExperienceMoreThanFourYears"}
              readOnly
            />
          </button>

          <button className="aboutYou-secondPageNextButton">Next</button>
        </div>
      </div>
      <div className="aboutYou-firstPageRightContainer">
        <img
          src="/AboutYou-page2.png"
          alt=""
          className="aboutYou-firstPageRightContainerImg"
        />
      </div>
    </div>
  );
};

export default AboutYouSecondPage;
