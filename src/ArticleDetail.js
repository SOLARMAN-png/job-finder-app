import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ArticleDetailsPage = () => {
  const { id } = useParams();
  const [tip, setTip] = useState(null);
  const [relatedTips, setRelatedTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTip = async () => {
      try {
        const response = await fetch("/data/db.json");
        const data = await response.json();
        const tipsArr = data.careerTips || [];
        const found = tipsArr.find((item) => String(item.id) === String(id));
        setTip(found);
        // Get first 3 related tips (excluding current)
        const related = tipsArr
          .filter((item) => String(item.id) !== String(id))
          .slice(0, 3);
        setRelatedTips(related);
        setLoading(false);
      } catch (err) {
        setError("Failed to load article.");
        setLoading(false);
      }
    };
    fetchTip();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!tip) return <div>Article not found.</div>;

  return (
    <div className="articleDetails-pageContainer">
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
        Home &gt; CareerTips &gt; ArticleDetails &gt; {tip.title}
      </div>

      <div className="articleDetailsPage-contentContainer">
        <div className="articleDetailsPage-mainContainer">
          <div className="articleDetailsPage-imageContainer">
            {tip.image && <img src={tip.image} alt={tip.title} />}
          </div>
          <div className="articleDetailsPage-headerContainer">
            <div className="articleDetailsPage-authorNameContainer">
              <p className="articleDetailsPage-authorName">{tip.author}</p>
            </div>
            <div className="articleDetailsPage-dateContainer">
              <p className="articleDetailsPage-date">{tip.date}</p>
            </div>
          </div>
          <div className="articleDetailsPage-articleContainer">
            <h2 className="articleDetailsPage-articleTitle">{tip.title}</h2>
            <p className="articleDetailsPage-articleIntroduction">
              {tip.content?.introduction}
            </p>
            <p className="aricleDetailsPage-articleContent">
              {tip.content?.main}
            </p>
          </div>
        </div>
        <div className="articleDetailsPage-sideContainer">
          <h2 className="articleDetailsPage-sideContainerTitle">
            Related articles
          </h2>
          {relatedTips.map((related) => (
            <div
              key={related.id}
              className="articleDetailsPage-relatedArticlesDiv"
            >
              <div className="articleDetailsPage-relatedArticlesImg">
                {related.image && (
                  <img
                    src={related.image}
                    alt={related.title}
                    className="articleDetailsPage-relatedArticlesImg"
                  />
                )}
              </div>
              <div className="articleDetailsPage-relatedArticlesContent">
                <p className="articleDetailsPage-relatedArticlesDate">
                  {related.date}
                </p>
                <h3 className="articleDetailsPage-relatedArticlesTitle">
                  {related.title}
                </h3>
                <p className="articleDetailsPage-relatedArticlesIntro">
                  {related.content?.introduction}
                </p>
                <Link
                  to={`/articledetails/${related.id}`}
                  className="relatedArticle-readMoreLink"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
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

export default ArticleDetailsPage;
