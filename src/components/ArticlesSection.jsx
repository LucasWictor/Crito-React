import React, { useState, useEffect } from "react";

function ArticlesSection({ id }) {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <section className="articles-section">
      <div className="container">
        <div className="section-title">
          <p>Article & News</p>
          <h2>Get Every Single Article & News</h2>
        </div>
        <div className="browseteam">
          <a className="btn-blank" href="index.html">
            Browse Team<i className="fa-regular fa-arrow-up-right"></i>
          </a>
        </div>
        <div className="article-box">
          {articles.map((article, index) => (
            <div className="guide-box" key={index}>
              <a href={article.link}>
                <img className="article-pic" src={article.image} alt={article.title} />
              </a>
              <p>{article.category}</p>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
        <div className="carousel">
          {articles.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === activeDot ? "active" : ""}`}
            ></div>
          ))}
        </div>
        {error && <p>{error}</p>}
      </div>
    </section>
  );
}

export default ArticlesSection;