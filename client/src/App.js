import React, { Component }  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import DriftApp from "./components/DriftApp/driftapp.js";



import PrivateRoute from "./PrivateRoute";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
import AuthContext from "./AuthContext";
import Posts from "./components/Posts/Posts";
import Private from "./components/Private/Private";

import Profile from "./components/Profile/Profile";
import Public from "./components/Public/Public";







class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      auth: new Auth(this.props.history),
      tokenRenewalComplete: false
    };
  }
  componentDidMount() {
    this.state.auth.renewToken(() =>
      this.setState({ tokenRenewalComplete: true })
    );
  }

  render() {
    const { auth } = this.state;
    // Show loading message until the token renewal check is completed.
    if (!this.state.tokenRenewalComplete) return "Loading...";
  return (
    <Router>
      <div>
      <AuthContext.Provider value={auth}>
        <StoreProvider>
          <Nav  auth = {auth}/>
          <DriftApp />
          <Switch>

              <Route
            path="/"
            exact
            render={props => <Home auth={auth} {...props} />}
              />
          <Route
            path="/callback"
            render={props => <Callback auth={auth} {...props} />}
          />
            <Route exact path="/contact" component={Home} />
            <Route exact path="/projects" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route component={NoMatch} />
            <PrivateRoute path="/profile" component={Profile} />
          <Route path="/public" component={Public} />
          <PrivateRoute path="/private" component={Private} />
          <PrivateRoute
            path="/posts"
            component={Posts}
            scopes={["read:posts"]}
          />
          </Switch>
        </StoreProvider>
        </AuthContext.Provider>
      </div>
    </Router>
  );
}
}

export default App;
