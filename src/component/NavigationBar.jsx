import React, { useState } from "react";
import { Header, Menu, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState("news");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <Header as="h1" id="header">
      <Grid id="main-grid">
        <Grid.Row columns={4} id="GMN-logo">
          <Grid.Column id="good" width={2} textAlign="right">
            Good
          </Grid.Column>
          <Grid.Column id="morning" width={2} textAlign="center">
            Morning
          </Grid.Column>
          <Grid.Column id="News" width={2} textAlign="left">
            News
          </Grid.Column>
          <Grid.Column id="slogan" width={8} textAlign="right">
            For a great start of the day
          </Grid.Column>
        </Grid.Row>{" "}
      </Grid>
      <Header.Subheader data-cy="navigation-bar">
        <Menu id="menu">
          <Menu.Item
            data-cy="news"
            name="news"
            active={activeItem === "news"}
            onClick={handleItemClick}
            as={Link}
            to={{ pathname: "/articles" }}
          >
            News
          </Menu.Item>
          <Menu.Item
            data-cy="sports"
            name="sports"
            active={activeItem === "sports"}
            onClick={handleItemClick}
            as={Link}
            to={{ pathname: "/articles/sports" }}
          >
            Sports
          </Menu.Item>
          <Menu.Item
            data-cy="business"
            name="business"
            active={activeItem === "business"}
            onClick={handleItemClick}
            as={Link}
            to={{ pathname: "/articles/business" }}
          >
            Business
          </Menu.Item>
          <Menu.Item
            data-cy="entertainment"
            name="entertainment"
            active={activeItem === "entertainment"}
            onClick={handleItemClick}
            as={Link}
            to={{ pathname: "/articles/entertainment" }}
          >
            Entertainment
          </Menu.Item>
          <Menu.Item
            data-cy="weather"
            name="weather"
            active={activeItem === "weather"}
            onClick={handleItemClick}
            as={Link}
            to={{ pathname: "/articles/weather" }}
          >
            Weather
          </Menu.Item>
        </Menu>
      </Header.Subheader>
    </Header>
  );
};
export default NavigationBar;
