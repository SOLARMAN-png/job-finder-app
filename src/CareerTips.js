import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CareerTipsPage = () => {
  const [tips, setTips] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => {
        setTips(data.careerTips || []);
      });
  }, []);

  // Pagination logic: 4 items per page
  const tipsPerPage = 4;
  const startIdx = page * tipsPerPage;
  const endIdx = startIdx + tipsPerPage;
  const paginatedTips = tips.slice(startIdx, endIdx);
  const totalPages = Math.ceil(tips.length / tipsPerPage);

  // Carousel logic: show 3 slides at a time, sliding through tips
  const getCarouselSlides = () => {
    if (tips.length < 3) return [];
    const slides = [];
    for (let i = 0; i < 3; i++) {
      const idx = (carouselIndex + i) % tips.length;
      slides.push(tips[idx]);
    }
    return slides;
  };
  const carouselSlides = getCarouselSlides();

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev === 0 ? tips.length - 1 : prev - 1));
  };

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % tips.length);
  };

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

      <div className="careerTips-carouselContainer">
        {carouselSlides.length === 3 && (
          <>
            {/* Left Slide */}
            <div className="left-slide">
              <div className="sideSildeCarousel-headerContainer">
                <div className="sideSildeCarousel-authorNameContainer">
                  <p className="carousel-authorName">
                    {carouselSlides[0]?.author}
                  </p>
                </div>
                <div className="sideSildeCarousel-dateContainer">
                  <p className="carousel-date">{carouselSlides[0]?.date}</p>
                </div>
              </div>
              <div className="sideSlide-contentContainer">
                <h3 className="sideSlide-articleTopic">
                  {carouselSlides[0]?.title}
                </h3>
                <p className="sideSlide-articleIntroduction">
                  {carouselSlides[0]?.content?.introduction}
                </p>
                <button className="sideSlideCarousel-readMoreBtn">
                  Read more
                </button>
              </div>
            </div>
            {/* Middle Slide */}
            <div className="middle-slide">
              <div className="middleSildeCarousel-headerContainer">
                <div className="middleSildeCarousel-authorNameContainer">
                  <p className="middleSildeCarousel-authorName">
                    {carouselSlides[1]?.author}
                  </p>
                </div>
                <div className="middleSildeCarousel-dateContainer">
                  <p className="middleSildeCarousel-date">
                    {carouselSlides[1]?.date}
                  </p>
                </div>
              </div>
              <div className="middleSlide-contentContainer">
                <h3 className="middleSlide-articleTopic">
                  {carouselSlides[1]?.title}
                </h3>
                <p className="middleSlide-articleIntroduction">
                  {carouselSlides[1]?.content?.introduction}
                </p>
                <button className="carousel-readMoreBtn">Read more</button>
              </div>
            </div>
            {/* Right Slide */}
            <div className="right-slide">
              <div className="sideSildeCarousel-headerContainer">
                <div className="sideSildeCarousel-authorNameContainer">
                  <p className="carousel-authorName">
                    {carouselSlides[2]?.author}
                  </p>
                </div>
                <div className="sideSildeCarousel-dateContainer">
                  <p className="carousel-date">{carouselSlides[2]?.date}</p>
                </div>
              </div>
              <div className="sideSlide-contentContainer">
                <h3 className="sideSlide-articleTopic">
                  {carouselSlides[2]?.title}
                </h3>
                <p className="sideSlide-articleIntroduction">
                  {carouselSlides[2]?.content?.introduction}
                </p>
                <button className="sideSlideCarousel-readMoreBtn">
                  Read more
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="careerTips-carouselButtonContainer">
        <button
          className="carousalButton-leftSlide"
          onClick={handlePrevCarousel}
        ></button>
        <button className="carousalButton-middleSlide" disabled></button>
        <button
          className="carousalButton-rightSlide"
          onClick={handleNextCarousel}
        ></button>
      </div>

      {/* ...rest of your code... */}
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
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={page === i ? "active" : ""}
              onClick={() => setPage(i)}
            >
              {i + 1}
            </button>
          ))}
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
