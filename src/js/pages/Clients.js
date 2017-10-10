import React from "react";

import BobbyService from '../data/bobby_service'
import ListMaker from '../components/listMaker'

const clientData = BobbyService.getWork();
const clients = clientData.find(x => x.clientList === 'clientList').clients;
const leadin = clientData.find(x => x.leadin === 'leadin');

let list = [];
const MakeList = function() {
    clients.map(function(object, i) {
        list.push(object)
    });

    return ([
        list
    ]);
};
MakeList();

const Clients = () => (
    <section class="container">
        <h1>{leadin.title}</h1>
        <h3>{leadin.intro}</h3>
        <hr/>
        <ListMaker list={list} />
    </section>
)
export default Clients
