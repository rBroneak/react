import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router , Link, Route } from "react-router-dom";
import { createHistory, useBasename } from "history";


const browserHistory = useBasename(createHistory)({
    basename: "/react"
});

import './js/styles/base.scss';

import Layout from "./components/Layout";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Layout/>
    </Router>,
    app);