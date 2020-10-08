import ArticlesCard from "./ArticlesCard";
import React, { useState, useEffect } from "react";
import { fetchAllArticles } from "./modules/articles";
import { Grid } from "semantic-ui-react";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetchAllArticles();
      setArticles(response);
    };
    getArticles();
  }, []);

  return (
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
  );
};
export default ArticlesList;
