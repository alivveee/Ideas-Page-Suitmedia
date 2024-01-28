import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;

      setIsScrolled(prevScrollPos > currentScrollPos || currentScrollPos < headerHeight);
      prevScrollPos = currentScrollPos;

      if (isInitial && currentScrollPos > headerHeight) {
        setIsInitial(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInitial]);

  return (
    <header className={`z-10 fixed top-0 w-full px-20 py-4 bg-primary transition-all ${isInitial || isScrolled ? "" : "-translate-y-full"}`}>
      <div className="flex flex-wrap justify-between items-center">
        <a href="#" className="inline-block">
          <img src="suitmedia-logo.png" alt="suitmedia logo" className="h-auto min-w-32 max-w-32" />
        </a>

        <ul className="flex flex-wrap gap-4 text-white text-lg">
          <li>
            <Link to={"/work"} className={`hover:underline ${location.pathname === "/work" ? "font-bold" : ""}`}>
              Work
            </Link>
          </li>
          <li>
            <Link to={"/about"} className={`hover:underline ${location.pathname === "/about" ? "font-bold" : ""}`}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/services"} className={`hover:underline ${location.pathname === "/services" ? "font-bold" : ""}`}>
              Services
            </Link>
          </li>
          <li>
            <Link to={"/ideas"} className={`hover:underline ${location.pathname === "/ideas" ? "font-bold" : ""}`}>
              Ideas
            </Link>
          </li>
          <li>
            <Link to={"/careers"} className={`hover:underline ${location.pathname === "/careers" ? "font-bold" : ""}`}>
              Careers
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className={`hover:underline ${location.pathname === "/contact" ? "font-bold" : ""}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
