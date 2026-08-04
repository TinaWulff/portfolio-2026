
import "./index-intro.scss";
import CV from '../assets/TinaWulff-CV2026.pdf';



export default function introDiv() {
    let introDivElm = document.createElement("div")
    introDivElm.className = "intro-div"

    introDivElm.innerHTML = `
   <p>I am a frontend developer specialized in React and NEXT.js. I will graduate from the Frontend Web Development program at Roskilde Technical School in March 2026.</p>
   <p> I am currently seeking my next challenge and looking for a position in programming where I can contribute with my skills while continuing to learn and deepen my expertise.</p>

    <p>I have a background in Fine Art from the Royal Danish Academy of Fine Arts (graduated in 2020), complemented by additional education in UX/UI and graphic design.</p>

    <p>This portfolio showcases my skills and ongoing projects and will continue to expand as I grow professionally. Please note that my current knowledge extends beyond what is presented here, as my focus is on intensive study and development, and the site may not always reflect my most recently acquired skills.</p>
    <p class="read-cv blue">..Read more about my experience in my CV</p>
    <a href="${CV}" download="TinaWulff-CV2026.pdf">Download CV (updated 2026) as PDF here </a><i class="fa-solid fa-angle-right"></i>
    `

    return introDivElm
}

/*
<p class="read-more">...Read more <a href="#">about me </a><i class="fa-solid fa-angle-right"></i></p>
*/


