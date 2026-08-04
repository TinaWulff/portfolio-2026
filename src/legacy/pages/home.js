import '../style/style.scss';
import './home.scss';

import introDiv from '../components/index.intro.js';
import profileImg from '../components/profile-picture.js';
import codeImg from '../components/script-picture.js';
import headlines from '../components/headlines.js';
import button from '../components/button.js';
import competences from '../components/competences-icons.js';
import projectsPresentation from '../components/dev-projects.js';
import uxProject from '../components/ux-section.js';


export default function homePage() {
    // Opret et fragment for at samle alt indhold
    const fragment = document.createDocumentFragment();

    // Opret main-elementet og append det til fragmentet
    const sectionIntroElm = document.createElement("section");
    sectionIntroElm.className = "introSection";
    fragment.append(sectionIntroElm);

    // Append alle dine komponenter til mainElm
    sectionIntroElm.append(headlines());
    sectionIntroElm.append(introDiv());
    sectionIntroElm.append(profileImg());
    sectionIntroElm.append(codeImg());
    sectionIntroElm.append(button("Projects", "#web-development"));
    sectionIntroElm.append(competences());

    // const sectionProjectsElm = document.createElement("section");

    fragment.append(projectsPresentation());
    //fragment.append(sectionProjectsElm);

    fragment.append(uxProject());


    // Returnér fragmentet, så det kan appendes til #app udenfor funktionen
    return fragment;
}











/*
NOTER OM BRUG AF FRAGMENT:
Bedre performance:
Et fragment forhindrer gentagen reflow og repaint af DOM'en, som sker når du tilføjer eller ændrer indhold én ad gangen.

Renere kode:
Det giver dig mulighed for at samle flere DOM-operationer i én.

Så for at opsummere:
Fragment er bare en mellemstation for dit indhold, hvor du kan opbygge det, før du tilføjer det til DOM’en.
*/