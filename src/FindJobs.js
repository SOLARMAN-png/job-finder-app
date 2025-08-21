import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const FILTERS = {
  location: ["Remote", "On-site"],
  jobType: ["Full-time", "Part-time", "Contract"],
  industry: [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Retail",
    "Hospitality",
    "Manufacturing",
  ],
};

const FindJobsPage = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    location: [],
    jobType: [],
    industry: [],
  });

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data.companies);
        setFilteredCompanies(data.companies.slice(0, 3));
        // Get the first six jobs from the first three companies
        const jobs = data.companies
          .slice(0, 3)
          .flatMap((c) => c.jobs)
          .slice(0, 6);
        setFilteredJobs(jobs);
      });
  }, []);

  const handleFilterChange = (type, value) => {
    setSelectedFilters((prev) => {
      const arr = prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value];
      return { ...prev, [type]: arr };
    });
  };

  const applyFilters = () => {
    let filtered = companies;
    // Filter companies
    if (selectedFilters.industry.length > 0) {
      filtered = filtered.filter((c) =>
        selectedFilters.industry.includes(c.industry)
      );
    }
    if (selectedFilters.location.length > 0) {
      filtered = filtered.filter((c) =>
        selectedFilters.location.some((loc) =>
          loc === "Remote"
            ? c.jobs.some((j) => j.location === "Remote")
            : c.location === loc
        )
      );
    }
    setFilteredCompanies(filtered.slice(0, 3));

    // Featured jobs: always show jobs from companies in companyJobs-section
    const jobs = filtered.slice(0, 3).flatMap((c) => c.jobs);
    let filteredJobsList = jobs;
    if (selectedFilters.jobType.length > 0) {
      filteredJobsList = filteredJobsList.filter((j) =>
        selectedFilters.jobType.some(
          (type) => (j.jobType || "").toLowerCase() === type.toLowerCase()
        )
      );
    }
    if (selectedFilters.location.length > 0) {
      filteredJobsList = filteredJobsList.filter((j) =>
        selectedFilters.location.some(
          (loc) => (j.location || "").toLowerCase() === loc.toLowerCase()
        )
      );
    }
    setFilteredJobs(filteredJobsList);
  };

  return (
    <div className="findJobsPage-conatainer">
      <nav className="homepage-navbar">
        <ul className="homepage-navbar-list">
          <li className="homepage-navbar-item">
            <a href="/" className="homepage-navbar-links">
              Home
            </a>
          </li>
          <li>
            <a href="/findjobs" className="homepage-navbar-links">
              FindJobs
            </a>
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

      <div className="show-directory">Home &gt; Find Jobs</div>

      <div className="searchJobs-section">
        <p className="findJobs-inputTitle">Search Jobs</p>
        <div className="findJobs-inputContainer">
          <input
            type="text"
            placeholder="Search Jobs, Location, and Category"
            id="findJobs-input"
            required
          />
          <button className="findJob-searchButton">Search</button>
        </div>
      </div>
      <div className="findJobs-container">
        <div className="findJobs-leftContentContainer">
          <div className="findJobs-CompaniesContainer">
            <div className="findJobs-CompaniesHeaderContainer">
              <h2 className="findJobs-CompaniesHeaderTitle">
                Bonafide Companies
              </h2>
              <button className="findJobs-CompaniesSeeAllBtn">See all</button>
            </div>

            <div className="companyJobs-section">
              <div className="companyJobs-list">
                {filteredCompanies.map((company) => (
                  <div className="companyJob-item" key={company.id}>
                    <img src={company.logo} alt={company.name} />
                    <p>
                      <b>{company.name}</b>
                    </p>
                    <p>Industry: {company.industry}</p>
                    <p>Location: {company.location}</p>
                    <button
                      className="browse-jobs"
                      onClick={() => navigate(`/jobdetails/${company.id}`)}
                    >
                      Browse Jobs
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="findJobs-newestJobsContainer">
            <div className="findJobs-newestJobsHeaderContainer">
              <h2 className="findJobs-newestJobsHeaderTitle">Newest Jobs</h2>
              <button className="findJobs-newestJobsSeeAllBtn">See all</button>
            </div>

            <div className="featuredJobs-section">
              <div className="featuredJobs-list">
                {filteredJobs.map((job) => (
                  <div className="featuredJob-item" key={job.id}>
                    <h3>{job.title}</h3>
                    <p>Type: {job.jobType}</p>
                    <p>Location: {job.location}</p>
                    <p>Salary: {job.salary}</p>
                    <p>Description: {job.description}</p>
                    <button
                      className="applyNow"
                      onClick={() => navigate(`/jobbreakdown/${job.id}`)}
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="findJobs-rightContentContainer">
          <div className="filter-section">
            <div className="filter-headerContainer">
              <h2 className="filter-sectionTitle">Filter search</h2>
              <button className="applyFilter-button" onClick={applyFilters}>
                Apply
              </button>
            </div>

            <div className="location-section">
              <p className="findJobs-locationFilterOption">Location</p>
              {FILTERS.location.map((loc) => (
                <span key={loc}>
                  <label htmlFor={loc}>{loc}</label>
                  <input
                    type="checkbox"
                    id={loc}
                    checked={selectedFilters.location.includes(loc)}
                    onChange={() => handleFilterChange("location", loc)}
                  />
                </span>
              ))}
            </div>
            <div className="jobType-section">
              <p className="findJobs-jobTypeFilterOption">Job Type</p>
              {FILTERS.jobType.map((type) => (
                <span key={type}>
                  <label htmlFor={type}>{type}</label>
                  <input
                    type="checkbox"
                    id={type}
                    checked={selectedFilters.jobType.includes(type)}
                    onChange={() => handleFilterChange("jobType", type)}
                  />
                </span>
              ))}
            </div>
            <div className="industry-section">
              <p className="findJobs-industryFilterOption">Industry</p>
              {FILTERS.industry.map((ind) => (
                <span key={ind}>
                  <label htmlFor={ind}>{ind}</label>
                  <input
                    type="checkbox"
                    id={ind}
                    checked={selectedFilters.industry.includes(ind)}
                    onChange={() => handleFilterChange("industry", ind)}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
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

export default FindJobsPage;
