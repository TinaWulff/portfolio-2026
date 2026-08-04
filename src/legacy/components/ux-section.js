
import uxImage from '../assets/project-imgs/UX-img-ny.png';
import "./ux-section.scss";

export default function uxProject() {
    let uxProjectElm = document.createElement("section")
    uxProjectElm.className = "ux-section";
    uxProjectElm.id="ux-section";

    uxProjectElm.innerHTML = `
        <h2>UX / UI Design</h2>

        <div class="ux-introText">
            <p>In 2024, I completed additional studies in UX/UI and graphic design.
                <p>The exam project involved creating a new web design based on an existing website.
                This included UX research and user testing.</p>

Contact me for more information about what I can offer in this field. </p>    
        </div>
        
        
        <div class="ux-text-content">
            <h3>The course combined theoretical and practical training including:</h3>
            <ul>
            <li>Analysis of target audiences, usability, problem-solving, SEO analysis, etc.
            <li>Use of guerrilla testing, card sorting, pilot testing, and more.</li> 
            <li>Making moodboards, style tiles, prototypes/wireframes.</li>
            <li>Graphic design and UX/UI-design with theoretical instruction in design processes.</li>
            <li>Instruction in various tools: Adobe Creative Cloud, WordPress, Figma, ChatGPT, Midjourney, and more.</li>
            </ul>
        </div>

        <div class="ux-image">
            <img src="${uxImage}" alt="UX/UI designs">
        </div>
        
    `

    return uxProjectElm
}