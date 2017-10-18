import React from "react";
import { NavLink  } from "react-router-dom";
import BobbyService from '../data/bobby_service';

const bio = BobbyService.getInfo();
const leadin = bio.find(x => x.leadin === 'leadin');

const Bio = () => (
    <section className="container">
        <h1>{leadin.title}</h1>
        <h2>{leadin.intro}</h2>
        <hr/>
        <ul>
            {
                bio.map((bio, index) => (
                   <p key={index}>{bio.p}</p>
                ))
            }
        </ul>
        <NavLink to="/contact">Contact</NavLink>
    </section>
)
export default Bio
