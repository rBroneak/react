const BobbyService = {
    background: [
        {p: 'I was born in St. Paul where I spent the next 20 years trying to figure out what to make of myself. I had been oil painting, drawing, and producing things that had no purpose but their own, my whole life. Studying art and design seemed a natural fit. I went to college in Missoula MT where I studied fine art. The program wasn\'t a fit so I I came back to MN and studied interactive media, 3d animation, and post-modern theory at MCAD. I finished my BFA at MCAD and began making art and doing front-end dev work for ad agencies and freelance clients here in Minneapolis. Currently, I\'m a lead senior front-end developer with a creative approach to problem solving at azul seven in Minneapolis Minnesota.'},
        {p: 'Aside from a brief education/career history, I live in St. Paul Minnesota, play hockey, practice kung-fu, find time to make art, try to be a great husband, try to be a great dad, try to be a good friend, try to get out of town and into the woods, and relax when I can.\n'},
        {leadin: 'leadin', title: 'Hello!' , intro: "My name is Robert Broneak"}
    ],
    skills: [
        {
           qualityList: 'qualityList' ,
           qualities: [
               '3d Modeling',
               '508 Compliance',
               'Adobe CC',
               'AngularJS',
               'Animation',
               'Art Direction',
               'Bootstrap',
               'CSS 3',
               'Conceptual Art',
               'Craft CMS',
               'Creative Direction',
               'Fine Art',
               'Graphic Design',
               'HTML 5',
               'Illustration',
               'Interactive Media',
               'JavaScript',
               'jQuery',
               'LESS',
               'Maya',
               'Motion Graphics',
               'Oil Painting',
               'SASS',
               'Semantic UI',
               'Twitter Bootstrap',
               'User Interface Design',
               'Web Design',
               'Web Development',
               'Webhook',
               'WodPress',
           ],
        },
        {leadin: 'leadin', title: 'skill-set' , intro: "I have experience and a strong understanding of the following"}
    ],
    clients: [
        {
            clientList: 'clientList',
            clients: [
                'Andersenwindows',
                'Azul7',
                'AARP',
                'GeekSquad',
                'Hazelden',
                'Heggies Pizza',
                'Hazelden Betty Ford',
                'Hennepin County',
                'Intel',
                'JambaJuice',
            ],
        },
        {leadin: 'leadin', title: 'clients' , intro: "I've done work for the following clients"}

    ],
    contact: [
        {p: 'With a background in art and design, Robert expertly bridges the gap between design and implementation. A collaborative and creative developer, Robert works designers designers and client implementation teams to anticipate and address development challenges early on in projects, assuring smooth, organized front-end development and code hand-off.'},
        {p: 'Through open and honest communication with clients and development partners, I build concise scalable puzzles that play nice with other puzzles.” Robert holds a BFA from Minneapolis College of Art and Design, where he studied interactive media, animation and post-modern philosophy.'},
        {p: "Although you can hand me design files and expect pixel perfect web executions, I'm great working with big ideas and concepts where collaboration and exploration is celebrated."},
        {p: "To learn more about me, the work I've done, or working with me, please get in touch. Let's talk!"},
        {type: 'type', linked: 'Linked In', linkedUrl: 'https://www.linkedin.com/in/rbroneak', email: 'Email Me', emailUrl: 'discourse@rbroneak.com'},
        {leadin: 'leadin', title: 'reach out' , intro: "I'm always open for collaboration, work, or adventures!"}
    ],
    // METHODS
    getQualifications: function() { return this.skills},
    getWork: function() { return this.clients},
    getInfo: function() { return this.background},
    getContactInfo: function () {return this.contact}
}

export default BobbyService