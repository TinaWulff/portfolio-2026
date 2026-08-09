const mockupModules = import.meta.glob("../../assets/mockups-til-portfolio/**/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
});

const mockupLinkMap = [
  {
    label: "Believe Fitness",
    match: /believe|belivefit|belivefitness|fitness/,
    live: null,
    github: "https://github.com/TinaWulff/believe-fitness",
  },
  {
    label: "MyMovie",
    match: /mymovie/,
    live: "https://movie-site-tina.netlify.app",
    github: "https://github.com/rts-cmk-wu13/mymovie-TinaWulff",
  },
  {
    label: "Newsify",
    match: /newsify/,
    live: "https://newsify-tina.netlify.app/",
    github: "https://github.com/rts-cmk-wu13/projekt-newsify-TinaWulff",
  },
  {
    label: "Poke-dex",
    match: /pokedex/,
    live: "https://tinas-pokedex-site.netlify.app",
    github: "https://github.com/rts-cmk-wu13/pokedex-TinaWulff",
  },
  {
    label: "ricka",
    match: /ricka/,
    live: "https://performancegrowth.dk/",
    github: null,
  },
];

function formatLabel(fileName) {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function createMockupItems() {
  return Object.entries(mockupModules)
    .map(([path, module]) => {
      const fileName = path.split("/").pop() ?? "mockup";
      const label = formatLabel(fileName);
      const match = mockupLinkMap.find(({ match: matcher }) => matcher.test(fileName.toLowerCase()));

      if (!match) {
        return null;
      }

      return {
        src: module.default,
        alt: `${label} mobile mockup`,
        title: match.label,
        href: match.live ?? match.github ?? "https://tinawulff.dk/",
        linkType: match.live ? "live" : "github",
      };
    })
    .filter(Boolean);
}

const mockupItems = createMockupItems();

export default function MockupMarquee() {
  if (!mockupItems.length) {
    return null;
  }

  const trackItems = [...mockupItems, ...mockupItems];

  return (
    <section className="mockup-marquee-section">
      <div className="mockup-marquee__viewport" aria-label="Project mockup gallery">
        <div className="mockup-marquee__track">
          {trackItems.map((item, index) => (
            <a
              key={`${item.title}-${index}`}
              className="mockup-marquee__card"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${item.title}`}
            >
              <article className="mockup-marquee__article">
                <img className="mockup-marquee__image" src={item.src} alt={item.alt} draggable="false" />
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
