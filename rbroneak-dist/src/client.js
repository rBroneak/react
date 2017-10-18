import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router , Link, Route } from "react-router-dom";

import './js/styles/base.scss';
import Layout from "./components/Layout";

const app = document.getElementById('app');

ReactDOM.render(
    <Router>
      <Layout/>
    </Router>,
app);
