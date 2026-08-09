const aboutCards = [
  {
    title: "Profile",
    category: "ux-ui-design",
    text:
      "I work across frontend development, UX/UI and visual communication, with my strongest foundation in React, Next.js, JavaScript and WordPress/PHP. I am especially motivated by understanding how a solution connects across user experience, frontend, APIs, data and backend. My fine art background strengthens my eye for detail, composition and how different users experience a digital product.",
  },
  {
    title: "Working Method",
    category: "web-development",
    text:
      "I work in a structured and investigative way: first understanding the need and the existing solution, then developing in small steps and improving through testing and feedback. I focus on reusable components, readable code, responsive behaviour and practical details such as accessibility, performance, SEO and maintainable structure. I also use tools such as ChatGPT, GitHub Copilot, Codex and Claude for technical sparring, debugging and code exploration, while always reviewing, adapting and testing the result myself.",
  },
  {
    title: "Collaboration",
    category: "visual-art",
    text:
      "I enjoy balancing independent responsibility with close collaboration and technical sparring. I am used to working across disciplines and communicating with both technical and non-technical colleagues, clients and users. I work independently while communicating clearly and involving others when their perspective can strengthen the solution. I keep both the technical requirements and the people using the product in view.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="about-section mx-auto w-[80vw] max-w-7xl px-5 py-20 max-[600px]:py-20 scroll-mt-10">
      <h2 className="font-hand text-4xl sm:text-6xl">About</h2>
      <div className="about-card-grid" aria-label="About me">
        {aboutCards.map((card) => (
          <article className="about-card" data-category={card.category} key={card.title}>
            <h3 className="font-hand about-card__title">{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
