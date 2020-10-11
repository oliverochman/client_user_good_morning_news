import React, { useState } from 'react'
import { Header, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState("news");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <Header as='h2'>
      Good Morning News - For a great start of the day
      <Header.Subheader data-cy="navigation-bar">
        <Menu>
          <Menu.Item
            data-cy="news"
            name='news'
            active={activeItem === 'news'}
            onClick={handleItemClick}
            as={Link}
            to={`/articles/`}
          >
            News
        </Menu.Item>
          <Menu.Item
            data-cy="sports"
            name='sports'
            active={activeItem === 'sports'}
            onClick={handleItemClick}
            as={Link}
            to={`/articles/sports`}
          >
            Sports
        </Menu.Item>
          <Menu.Item
            data-cy="business"
            name='business'
            active={activeItem === 'business'}
            onClick={handleItemClick}
            as={Link}
            to={`/articles/business`}
          >
            Business
        </Menu.Item>
          <Menu.Item
            data-cy="entertainment"
            name='entertainment'
            active={activeItem === 'entertainment'}
            onClick={handleItemClick}
            as={Link}
            to={`/articles/entertainment`}
          >
            Entertainment
        </Menu.Item>
          <Menu.Item
            data-cy="weather"
            name='weather'
            active={activeItem === 'weather'}
            onClick={handleItemClick}
            as={Link}
            to={`/articles/weather`}
          >
            Weather
        </Menu.Item>
        </Menu>
      </Header.Subheader>
    </Header>
  )
}
export default NavigationBar