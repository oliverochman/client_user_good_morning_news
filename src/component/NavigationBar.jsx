import React from 'react'
import { Header } from 'semantic-ui-react'
import { Link } from "react-router-dom";


const NavigationBar = () => {
    return (
        <Header as='h2'>
        Good Morning News - For a great start of the day 
        <Header.Subheader data-cy="navigation-bar">
         <h1 as={Link} to={`/articles/`} data-cy="sports">
         Sports </h1>
         <h1 as={Link} to={`/articles/`} data-cy="business">
         Business </h1>
         <h1 as={Link} to={`/articles/`} data-cy="entertainment">
         Entertainment </h1>
         <h1 as={Link} to={`/articles/`} data-cy="weather">
         Weather </h1>
        </Header.Subheader>
      </Header>
    )
}
export default NavigationBar