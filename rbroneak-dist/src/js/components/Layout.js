import React from "react";

import MainContent from "./MainContent";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default class Layout extends React.Component {
  render() {
      return (
      <div className="site">
          <div className="site-content">
            <Header/>
            <MainContent/>
          </div>
        <Footer/>
      </div>
    );
  }
}
