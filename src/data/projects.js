import believeFitnessImage from "../assets/project-imgs/believefitness.png";
import PergrowthImage from "../assets/project-imgs/pergro.png";
import afgang2020Image from "../assets/project-imgs/visual-art/afgang-2020.jpg";
import evaDetailImage from "../assets/project-imgs/eva-2.png";
import evaImage from "../assets/project-imgs/eva1.png";
import galleriKantImage from "../assets/project-imgs/visual-art/galleri-kant-connected-2023.jpg";
import iPlayMusicImage from "../assets/project-imgs/iplaymusic1.png";
import iPlayMusicSecondImage from "../assets/project-imgs/iplaymusic2.png";
import kontorassistancenFullImage from "../assets/project-imgs/kontorassistancen.png";
import kontorassistancenImage from "../assets/project-imgs/kontorassistancen-web.png";
import molekylGalleryImage from "../assets/project-imgs/visual-art/molekyl-gallery-2021.jpg";
import movieImage from "../assets/project-imgs/front-project.png";
import newsifyImage from "../assets/project-imgs/newsify.png";
import pokedexImage from "../assets/project-imgs/poke-dex-frame.png";
import uxCourseImage from "../assets/project-imgs/UX-img-ny.png";
import uxCourseSecondImage from "../assets/project-imgs/ux-image.png";

const createProject = (project) => ({
  ...project,
  categories: project.categories ?? [project.category],
  primaryCategory: project.primaryCategory ?? project.category ?? project.categories?.[0],
  media: {
    ...project.media,
    images: project.media?.images ?? [project.media?.image].filter(Boolean),
  },
});

