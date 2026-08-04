
import './competences-icons.scss'
import nextLogo from '../assets/nextjs.png';
import tailwindLogo from '../assets/tailwind.png'

export default function competences() {
    let competencesElm = document.createElement("div")
    competencesElm.className="competences-icons"

    competencesElm.innerHTML = `
    
    <i class="fa-brands fa-html5"></i>
    <img src=${nextLogo} alt="Next.js logo">
    <i class="fa-brands fa-square-js"></i>
   
    <img src=${tailwindLogo} alt="Tailwind logo">
    <i class="fa-brands fa-figma"></i>
    <i class="fa-brands fa-react"></i>
   
    `

    return competencesElm
}