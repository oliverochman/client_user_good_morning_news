import React from "react";
import { Card } from "semantic-ui-react";

const ArticlesCard = ({ article }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header data-cy="title">{article.title}</Card.Header>
        <Card.Description data-cy="teaser">{article.teaser}</Card.Description>
      </Card.Content>
    </Card>
  );
};
export default ArticlesCard;