export const projects = [
   createProject({
    id: "performancegrowth",
    title: "Performance & Growth",
    categories: ["web-development", "ux-ui-design"],
    primaryCategory: "web-development",
    featured: true,
    summary:
      "Website for a leadership coaching business, built with a custom theme, UX/UI design, deployment, and SEO.",
    technologies: ["WordPress", "PHP", "Theme Development", "CSS", "UX/UI Design"],
    media: {
      image: PergrowthImage,
      images: [PergrowthImage],
      video: null,
    },
    links: {
      github: null,
      live: "https://performancegrowth.dk/",
    },
  }),
  createProject({
    id: "eva-steen-christensen",
    title: "Eva Steen Christensen",
    categories: ["web-development", "ux-ui-design"],
    primaryCategory: "ux-ui-design",
    featured: true,
    summary:
      "Website redesign and WordPress theme direction for an artist portfolio, including menu flow, visual identity, slider and portfolio layout.",
    technologies: ["WordPress", "PHP", "Theme Development", "UX/UI Design"],
    media: {
      image: evaImage,
      images: [evaImage, evaDetailImage],
      video: null,
    },
    links: {
      github: null,
      live: null,
    },
  }),
  createProject({
    id: "believe-fitness",
    title: "Believe Fitness",
    category: "web-development",
    featured: true,
    summary:
      "Fitness app for browsing and searching classes, with user login, user creation and admin class creation.",
    technologies: ["Next.js", "Tailwind", "HTML5", "REST API"],
    media: {
      image: believeFitnessImage,
      video: null,
    },
    links: {
      github: "https://github.com/TinaWulff/believe-fitness-app",
      live: null,
    },
  }),
  createProject({
    id: "iplaymusic",
    title: "iPlayMusic",
    category: "web-development",
    featured: true,
    summary:
      "Music app using the Spotify API to fetch and present music data. School project from January 2026.",
    technologies: ["Next.js", "Tailwind", "HTML5", "REST API"],
    media: {
      image: iPlayMusicImage,
      images: [iPlayMusicImage, iPlayMusicSecondImage],
    },
    links: {
      github: "https://github.com/TinaWulff/iPlayMusicApp",
      live: "https://iplaymusic-tina.netlify.app/",
    },
  }),
  createProject({
    id: "kontorassistancen",
    title: "Kontorassistancen",
    categories: ["web-development", "ux-ui-design"],
    primaryCategory: "web-development",
    featured: true,
    summary:
      "Website for an accounting and office assistance business, including design, development and content creation.",
    technologies: ["React", "Vite", "SCSS", "UX/UI Web Design", "Content Creation"],
    media: {
      image: kontorassistancenImage,
      images: [kontorassistancenImage, kontorassistancenFullImage],
    },
    links: {
      github: "https://github.com/TinaWulff/kontorassistancen",
      live: "https://kontorassistancen.dk",
    },
  }),
  createProject({
    id: "newsify",
    title: "Newsify",
    category: "web-development",
    featured: false,
    summary:
      "News app showing latest and popular stories from The New York Times, with saved links in an archive page.",
    technologies: ["JavaScript", "Vite", "SCSS", "HTML5", "REST API"],
    media: {
      image: newsifyImage,
    },
    links: {
      github: "https://github.com/rts-cmk-wu13/projekt-newsify-TinaWulff",
      live: "https://newsify-tina.netlify.app/",
    },
  }),
  createProject({
    id: "mymovie",
    title: "MyMovie",
    category: "web-development",
    featured: false,
    summary:
      "Movie app for browsing popular movies, bookmarking favorites, reading details and watching trailers.",
    technologies: ["JavaScript", "Vite", "SCSS", "HTML5", "REST API"],
    media: {
      image: movieImage,
    },
    links: {
      github: "https://github.com/rts-cmk-wu13/mymovie-TinaWulff",
      live: "https://movie-site-tina.netlify.app",
    },
  }),
  createProject({
    id: "pokedex",
    title: "Poke-dex",
    category: "web-development",
    featured: false,
    summary: "Pokedex app for browsing Pokemon and reading details about each one.",
    technologies: ["JavaScript", "Vite", "SCSS", "HTML5", "REST API"],
    media: {
      image: pokedexImage,
    },
    links: {
      github: "https://github.com/rts-cmk-wu13/pokedex-TinaWulff",
      live: "https://tinas-pokedex-site.netlify.app",
    },
  }),
  createProject({
    id: "ux-ui-course",
    title: "UX/UI Course Project",
    category: "ux-ui-design",
    featured: false,
    summary:
      "Exam project from UX/UI and graphic design studies, based on redesigning an existing website with research, user testing, moodboards, wireframes and prototypes.",
    technologies: ["Figma", "Adobe Creative Cloud", "User Testing", "Wireframes", "Prototypes"],
    media: {
      image: uxCourseImage,
      images: [uxCourseImage, uxCourseSecondImage],
    },
    links: {
      github: null,
      live: null,
    },
  }),
  createProject({
    id: "galleri-kant-connected-2023",
    title: "Connected?",
    category: "visual-art",
    featured: false,
    summary:
      "Solo exhibition at Galleri Kant in 2023, presented on Tina Wulff's artist website.",
    technologies: ["Solo Exhibition", "Galleri Kant", "2023", "Fine Art"],
    media: {
      image: galleriKantImage,
    },
    links: {
      github: null,
      live: "https://tinawulff.dk/index.php/connected/",
    },
  }),
  createProject({
    id: "molekyl-gallery-2021",
    title: "Molekyl Gallery",
    category: "visual-art",
    featured: false,
    summary:
      "Exhibition at Molekyl Gallery in 2021, curated by Astrid Svangreen.",
    technologies: ["Exhibition", "Molekyl Gallery", "2021", "Curated"],
    media: {
      image: molekylGalleryImage,
    },
    links: {
      github: null,
      live: "https://tinawulff.dk/index.php/molekyl-gallery-malmo/",
    },
  }),
  createProject({
    id: "afgang-2020",
    title: "Afgang 2020",
    category: "visual-art",
    featured: false,
    summary:
      "MFA Degree Show 2020, presented as Carrying a Mother Wound on Tina Wulff's artist website.",
    technologies: ["MFA Degree Show", "Afgang 2020", "Installation", "Fine Art"],
    media: {
      image: afgang2020Image,
    },
    links: {
      github: null,
      live: "https://tinawulff.dk/index.php/carrying-a-mother-wound/",
    },
  }),
];
