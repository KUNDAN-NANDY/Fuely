import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "./icon.css";

import Navbar from "./components/navbar";
import Home from "./components/home";
import NotFound from "./components/notfound";
import States from "./components/states";


function App() {
  return (
    <>
     <Router>
      <Navbar />
        <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/not-found" component={NotFound} />
         <Route path="/states" component={States} />
         <Redirect to="/not-found" />
        </Switch>
     </Router>
    </>
  );
}

export default App;
