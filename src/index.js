import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from 'react-router-dom';

import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <App />
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
  );