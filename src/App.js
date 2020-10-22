import React from "react";
import { Route } from 'react-router-dom';
import { Home } from "./Home";
import { Station } from "./Station";
import { StationExit } from "./StationExit";
import "./styles.css";


export default function App() {
  return (
    <>
    <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/Station" exact component={Station} />
    </div>
      
    </>
  );
}
