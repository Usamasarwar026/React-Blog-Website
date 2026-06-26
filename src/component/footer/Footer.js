import React from "react";

function Footer() {
  return (
    <div>
      <>
        <footer className="bg-bg-primary dark:bg-dark-bg-primary transition-colors duration-200">
          <div className="mx-auto px-[15px] md:px-[30px] w-full max-w-full md:max-w-[800px] lg:max-w-[1150px] py-20 grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-[30px]">
            <div className="text-center sm:text-left">
              <a href="/" className="inline-block mb-2.5">
                <img
                  src={require("../../assets/images/logo-light.png")}
                  alt="SimpleBlog Logo"
                  width="150"
                  className="block dark:hidden"
                />
                <img
                  src={require("../../assets/images/logo-dark.png")}
                  alt="SimpleBlog Logo"
                  width="150"
                  className="hidden dark:block"
                />
              </a>

              <p className="text-fg-secondary dark:text-dark-fg-secondary max-w-[300px] mx-auto sm:mx-0">
                Learn about Web accessibility, Web performance, and Database
                management.
              </p>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-fg-primary dark:text-dark-fg-primary font-bold mb-[0.4rem] lg:text-[1.125rem]">
                Quick Links
              </p>
              <ul>
                <li className="lg:mb-[0.3rem]">
                  <a
                    href="/"
                    className="text-fg-secondary dark:text-dark-fg-secondary hover:text-accent dark:hover:text-accent text-decoration-none transition-colors duration-200"
                  >
                    Advertise with us
                  </a>
                </li>
                <li className="lg:mb-[0.3rem]">
                  <a
                    href="/"
                    className="text-fg-secondary dark:text-dark-fg-secondary hover:text-accent dark:hover:text-accent text-decoration-none transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li className="lg:mb-[0.3rem]">
                  <a
                    href="/"
                    className="text-fg-secondary dark:text-dark-fg-secondary hover:text-accent dark:hover:text-accent text-decoration-none transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-fg-primary dark:text-dark-fg-primary font-bold mb-[0.4rem] lg:text-[1.125rem]">
                Legal Stuff
              </p>
              <ul>
                <li className="lg:mb-[0.3rem]">
                  <a
                    href="/"
                    className="text-fg-secondary dark:text-dark-fg-secondary hover:text-accent dark:hover:text-accent text-decoration-none transition-colors duration-200"
                  >
                    Privacy Notice
                  </a>
                </li>
                <li className="lg:mb-[0.3rem]">
                  <a
                    href="/"
                    className="text-fg-secondary dark:text-dark-fg-secondary hover:text-accent dark:hover:text-accent text-decoration-none transition-colors duration-200"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li className="lg:mb-[0.3rem]">
                  <a
                    href="/"
                    className="text-fg-secondary dark:text-dark-fg-secondary hover:text-accent dark:hover:text-accent text-decoration-none transition-colors duration-200"
                  >
                    Terms Of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-fg-secondary dark:text-dark-fg-secondary text-fs-4 text-center p-4 border-t border-action-primary dark:border-dark-action-primary transition-colors duration-200">
            &copy; Copyright 2024{" "}
            <a
              href="/"
              className="text-accent dark:text-accent font-medium hover:underline text-decoration-none"
            >
              SimpleBlog
            </a>
          </p>
        </footer>
      </>
    </div>
  );
}

export default Footer;
