import React from "react";
import { Card } from "semantic-ui-react";
import {Link} from 'react-router-dom'

const ArticlesCard = ({ article }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header as={Link} to={`/articles/${article.id}`} data-cy="title">{article.title}</Card.Header>
        <Card.Description data-cy="teaser">{article.teaser}</Card.Description>
      </Card.Content>
    </Card>
  );
};
export default ArticlesCard;
