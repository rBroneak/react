import React from "react";
import $ from 'jquery';

import MainContent from "./MainContent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Livebackground from "../components/Livebackground";


let vm = {
    bgImg : $("#backgroundImage"),
    window : $(window),
    body: $('body')
};

let utils = {
    gettime : function () {
        return new Date().getHours();
    },
    isitNite : function () {
        var hour = utils.gettime();
        if (hour >= 14 || hour < 8) {
            vm.body.addClass('night');
        } else {
            vm.body.addClass('day');
        }
    }
};

let updateBgImage = function () {
    var currentBg = $(vm.bgImg).css('background-image');
    var i = 1;
    setInterval(function() {
        i++;
        console.log(i);
    }, 30000 );
};
let loaded = function () {
    updateBgImage();
    vm.body.addClass('loaded');
    utils.isitNite();

};

vm.window.on( 'load' , loaded );

export default class Layout extends React.Component {
  render() {
      let bg = "https://www.glerl.noaa.gov/metdata/mkg/mkg01.jpg";
      setInterval(function() {
          bg = "https://www.glerl.noaa.gov/metdata/mkg/mkg01.jpg";
      }, 10000 );
      return (
          <div className="site">
          <div className="site-content">
            <Header/>
            <Livebackground bg={bg}/>
            <MainContent/>
          </div>
        <Footer/>
      </div>
    );
  }
}
