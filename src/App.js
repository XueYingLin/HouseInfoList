import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HouseInfoList from "./components/HouseInfoList";
import Home from "./components/Home";
import LogIn from "./components/LogIn";

export default function App() {
  return (
    <div className="App">
      <div className="title">Houses Information</div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/logIn">Log In</Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/logIn" component={LogIn} />
      </Router>
      <HouseInfoList />
    </div>
  );
}
