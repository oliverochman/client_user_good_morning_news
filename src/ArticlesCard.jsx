import React from "react";
import { Card, Image } from "semantic-ui-react";

 const ArticlesCard = ({ article }) => {
  return (
    <>
      <Card>
        <Image src={article.image} wrapped ui={false} data-cy="img"/>
        <Card.Content>
          <Card.Header data-cy="title">{article.title}</Card.Header>
          <Card.Meta>
            <span className="date" date-cy="date">{article.date}</span>
          </Card.Meta>
          <Card.Description data-cy="teaser">
           {article.teaser}
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  );
};
export default ArticlesCard;