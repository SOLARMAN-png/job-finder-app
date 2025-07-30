import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const JobBreakdownPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => {
        let foundJob = null;
        let foundCompany = null;
        for (const c of data.companies) {
          const j = c.jobs.find((job) => String(job.id) === String(id));
          if (j) {
            foundJob = j;
            foundCompany = c;
            break;
          }
        }
        setJob(foundJob);
        setCompany(foundCompany);
      });
  }, [id]);

  return (
    <div className="jobBreakdown-pageLayout">
      <nav className="homepage-navbar">
        <ul className="homepage-navbar-list">
          <li className="homepage-navbar-item">
            <a
              href="#"
              className="homepage-navbar-links"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <Link to="/findjobs" className="homepage-navbar-links">
              FindJobs
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="homepage-navbar-links"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/careertips";
              }}
            >
              CareerTips
            </a>
          </li>
          <li>
            <a href="" className="homepage-navbar-links">
              AboutUs
            </a>
          </li>
        </ul>
        <button
          className="login-button"
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </button>
        <button
          className="get-started"
          onClick={() => (window.location.href = "/create")}
        >
          Get Started
        </button>
      </nav>

      <div className="show-directory">
        Home &gt; Find Jobs &gt; Detail Company &gt; Job breakdown
      </div>

      <div className="jobBreakdown-content-container">
        <div className="jobBreakdown-leftSideContent">
          <div className="jobBreakdown-imageContainer">
            <img
              src={company?.logo || ""}
              alt={company?.name || ""}
              className="jobBreakdown-image"
            />
            <button className="jobBreakdown-applyButton">Apply Now</button>
          </div>
          <div className="jobBreakdown-summaryContainer">
            <h2 className="jobBreakdown-topic">Job Summary</h2>
            <div className="jobBreakdown-details">
              <p className="jobBreakdown-title">
                <b>Job Title:</b> {job?.title}
              </p>
              <p className="jobBreakdown-category">
                <b>Category:</b> {job?.category}
              </p>
              <p className="jobBreakdown-location">
                <b>Location:</b> {job?.location}
              </p>
              <p className="jobBreakdown-salary">
                <b>Salary Range:</b> {job?.salary}
              </p>
              <p className="jobBreakdown-worktype">
                <b>Work Type:</b> {job?.workType}
              </p>
              <p className="jobBreakdown-jobtype">
                <b>Job Type:</b> {job?.jobType}
              </p>
            </div>
          </div>

          <div className="jobBreakdown-notes">
            <p className="jobBreakdown-description">
              <b>Job Description:</b> {job?.description}
            </p>
            <p className="jobBreakdown-requirements">
              <b>Job Requirements:</b>
              <ul>
                {job?.requirements?.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </p>
            <p className="jobBreakdown-benefits">
              <b>Job Benefits:</b>
              <ul>
                {job?.benefits?.map((ben, idx) => (
                  <li key={idx}>{ben}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
        <div className="jobBreakdown-sideBarContainer"></div>
      </div>

      <div className="footer-section">
        <div>
          <p>
            Explore the thousands of job opportunities <br /> with all the
            information you need and <br />
            manage all your job appliactions from start <br />
            to finish
          </p>
        </div>
        <div>
          <p>© 2023 JobFind. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default JobBreakdownPage;
