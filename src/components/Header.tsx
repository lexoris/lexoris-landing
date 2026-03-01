import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LexorisLogo from "@/assets/Lexoris-Logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/how-it-works", label: "How it Works" },
    { href: "/why-lexoris", label: "Why Lexoris?" },
    { href: "/security", label: "Security" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Insights" },
    { href: "/faq", label: "FAQ" },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Home page: transparent initially, navy on scroll
  // Other pages: always navy
  const showNavyBackground = !isHomePage || isScrolled;

  return (
    <header className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 py-5 z-[1000] transition-all duration-300 ${
      showNavyBackground ? 'bg-lexoris-navy shadow-[0_2px_10px_rgba(0,0,0,0.25)]' : 'bg-transparent'
    }`}>
      <Link to="/" className="flex items-center gap-2">
        <img 
          src={LexorisLogo} 
          alt="Lexoris" 
          className={`w-auto transition-all duration-300 ${showNavyBackground ? 'h-[84px]' : 'h-[116px]'}`} 
        />
        <span className="font-heading font-bold uppercase tracking-[0.5px] text-[22px] text-white">LEXORIS</span>
      </Link>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden z-50 min-h-[44px] min-w-[44px] flex items-center justify-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`font-heading font-semibold text-base text-white hover:text-primary transition-colors duration-300 ${
              isActive(link.href) ? "text-primary" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
        <a href="https://app.lexoris.com.au/" target="_blank" rel="noopener noreferrer">
          <Button variant="nav">Start Free Trial</Button>
        </a>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-lexoris-navy flex flex-col items-start p-6 gap-2 shadow-xl md:hidden z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-heading font-semibold text-xl hover:text-primary transition-colors min-h-[44px] flex items-center w-full"
            >
              {link.label}
            </Link>
          ))}
          <a href="https://app.lexoris.com.au/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="w-full mt-2">
            <Button variant="nav" className="w-full">Start Free Trial</Button>
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
