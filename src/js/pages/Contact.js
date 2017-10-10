import React from "react";
import BobbyService from '../data/bobby_service'


const contactInfo = BobbyService.getContactInfo();
const method = contactInfo.find(x => x.type === 'type');
const linked = contactInfo.find(x => x.method === 'Linked In');
const leadin = contactInfo.find(x => x.leadin === 'leadin');

const Contact = () => (
    <section class="container">
        <h1>{leadin.title}</h1>
        <h2>{leadin.intro}</h2>
        <hr/>
        {
            contactInfo.map((item , index) => (
                <p key={index}>{item.p}</p>
            ))
        }
        <p>
            <a href={'mailto:'+method.emailUrl}>{method.email}</a> <a target="_blank" href={method.linkedUrl}>{method.linked}</a>
        </p>

    </section>
)
export default Contact



