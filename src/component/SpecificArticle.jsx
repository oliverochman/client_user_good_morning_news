import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Articles from "../modules/articles";
import { Container } from "semantic-ui-react";

const SpecificArticle = () => {
  const [article, setArticle] = useState({});
  const [message, setMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getSingleArticle = async () => {
      const response = await Articles.show(id);
      if (response.id) {
        setArticle(response);
      } else {
        setMessage(response);
      }
    };
    getSingleArticle();
  }, [id]);

  return (
    <>
      {message ? (
        <p data-cy="error-message">{message}</p>
      ) : (
        <Container id="container1" textAlign="center">
          <div data-cy="article">
            <h1 data-cy="title">{article.title}</h1>
            <h3 data-cy="teaser">{article.teaser}</h3>
            <p data-cy="content">{article.content}</p>
          </div>
        </Container>
      )}
    </>
  );
};

export default SpecificArticle;
