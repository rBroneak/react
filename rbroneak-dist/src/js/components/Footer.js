import React from "react";

import BobbyService from '../data/bobby_service';

const method = BobbyService.getContactInfo().find(x => x.type === 'type');

const Footer = () => {
    return (
      <footer className="global-footer container">
          <p>
              <a href={'mailto:'+method.emailUrl}>{method.email}</a>
          </p>
      </footer>
    )
}
export default Footer;