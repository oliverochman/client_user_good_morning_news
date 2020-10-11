import React from "react";
import ArticlesList from "./component/ArticlesList";
import { Switch, Route, Redirect } from "react-router-dom";
import SpecificArticle from "./component/SpecificArticle";

const App = () => {
  return (
    <Switch>  
      <Route exact path="/articles/:category/:id" component={SpecificArticle} />
      <Route exact path="/articles/:category/" component={ArticlesList} />
      <Route path="*" render={() => <Redirect to="/articles/news"/>} />
    </Switch>
  );
};

export default App;
