import { Link } from "react-router-dom";
import LexorisLogo from "@/assets/Lexoris-Logo.svg";
import linkedinIcon from "@/assets/linkedin.png";
import gdprIcon from "@/assets/gdprcompliant.png";

const Footer = () => {
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
      
      <div className="flex justify-center gap-3 my-4">
        <a
          href="https://www.linkedin.com/company/lexoris"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-90 hover:opacity-100 transition-opacity"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7 rounded" />
        </a>
        <img src={gdprIcon} alt="GDPR Compliant" className="w-7 h-7 rounded" />
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
