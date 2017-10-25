import React from "react";

import BobbyService from '../data/bobby_service';

const method = BobbyService.getContactInfo().find(x => x.type === 'type');

const Footer = () => {
    return (
        <footer className="global-footer">
            <div className="container">
                <div className="flex-container space-between">
                    <div><a href={'mailto:'+method.emailUrl}>{method.email}</a> <a target="_blank" href={'mailto:'+method.linkedUrl}>{method.linked}</a></div>
                    <div><a href="../">site in traditional html</a> <a href="../ember">site in ember.js</a></div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;