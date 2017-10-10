import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PageShell from '../helpers/PageShell'
import Bio from "../pages/Bio";
import Clients from "../pages/Clients.js";
import Contact from "../pages/Contact";
import Expertise from "../pages/Expertise";
import Missed from "../pages/missed";

const MainContent = () => (
    <main>
        <Switch>
            <Route exact path='/' component={PageShell(Bio)}/>
            <Route exact path='/expertise' component={PageShell(Expertise)}/>
            <Route exact path='/clients' component={PageShell(Clients)}/>
            <Route exact path='/contact'component={PageShell(Contact)}/>
            <Route component={PageShell(Missed)} />
        </Switch>
    </main>
)

export default MainContent

