import React from "react";

import BobbyService from '../data/bobby_service';

const method = BobbyService.getContactInfo().find(x => x.type === 'type');

const Footer = () => {
    return (
        <footer class="global-footer">
            <div class="container">
                <div class="flex-container space-between">
                    <div><a href={'mailto:'+method.emailUrl}>{method.email}</a> <a target="_blank" href={'mailto:'+method.linkedUrl}>{method.linked}</a></div>
                    <div><a href="ember">site in ember.js</a> <a href="/react">site in react.js</a></div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;