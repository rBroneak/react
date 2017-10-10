import React from "react";

import BobbyService from '../data/bobby_service';

const method = BobbyService.getContactInfo().find(x => x.type === 'type');
const footerStyle = {
    paddingTop: '20px',
    paddingBottom: '20px'
};

const Footer = () => {
    return (
      <footer style={footerStyle} class="container">
          <p>
              <a href={'mailto:'+method.emailUrl}>{method.email}</a>
          </p>
      </footer>
    )
}
export default Footer;