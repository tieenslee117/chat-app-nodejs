import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Home/Login.js";
import Register from "./components/Home/Register.js";
// import Home from "./components/Home/Home.js";
import Chat from "./components/Chat/Chat";

import History from "./utils/history.js";
const App = () => {
  console.log(History);
  return (
    <Router history={History}>
      <Route path="/" exact component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
