import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const CompanydetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.companies.find((c) => String(c.id) === String(id));
        setCompany(found);
      });
  }, [id]);

  return (
    <div className="companyDetailsPage-container">
      <nav className="homepage-navbar">
        <ul className="homepage-navbar-list">
          <li className="homepage-navbar-item">
            <Link to="/" className="homepage-navbar-links">
              Home
            </Link>
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
        Home &gt; Find Jobs &gt; Detail Company {company ? company.name : ""}
      </div>

      <div className="companyDetailsPage-contentContainers">
        <div className="companyDetailsPage-mainContent">
          <div className="aboutCompany-container">
            <div className="aboutCompany-Image">
              <img src={company?.logo || ""} alt={company?.name || ""} />
            </div>
            <div className="aboutCompany-info">
              <p className="about-title">About {company?.name}</p>
              {company && company.about && (
                <>
                  <p>
                    <b>Description:</b> {company.about.description}
                  </p>
                  <p>
                    <b>Mission:</b> {company.about.mission}
                  </p>
                  <p>
                    <b>Core Values:</b> {company.about.coreValues.join(", ")}
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="jobVacancy-container">
            <p className="jobVacancy-title">Job Vacancies</p>
            <div className="jobVacancy-list">
              {company && company.jobs && company.jobs.length > 0 ? (
                company.jobs.map((job) => (
                  <div key={job.id} className="jobVacancy-item">
                    <h4>{job.title}</h4>
                    <p>
                      <b>Category:</b> {job.category}
                    </p>
                    <p>
                      <b>Type:</b> {job.jobType}
                    </p>
                    <p>
                      <b>Location:</b> {job.location}
                    </p>
                    <p>
                      <b>Salary:</b> {job.salary}
                    </p>
                    <p>
                      <b>Description:</b> {job.description}
                    </p>

                    <button
                      className="applyNow"
                      onClick={() => navigate(`/jobbreakdown/${job.id}`)}
                    >
                      Apply Now
                    </button>
                  </div>
                ))
              ) : (
                <p>No job vacancies available.</p>
              )}
            </div>
          </div>
        </div>
        <div className="companyDetailsPage-sideContent"></div>
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

export default CompanydetailsPage;
