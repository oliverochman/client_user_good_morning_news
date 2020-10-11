import ArticlesCard from "./ArticlesCard";
import React, { useState, useEffect } from "react";
import Articles from "../modules/articles";
import { Grid } from "semantic-ui-react";
import NavigationBar from "../component/NavigationBar";
import { useParams } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getArticles = async () => {
      const response = await Articles.category(category);
      setArticles(response);
    };
    getArticles();
  }, [category]);

  return (
    <>
      <NavigationBar />
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
    </>
  );
};
export default ArticlesList;
