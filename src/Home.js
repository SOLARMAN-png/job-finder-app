import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Also update state after login/logout in this tab
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      navigate("/login");
    }
  };

  return (
    <div className="home-page">
      <nav className="homepage-navbar">
        <ul className="homepage-navbar-list">
          <li className="homepage-navbar-item">
            <a href="" className="homepage-navbar-links">
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

        {isLoggedIn ? (
          <button className="login-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button
            className="login-button"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </button>
        )}
        <button
          className="get-started"
          onClick={() => (window.location.href = "/create")}
        >
          Get Started
        </button>
      </nav>

      <div className="homepage-contentContainer">
        <div className="homepage-leftContentContainer">
          <div className="homepage-leftContent">
            <div className="homepagetitle-container">
              <h2 className="homepage-title">
                #The world's leading job search platform
              </h2>
            </div>

            <div className="homepage-subtitle-container">
              <h3 className="homepage-subtitle">
                Find a job and become a <br /> professional in your <br /> dream
                field.
              </h3>
              <p className="homepage-description">
                Explore thousands of job opportunities with all the information
                you need, <br />
                and manage all your job applications from start to finish
              </p>
            </div>

            <div className="homepage-searchContainer">
              <input
                type="text"
                placeholder="search jobs, location and categories"
                id="homePage-searchInput"
                required
              />
              <button className="homePage-searchButton">Find job</button>
            </div>
          </div>
        </div>

        <div className="homePage-rightContentContainer">
          <div className="homepage-imageContainer">
            <img
              src="/HomePage-image.jpg"
              alt="Job Search Illustration"
              className="homepage-image"
            />
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

export default HomePage;
