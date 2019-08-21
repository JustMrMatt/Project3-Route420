import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Search from "./pages/Search";
//import Saved from "./pages/Saved";
//import Signin from "./pages/Signin";
import Locations from "./pages/Locations";
import Store from "./pages/Store";
import Product from "./pages/Product";
import User from "./pages/User";
import Admin from "./pages/Admin";

function App() {
  return (

    <React.Fragment>
    <Router>
      <div>
        <Nav /> <br />
        <Switch>
          <Route exact path="/" component={Search} />
          {/*<Route exact path="/saved" component={Saved} />*/}
          <Route exact path="/user" component={User} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/user/storeComment/:id" component={User} />
          <Route exact path="/user/:credentials" component={User} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/store/:id" component={Store} />
          <Route exact path="/store/storeComment" component={Store} />
          <Route exact path="/store/storeComment/:id" component={Store} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="product/name/:terms" component={Product} />
          
          {/*<Route exact path="search/brand/:terms" component={Search} />*/}
          {/*<Route exact path="search/tag/:terms" component={Search} />*/}
          {/* 
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/user/:id" component={User} />
            <Route exact path="/stores" component={Stores} />
            <Route exact path="/stores/:id" component={Store} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Products/:id" component={Product} />
          */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    </React.Fragment>
  );
}

export default App;
