import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Articles from "../modules/articles";

const SpecificArticle = () => {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getSingleArticle = async () => {
      const response = await Articles.show(id);
      setArticle(response);
    };

    getSingleArticle();
  }, [id]);

  return (
    <div data-cy="article">
      <h1 data-cy="title">{article.title}</h1>
      <h3 data-cy="teaser">{article.teaser}</h3>
      <p data-cy="content">{article.content}</p>
    </div>
  );
};

export default SpecificArticle;
