import React from "react";
import ArticlesList from './components/ArticlesList';
import { Switch, Route } from "react-router-dom";
import SpecificArticle from "./components/SpecificArticle";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ArticlesList} />
      <Route exact path="/articles/:id" component={SpecificArticle}/>
    </Switch>
  );
};
export default App;
