
import "./dev-projects.scss";

import eva1 from '../assets/project-imgs/eva1.png';
import evaVideo from '../assets/project-imgs/eva-video.mp4';
import believeFitnessVideo from '../assets/project-imgs/believe-video.mp4';
import believeFitness from '../assets/project-imgs/believefitness.png';
import iPlayMusic from '../assets/project-imgs/iplaymusic1.png';
import newsifyImg from '../assets/project-imgs/newsify.png';
import movieImg from '../assets/project-imgs/front-project.png';
import pokeImg from '../assets/project-imgs/poke-dex-frame.png';
import kontorassistancenImg from '../assets/project-imgs/kontorassistancen-web.png';

//import karmenImg from '../assets/project-imgs/karmen.png';
//import avisImg from '../assets/project-imgs/avis.png';

const imgArray = [eva1, believeFitness, iPlayMusic, newsifyImg, movieImg, pokeImg, kontorassistancenImg];
const projectLinks = [null, null, "https://iplaymusic-tina.netlify.app/", "https://newsify-tina.netlify.app/", "https://movie-site-tina.netlify.app/", "https://tinas-pokedex-site.netlify.app/", "https://kontorassistancen.dk"];
const projectTexts = [
        {
        projectname: "Eva Steen Christensen",
        description: "A makeover of the Artist's webpage. New design and therefor new theme for the webpage that the customer also can use to chage visuals etc. fx icluding a new design for menu/userflow, slider and portfolio-layout. Project is still under further development.",
        technologies: "Wordpress, PHP, Wordpress Theme development, UX/UI Design",
        links: {
            github: null,
            webpage: null,
            video: evaVideo,
        },
    },
            {
        projectname: "Believe Fitness",
        description: "A fitness app made in 2026, to show you the fitness classes and search in them. There is log in and create new user, also the admin can create a new class.",
        technologies: "Next.js, Tailwind, HTML5, REST API",
        links: {
            github: "https://github.com/TinaWulff/believe-fitness-app",
            webpage: null,
            video: believeFitnessVideo,
        },
    },
        {
        projectname: "iPlayMusic",
        description: "Music app to play music from Spotify. Spotify's API is used to fetch data from. This school-project is from January 2026.",
        technologies: "Next.js, Tailwind, HTML5, REST API",
        links: {
            github: "https://github.com/TinaWulff/iPlayMusicApp",
            webpage: "iplaymusic-tina.netlify.app/",
        },
    },
    {
        projectname: "Newsify",
        description: "News app made in 2025, to show you the latest and most popular news from The New York Times website, you can save the links you want for later in the Archive-page.",
        technologies: "Javascript, Vite, SCSS, HTML5, REST API",
        links: {
            github: "https://github.com/rts-cmk-wu13/projekt-newsify-TinaWulff",
            webpage: "newsify-tina.netlify.app/",
        },
    },
    {
        projectname: "MyMovie",
        description: "Movie App made in 2025, to check out the latest and most popular movies right now and bookmark your favorites, to check them out later. Read about the movies and watch movie-trailers.",
        technologies: "Javascript, Vite, SCSS, HTML5 REST API",
        links: {
            github: "https://github.com/rts-cmk-wu13/mymovie-TinaWulff",
            webpage: "movie-site-tina.netlify.app",
        },
    },
    {
        projectname: "Poke-dex",
        description: "Poke-dex app made in 2025, to check out all the pokemons and read about them.",
        technologies: "Javascript, Vite, SCSS, HTML5, REST API",
        links: {
            github: "https://github.com/rts-cmk-wu13/pokedex-TinaWulff",
            webpage: "tinas-pokedex-site.netlify.app",
        },
    },
        {
        projectname: "Kontorassistancen",
        description: "Website made in 2025 for the company Kontorassistancen, which offers accounting and office assistance. This project is a full webpage design and development, i did all the content in this page, except creating the photos.",
        technologies: "React, Vite, SCSS, UX/UI Webdesign, content creation",
        links: {
            github: "https://github.com/TinaWulff/kontorassistancen",
            webpage: "kontorassistancen.dk",
        },
    },
]


