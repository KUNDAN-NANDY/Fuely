import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css"

import Navbar from "./components/navbar";
import Home from "./components/home";
import NotFound from "./components/notfound";

function App() {
  return (
    <>
     <Router>
      <Navbar />
        <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/not-found" component={NotFound} />
         <Redirect to="/not-found" />
        </Switch>
     </Router>
    </>
  );
}

export default App;
