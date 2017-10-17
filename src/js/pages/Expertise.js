import React from "react";

import BobbyService from '../data/bobby_service'
import ListMaker from '../components/listMaker'

const quals = BobbyService.getQualifications();
const leadin = quals.find(x => x.leadin === 'leadin');
const qualities = quals.find(x => x.qualityList === 'qualityList').qualities;
let list1 = [];
let list2 = [];

const MakeSeperateLists = function() {

    qualities.map(function(object, i) {
        if (i < qualities.length / 2) {
            list1.push(object)
        } else {
            list2.push(object)
        }
    })

    return ([
        list1.filter(v=>v!='').reverse(),
        list2.filter(v=>v!='').reverse()
    ]);
};
MakeSeperateLists();

const Expertise = () => (
    <section class="container">
      <h1>{leadin.title}</h1>
      <h2>{leadin.intro}</h2>
      <hr/>
       <div class="align-left-top">
            <ListMaker list={list1} />
            <ListMaker list={list2} />
       </div>
    </section>
)

export default Expertise