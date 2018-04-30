import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./containers/PrivateRoute";
import LoginContainer from "./containers/LoginContainer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import ProfileContainer from "./containers/ProfileContainer";
import NewsContainer from "./containers/NewsContainer";
import NotFound from "./components/NotFound";
import "./App.css";
import CssBaseline from "material-ui/CssBaseline";

const App = () => (
  <CssBaseline>
    <div>
      <header className="header">
        <Menu />
      </header>
      <hr />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={NewsContainer} />
          <Route path="/login" component={LoginContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </CssBaseline>
);

export default App;
