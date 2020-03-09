import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Dashboard from "./components/dashboard/index";

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Dashboard} />
    </React.Fragment>
  );
}

export default App;
