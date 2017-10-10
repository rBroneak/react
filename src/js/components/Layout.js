import React from "react";
import ReactTransitionGroup from 'react-addons-css-transition-group';

import MainContent from "./MainContent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TransitionGroup from "react-transition-group/TransitionGroup";
// require('../styles/base.scss');

export default class Layout extends React.Component {
  render() {
      return (
      <div class="site">
          <div class="site-content">
            <Header/>
            <MainContent/>
          </div>
        <Footer/>
      </div>
    );
  }
}
