import React, { useState, useEffect } from "react";

function ArticlesSection({ id }) {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [displayedArticles, setDisplayedArticles] = useState(3);

  // format the date
  const getFormattedDate = (dateString) => {
    const options = { month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("sv-se", options);
  };

  useEffect(() => {
    // Function to get articles
    const fetchArticles = async () => {
      try {
        // URL for API request
        let apiUrl = "https://win23-assignment.azurewebsites.net/api/articles";

        // If an ID has been provided, add it to the URL to get a specific article.
        if (id) {
          apiUrl += `/${id}`;
        }

        // API request to get articles
        const response = await fetch(apiUrl);

        // Check if the API request was successful
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        // Convert to JSON
        const data = await response.json();
        // Update articles
        setArticles(data);
      } catch (error) {
        // Manage errors
        setError(error.message);
      }
    };

    // Get articles when ID is changed
    fetchArticles();
  }, [id]);

  //Set displayedArticles to 9 when clicking "See more". If currently 3, it will be set to 9.
  const toggleArticles = () => {
    setDisplayedArticles((prev) => (prev === 3 ? 9 : 3));
  };
  

  return (
    <section className="articles-section">
      <div className="container">
        <div className="section-title">
          <p>Article & News</p>
          <h2>Get Every Single Article & News</h2>
        </div>
        <div className="browseteam">
          <a className="btn-blank" onClick={toggleArticles}>
            {displayedArticles === 3 ? "See more" : "See less"}
            <i className="fa-regular fa-arrow-up-right"></i>
          </a>
        </div>
        <div className="article-box">
          {articles.slice(0, displayedArticles).map((article, index) => (
            <div className="guide-box" key={index}>
              <a href={article.link}>
                <div className="article-pic-container">
                  <img
                    className="article-pic"
                    src={article.imageUrl}
                    alt={article.title}
                  />
                  <div className="published-corner">
                    <p>{getFormattedDate(article.published)}</p>
                  </div>
                </div>
              </a>
              <p>{article.category}</p>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              <p>Author: {article.author}</p>
            </div>
          ))}
        </div>
        {error && <p>{error}</p>}
      </div>
    </section>
  );
}

export default ArticlesSection;