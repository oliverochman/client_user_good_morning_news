import ArticlesCard from "./ArticlesCard";
import React, { useState, useEffect } from "react";
import Articles from "../modules/articles";
import { Grid, Container } from "semantic-ui-react";
import { useParams, useLocation } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const { category } = useParams();
  let location = useLocation();
  const [message, setMessage] = useState();

  useEffect(() => {
    const getArticles = async () => {
      const response = await Articles.index(category);
      if (response?.constructor === Array) {
        setArticles(response);
        setErrorMessage("");
      } else {
        setArticles([]);
        setErrorMessage(response);
      }
    };

    getArticles();
  }, [category]);

  useEffect(() => {
    debugger;
    if (location.state) {
      setMessage(location.state.message);
    }
  }, [location]);

  return (
    <>
      {message && <p data-cy="payment-success-message">{message}</p>}
      {errorMessage && <p data-cy="error-message">{errorMessage}</p>}
      <Container id="container">
        <Grid>
          <Grid.Row columns={3}>
            {articles.map((article) => {
              return (
                <div data-cy={"article-" + article.id} key={article.id}>
                  <ArticlesCard article={article} />
                </div>
              );
            })}
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};
export default ArticlesList;
