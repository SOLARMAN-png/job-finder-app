import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CareerTipsPage = () => {
  const [tips, setTips] = useState([]);
  const [page, setPage] = useState(0); // 0 for first four, 1 for next four

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => {
        setTips(data.careerTips || []);
      });
  }, []);

  // Pagination logic
  const tipsPerPage = 4;
  const startIdx = page * tipsPerPage;
  const endIdx = startIdx + tipsPerPage;
  const paginatedTips = tips.slice(startIdx, endIdx);

  return (
    <div className="careerTipsPage-container">
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

      <div className="show-directory">Home &gt; Career Tips</div>

      <div className="searchJobs-section">
        <p className="findJobs-inputTitle">Search Jobs</p>
        <input
          type="text"
          placeholder="Search Jobs, Location, and Category"
          id="findJobs-input"
          required
        />
        <button className="findJob-searchButton">Search</button>
      </div>
      <div className="careerTips-contentContainer">
        <h2 className="articlePage-title">Top Articles</h2>
        <div className="careerTips-content">
          {paginatedTips.map((tip) => (
            <div key={tip.id} className="careerTips-item">
              <div className="careerTips-dateContainer">
                <p className="careerTips-date">{tip.date}</p>
              </div>
              <div className="careerTips-noteContainer">
                <div className="careerTips-authorNameContainer">
                  <p className="careerTips-authorName">{tip.author}</p>
                </div>
                <h3 className="articleTopic">{tip.title}</h3>
                <p className="articleIntroduction">
                  {tip.content?.introduction}
                </p>
                <Link
                  to={`/articledetails/${tip.id}`}
                  className="article-readMoreBtn"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
        <section className="articleSection-paginationContainer">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
          >
            &lt; Prev
          </button>
          <button className={page === 0 ? "active" : ""}>1</button>
          <button className={page === 1 ? "active" : ""}>2</button>
          <span>...</span>
          <button
            onClick={() =>
              setPage((prev) => (endIdx < tips.length ? prev + 1 : prev))
            }
            disabled={endIdx >= tips.length}
          >
            Next &gt;
          </button>
        </section>
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

export default CareerTipsPage;
