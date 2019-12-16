import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ProjectComponent = class ProjectComponent {
    constructor(route) {
        this.route = route;
        this.projects = [{
                id: 1,
                title: '05 Minute foundation',
                wireframes: true,
                about: [
                    'As a participant of the DoAction day is a charity hackathon that uses WordPress to uplift local communities. Five minute is a foundation committed to the protection of our oceans and the education of future responsible consumers. Their main goal is to clean the planet, starting with the most spectacular gift of nature, the beaches.',
                    'The client already had a website, we redesigned it, based on both their needs and that of future users.'
                ],
                about2: [
                    'Responsible for providing visual direction of and delivering design assets and accountable for the design solutions produced in the work process.'
                ],
                about3: [
                    'Understand the user needs by the client only in one day and then transform this into a functional product'
                ],
                // tools: 'Responsible for providing visual direction of and delivering design assets & Accountable for the design solutions produced in the work process',
                // img: '/assets/images/conversabledesk.png',
                mobile: {
                    text: 'The site was developed for mobile devices',
                    img: [
                        '/assets/images/5m01.jpg',
                        '/assets/images/5m02.jpg',
                        '/assets/images/5m03.jpg',
                        '/assets/images/5m04.jpg',
                        '/assets/images/5m05.png'
                    ]
                },
            },
            {
                id: 2,
                title: 'Cedro Negro Furniture',
                video: 'https://player.vimeo.com/video/378460077',
                wireframes: {
                    img: '/assets/images/cedro01.png',
                    title: 'Test'
                },
                about: [
                    'Cedro negro is a furniture studio consolidated by an artisan high-quality woodwork with more than 20 years of experience, what makes this project fantastic that not only the furniture making is done is not that a creative process is also done working in continuous flow with the clients.'
                ],
                about2: [
                    'Brand design', 'As UX/UI Designer, I worked with the client and user to develop the better solution', 'Solving the problems and connecting with the user to improve usability, accessibility and user delight.'
                ],
                about3: [
                    'Without nothing base transforming all this process that only the artist understand into something that everybody can understanding at the same time increase their database clients'
                ],
                img: '/assets/images/cedronegro-card.jpg',
                section2: {
                    title: 'User research',
                    info: 'I further analyzed the research data gathered by the marketing team to find out who the users are and their preference. I found users needs to know all the process and portfolio.',
                    img: [
                        '/assets/images/cedro-persona01.png',
                        '/assets/images/cedro-persona02.png',
                        '/assets/images/cedro-persona03.png',
                    ]
                },
                mobile: {
                    text: 'User testing is usually done in person to observe user behavior. It could be a feedback told by the user verbally or we could spot the problem with the user’s reactions',
                }
            },
            {
                id: 3,
                title: 'Micro world - Biodesign',
                wireframes: true,
                about: [
                    'As part of Copenhagen Institute of Interaction Design summer school one of the most rich and clarity experience that ever had.'
                ],
                about2: [
                    'UX Designer'
                ],
                about3: [
                    'How can we reconnect and foster deep conversations with nature in order to transfer the hidden knowledge from our fellow companions (other species) through digital technology? This based on Micro scale Microscopic organisms, the category ‘Microbes’ that includes a massive range of organisms including bacteria, fungi, viruses, algae, archaea and protozoa. Some of these, such as bacteria and fungi, are well known, but others such as archaea much less so.'
                ],
                // tools: 'Responsible for providing visual direction of and delivering design assets & Accountable for the design solutions produced in the work process',
                // img: '/assets/images/conversabledesk.png',
                mobile: {
                    text: 'Our concept was guided walking tours at the jungle that brings exposure, understanding, and connection to the micro-universe. How does it work? In order to see the micro-world a flower, all people in the group must to touch their hands and then a video mapping will start to projecting of the microscopic images of the flower. It was based on how the bacterias work together in symbiosis with another organisms.',
                },
            },
            {
                id: 4,
                title: 'Galaxies',
                wireframes: {
                    img: '/assets/images/cedro01.png',
                    title: 'Test'
                },
                about: [
                    'It was a UX class project where we have to develop an interface based on the galaxies of the universe. Using all the tools we learned during the course.'
                ],
                about2: [
                    'UX/UI Designer'
                ],
                about3: [
                    'The most challenging thing was visualizing a lot of information in a pleasant way and with the least cognitive load for the users was presented.'
                ],
                section2: {
                    title: 'User research',
                    info: 'I took design decisions based on the analysis and use of tools such as user personas, interviews, card sorting, analysis references, and user tests.',
                    img: [
                        '/assets/images/users.png',
                    ]
                },
                mobile: {
                    text: 'User testing is usually done in person to observe user behavior. It could be a feedback told by the user verbally or we could spot the problem with the user’s reactions',
                }
            }
        ];
    }
    ngOnInit() {
        window.scroll(0, 0); // Goes to page top
        const projectId = Number(this.route.snapshot.paramMap.get('id'));
        this.selectedProject = this.projects.find(p => p.id === projectId);
    }
};
ProjectComponent = tslib_1.__decorate([
    Component({
        selector: 'app-project',
        templateUrl: './project.component.html',
        styleUrls: ['./project.component.scss']
    })
], ProjectComponent);
export { ProjectComponent };
//# sourceMappingURL=project.component.js.map