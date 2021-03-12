import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Upload from "./pages/Upload";
import Home from "./pages/Home";
import Header from "./components/Header";
import'./App.css'
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={Upload} path="/upload" />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
