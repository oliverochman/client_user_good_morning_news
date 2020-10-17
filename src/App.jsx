import React from "react";
import ArticlesList from "./components/ArticlesList";
import { Switch, Route } from "react-router-dom";
import SpecificArticle from "./components/SpecificArticle";
import NavigationBar from "./components/NavigationBar";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={ArticlesList} />
        <Route exact path="/articles/:id" component={SpecificArticle} />
        <Route exact path="/category/:category" component={ArticlesList} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </>
  );
};
export default App;
