import React from "react";
import { Switch, Route } from 'react-router-dom'

const Missed = (props) => {
        return (
            <section class="container">
                <h2>{props.path}Does not compute</h2>
            </section>
        );
}
export default Missed;