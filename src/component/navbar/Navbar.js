import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]);

  // Cleanup
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <header className="bg-bg-primary dark:bg-dark-bg-primary transition-colors duration-200 shadow-sm">
      <div className="mx-auto px-[15px] md:px-[30px] w-full max-w-full md:max-w-[800px] lg:max-w-[1150px]">
        <nav className="flex justify-between items-center gap-[15px] py-[15px] md:py-[30px] transition-all duration-200">
          <Link to="/" className="inline-block">
            <img
              src={require("../../assets/images/logo-light.png")}
              alt="SimpleBlog logo"
              width="150"
              className="block dark:hidden"
            />
            <img
              src={require("../../assets/images/logo-dark.png")}
              alt="SimpleBlog logo"
              width="150"
              className="hidden dark:block"
            />
          </Link>

          <div className="flex items-center gap-[15px] lg:hidden">
            <button
              className="w-10 h-10 flex justify-center items-center rounded-full text-[25px] bg-action-secondary text-fg-tertiary hover:bg-accent hover:text-white dark:bg-dark-action-primary dark:text-dark-fg-secondary dark:hover:bg-accent dark:hover:text-white transition-all duration-200"
              onClick={toggleTheme}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-lg" />
            </button>

            {/* Hamburger Menu Button */}
            <button
              className="w-10 h-10 flex justify-center items-center rounded-full text-[25px] bg-action-secondary text-fg-tertiary hover:bg-accent hover:text-white dark:bg-dark-action-primary dark:text-dark-fg-secondary dark:hover:bg-accent dark:hover:text-white transition-all duration-200"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-[30px]">
            <ul className="flex items-center gap-[30px]">
              <li>
                <Link
                  to="/"
                  className="text-fg-secondary hover:text-accent dark:text-dark-fg-secondary dark:hover:text-accent font-bold transition-colors duration-200 text-decoration-none"
                >
                  Home
                </Link>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-fg-secondary hover:text-accent dark:text-dark-fg-secondary dark:hover:text-accent font-bold transition-colors duration-200 text-decoration-none"
                >
                  About Me
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-fg-secondary hover:text-accent dark:text-dark-fg-secondary dark:hover:text-accent font-bold transition-colors duration-200 text-decoration-none"
                >
                  Contact
                </a>
              </li>
            </ul>

            <button
              className={`relative w-[52px] h-[26px] flex items-center p-[3px] rounded-full cursor-pointer transition-all duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-br from-[hsl(229,76%,66%)] to-[hsl(235,86%,65%)]"
                  : "bg-gradient-to-br from-[hsl(7,100%,71%)] to-[hsl(46,100%,65%)]"
              }`}
              onClick={toggleTheme}
            >
              {/* Sliding Circle */}
              <div
                className={`absolute bg-white w-[21px] h-[21px] rounded-full shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] top-[2.5px] transition-all duration-300 ${
                  isDarkMode ? "left-[28px]" : "left-[3px]"
                }`}
              />
              
              {/* Icons */}
              {!isDarkMode ? (
                <FontAwesomeIcon icon={faMoon} className="ml-auto mr-[6px] text-white text-[14px] z-10 relative" />
              ) : (
                <FontAwesomeIcon icon={faSun} className="mr-auto ml-[6px] text-white text-[14px] z-10 relative" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`fixed inset-0 bg-bg-primary dark:bg-dark-bg-overlay p-[70px_20px] overflow-y-auto overscroll-contain transition-all duration-500 ease-[cubic-bezier(1,0,0.3,0.7)] z-50 lg:hidden ${
              isMobileMenuOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"
            }`}
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 flex justify-center items-center rounded-full text-[25px] bg-action-secondary text-fg-tertiary hover:bg-accent hover:text-white dark:bg-dark-action-primary dark:text-dark-fg-secondary dark:hover:bg-accent transition-all duration-200"
              onClick={closeMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="pb-5 mb-5 border-b border-action-primary dark:border-dark-action-primary">
              <p className="h3 mb-4 text-fg-primary dark:text-dark-fg-primary">Main Menu</p>
              <ul>
                <li className="mb-2">
                  <Link
                    to="/"
                    className="text-fs-3 text-fg-secondary hover:text-accent dark:text-dark-fg-secondary dark:hover:text-accent text-decoration-none block py-1"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <a
                    href="#about"
                    className="text-fs-3 text-fg-secondary hover:text-accent dark:text-dark-fg-secondary dark:hover:text-accent text-decoration-none block py-1"
                    onClick={closeMobileMenu}
                  >
                    About Me
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#contact"
                    className="text-fs-3 text-fg-secondary hover:text-accent dark:text-dark-fg-secondary dark:hover:text-accent text-decoration-none block py-1"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="h3 mb-4 text-fg-primary dark:text-dark-fg-primary">Topics</p>
              <ul>
                <li className="mb-2">
                  <a
                    href="#database"
                    className="text-fs-3 text-fg-secondary hover:text-accent dark:text-dark-fg-secondary dark:hover:text-accent text-decoration-none block py-1"
                    onClick={closeMobileMenu}
                  >
                    Database
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#accessibility"
                    className="text-fs-3 text-fg-secondary hover:text-accent dark:text-dark-fg-secondary dark:hover:text-accent text-decoration-none block py-1"
                    onClick={closeMobileMenu}
                  >
                    Accessibility
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#webperformance"
                    className="text-fs-3 text-fg-secondary hover:text-accent dark:text-dark-fg-secondary dark:hover:text-accent text-decoration-none block py-1"
                    onClick={closeMobileMenu}
                  >
                    Web Performance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

