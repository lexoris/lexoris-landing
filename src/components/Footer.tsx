import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, ShieldCheck } from "lucide-react";
import LexorisLogo from "@/assets/Lexoris-Logo.svg";

const Footer = () => {
  const iconClass = "w-5 h-5 stroke-[1.5]";
  const linkClass = "text-[#FAFAFA] hover:text-[#B31921] transition-colors";

  return (
    <footer className="bg-secondary text-secondary-foreground text-center py-12 px-5 pb-16 md:pb-12">
      <div className="mb-5">
        <img src={LexorisLogo} alt="Lexoris Logo" className="h-24 md:h-[116px] w-auto mx-auto" />
      </div>
      
      <p className="font-bold mb-4 text-sm md:text-base px-4">
        Locally Hosted. Legally Accurate. Transcription You Can Trust.
      </p>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0 mb-4">
        <a href="/terms.html" className="hover:text-primary transition-colors px-2 py-1">
          Terms of Use
        </a>
        <span className="hidden md:inline">|</span>
        <a href="/privacy.html" className="hover:text-primary transition-colors px-2 py-1">
          Privacy Policy
        </a>
        <span className="hidden md:inline">|</span>
        <Link to="/security" className="hover:text-primary transition-colors px-2 py-1">
          Security
        </Link>
      </div>
      
      <div className="flex justify-center gap-4 my-4 items-center">
        <a
          href="https://www.linkedin.com/company/lexoris"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lexoris LinkedIn"
          className={linkClass}
        >
          <Linkedin className={iconClass} />
        </a>
        <a
          href="https://www.instagram.com/lexorisau/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lexoris Instagram"
          className={linkClass}
        >
          <Instagram className={iconClass} />
        </a>
        <a
          href="https://www.facebook.com/people/Lexoris/61585192140109/?mibextid=LQQJ4d&rdid=OtdmUYgT9ngtZGXz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16qoLKmYB3%2F%3Fmibextid%3DLQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lexoris Facebook"
          className={linkClass}
        >
          <Facebook className={iconClass} />
        </a>
        <Link to="/security" aria-label="Security & Compliance" className={linkClass}>
          <ShieldCheck className={iconClass} />
        </Link>
      </div>
      
      <p className="text-primary font-semibold">
        Contact:{" "}
        <a href="mailto:admin@lexoris.com.au" className="hover:underline">
          admin@lexoris.com.au
        </a>
      </p>
      
      <p className="text-sm mt-2 opacity-80">ABN: 91448850545 © Lexoris</p>
    </footer>
  );
};

export default Footer;
