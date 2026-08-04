import pixelProfile from "../../assets/pixel-profile2.png";

const contactLinks = [
  { href: "mailto:tina@tinawulff.dk", label: "Email" },
  { href: "https://www.instagram.com/wulfftina/", label: "Instagram" },
  { href: "https://www.linkedin.com/in/tina-wulff-29804396/", label: "LinkedIn" },
  { href: "https://github.com/TinaWulff", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="footer max-w-6xl mx-auto" id="footer">
      <div className="contact-info">
                <p>Tina Wulff</p>
                <p>Copenhagen 2300</p>
                <p>tina@tinawulff.dk</p>
                <ul className="header-icons" aria-label="Contact links">
                {contactLinks.map((link) => (
                    <li key={link.href}>
                    <a href={link.href} rel="noreferrer" target={link.href.startsWith("http") ? "_blank" : undefined}>
                        {link.label}
                    </a>
                    </li>
                ))}
                </ul>
        </div>

        <div className="footer-media">
            <img className="profile-pixel" src={pixelProfile} alt="Profile picture in pixel art" />
        </div>
    </footer>
  );
}
