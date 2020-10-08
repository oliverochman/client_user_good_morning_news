import ArticlesCard from "./ArticlesCard";
import React, { Component } from "react";
import { fetchAllArticles } from "./modules/articles";
import { Grid } from "semantic-ui-react";

class ArticlesList extends Component {
  state = {
    articles: [],
  };

  componentDidMount = async () => {
    let articles = await fetchAllArticles();
    this.setState({ articles: articles });
  };

  render() {
    let articleList = this.state.articles.map((article) => {
      return (
        <div data-cy={"article-" + article.id} key={article.id}>
          <ArticlesCard article={article} />
        </div>
      );
    });

    return (
      <Grid>
        <Grid.Row columns={3}>{articleList}</Grid.Row>
      </Grid>
    );
  }
}
export default ArticlesList;