export default function projectsPresentation() {
    const webProjectsElm = document.createElement("section");
    webProjectsElm.className = "web-projects-section";
    webProjectsElm.id = "web-development";

    let currentImgIndex = 0;

    function renderProject(index) {
        const project = projectTexts[index];

        webProjectsElm.innerHTML = `
        <div class="project-container">
            <h2>Web-development</h2>

            <div class="text-content__intro">
                <p>This is an overview of my latest <strong>web-development projects</strong>, which I will update along the way as I advance with my education.</p>
                <p>Since this is school-projects for practical exercises there might be elements that is without functionality.</p>
            </div>

            <div class="text-content__projekts">
                <h3>${project.projectname}</h3>
                <p>${project.description}</p>
                <h4>Technologies:</h4>
                <p>${project.technologies}</p>
                <h4>Code:</h4>
                ${project.links.github ? `<a href="${project.links.github}" target="_blank">GitHub</a><br>` : `<span>No GitHub link</span><br>`}
                <h4>Demo:</h4>
                ${project.links.webpage ?
                    `<a href="https://${project.links.webpage}" target="_blank">Project link</a>` :
                    `<p>No online demo available</p>
                    <p>Click to show video demonstration of project</p>
                    <button class="show-video-btn"><i class="fa-solid fa-circle-play"></i>Show video demo</button>`
                }
            </div>

            <article class="gallery">
                <i class="fa-solid fa-chevron-left gallery-nav gallery-prev"></i>
                <div class="img-container">
                    <img class="gallery-img" src="${imgArray[index]}" alt="project image">
                    ${project.links.webpage ?
                        `<a href="https://${project.links.webpage}" class="img-link" target="_blank">Click to visit project-page</a>` :
                        project.links.video ?
                            `<a href="#" class="img-link play-video-link"><i class="fa-solid fa-circle-play"></i> Play video demo</a>` :
                            ''
                    }
                </div>
                <i class="fa-solid fa-chevron-right gallery-nav gallery-next"></i>
            </article>
        </div>
        `;

        // Event listeners til galleri-navigation
        const leftBtn = webProjectsElm.querySelector(".gallery-prev");
        const rightBtn = webProjectsElm.querySelector(".gallery-next");

        leftBtn.addEventListener("click", () => {
            currentImgIndex = (currentImgIndex - 1 + imgArray.length) % imgArray.length;
            renderProject(currentImgIndex);
        });

        rightBtn.addEventListener("click", () => {
            currentImgIndex = (currentImgIndex + 1) % imgArray.length;
            renderProject(currentImgIndex);
        });

        // Event listener til video-demo-knap og overlay play-link
        const showVideoBtn = webProjectsElm.querySelector('.show-video-btn');
        const playVideoLink = webProjectsElm.querySelector('.play-video-link');
        function playVideo() {
            const gallery = webProjectsElm.querySelector('.gallery .img-container');
            if (gallery && project.links.video) {
                gallery.innerHTML = `
                    <video controls autoplay style="max-width:100%; border-radius: 8px;">
                        <source src="${project.links.video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;
            } else {
                alert('Video demo ikke tilgængelig for dette projekt.');
            }
        }
        if (showVideoBtn) {
            showVideoBtn.addEventListener('click', playVideo);
        }
        if (playVideoLink) {
            playVideoLink.addEventListener('click', function(e) {
                e.preventDefault();
                playVideo();
            });
        }
    }

    renderProject(currentImgIndex);
    return webProjectsElm;
}







//overskrift: projectnavn,description: textdescript, tecnologies: js, scss etc, links til gitHub & netlify. 
/*
export default function projectsPresentation() {
    let webProjectsElm = document.createElement("section")
    webProjectsElm.className = "web-projects-section";
    webProjectsElm.id = "web-development";

    let currentImgIndex = 0;

    webProjectsElm.innerHTML = `
        <h2>Web-development</h2>

        <div class="text-content__intro">
        <p>This is an overview of my latest <strong>web-development projects</strong>, which i will update along the way as i advance with my education.</p>
        <p>Since this is school-projects for practical exercises there might be elements that is without functionality.</p>
        </div>
        <div class="project-container"></div>
        `;

    const container = webProjectsElm.querySelector(".project-container");

    function renderProject(index) {
        const project = projectTexts[index];

        container.innerHTML = `
        <div class="text-content__projekts">
        <h3>${project.projectname}</h3>
        <p>${project.description}</p>
        <h4>Technologies:</h4>
        <p>${project.technologies}</p>
        <h4>Links:</h4>
        <a href="${project.links.github}" target="_blank">GitHub</a>
        <a href="${project.links.webpage}" target="_blank">Project webpage (made mobile-first)</a>
        </div>

        <article class="gallery">
        <i class="fa-solid fa-chevron-left gallery-nav gallery-prev"></i>
        <div class="img-container">
          <img class="gallery-img" src="${imgArray[index]}" alt="project image">
          <a href="https://${projectLinks[index]}" class="img-link" target="_blank">Click to visit project-page</a>
        </div>
        <i class="fa-solid fa-chevron-right gallery-nav gallery-next"></i>
        </article>
        `;

        // Bind events igen (fordi knapperne er re-rendered)
        const leftBtn = container.querySelector('.gallery-prev');
        const rightBtn = container.querySelector('.gallery-next');

        leftBtn.addEventListener('click', () => {
            currentImgIndex = (currentImgIndex - 1 + imgArray.length) % imgArray.length;
            renderProject(currentImgIndex);
        });

        rightBtn.addEventListener('click', () => {
            currentImgIndex = (currentImgIndex + 1) % imgArray.length;
            renderProject(currentImgIndex);
        });
    }

    renderProject(currentImgIndex);

    return webProjectsElm
}
*/