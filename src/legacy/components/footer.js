import './footer.scss';
import pixelProfile from '../assets/pixel-profile2.png';

export default function footer() {
    let footerElm = document.createElement("footer")
    footerElm.className="footer";
    footerElm.id = "footer";

    footerElm.innerHTML = `
        <div class="contact-info">
            <p>Tina Wulff</p>
            <p>Copenhagen 2300</p>
            <p>tina@tinawulff.dk</p>
            <ul class="header-icons">
            <li><a href="mailto:tina@tinawulff.dk"><i class="fa-solid fa-square-envelope"></i></a></li>
            <li><a href="https://www.instagram.com/wulfftina/"><i class="fa-brands fa-square-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/tina-wulff-29804396/"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://github.com/TinaWulff"><i class="fa-brands fa-square-github"></i></a></li>
        </ul>
        </div>
        <div>
            <img class="profile-pixel" src="${pixelProfile}" alt="profile picture in pixelart">
        </div>
    `
    return footerElm
}