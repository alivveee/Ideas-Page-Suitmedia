import React, { useState, useEffect } from "react";
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
    <header className={`z-10 fixed top-0 w-full px-20 py-4 bg-primary transition-all ${isInitial || isScrolled ? "" : "-translate-y-full bg-opacity-70"}`}>
      <div className="flex justify-between items-center">
        <a href="#" className="inline-block">
          <img src="suitmedia-logo.png" alt="suitmedia logo" className="h-auto min-w-32 max-w-32" />
        </a>

        <ul className="flex gap-4 text-white text-lg">
          <li>
            <Link to={"/work"} className={`hover:text-gray-300 ${location.pathname === "/work" ? "underline" : ""}`}>
              Work
            </Link>
          </li>
          <li>
            <Link to={"/about"} className={`hover:text-gray-300 ${location.pathname === "/about" ? "underline" : ""}`}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/services"} className={`hover:text-gray-300 ${location.pathname === "/services" ? "underline" : ""}`}>
              Services
            </Link>
          </li>
          <li>
            <Link to={"/ideas"} className={`hover:text-gray-300 ${location.pathname === "/ideas" ? "underline" : ""}`}>
              Ideas
            </Link>
          </li>
          <li>
            <Link to={"/careers"} className={`hover:text-gray-300 ${location.pathname === "/careers" ? "underline" : ""}`}>
              Careers
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className={`hover:text-gray-300 ${location.pathname === "/contact" ? "underline" : ""}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
