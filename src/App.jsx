import React from "react";
import ArticlesList from "./component/ArticlesList";
import { Switch, Route, Redirect } from "react-router-dom";
import SpecificArticle from "./component/SpecificArticle";
import NavigationBar from "../component/NavigationBar";


const App = () => {
  return (
    <>
    <NavigationBar />
    <Switch>
      <Route exact path="/articles/:id" component={SpecificArticle} />
      <Route exact path="/" component={ArticlesList} />
      <Route exact path="/:category" component={ArticlesList} />
    </Switch>
    </>
  );
};

export default App;
