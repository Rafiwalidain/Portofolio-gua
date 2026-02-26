import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // 🔥 SCROLL SPY SYSTEM
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");

            const matchedLink = navLinks.find(
              (link) => link.id === id
            );

            if (matchedLink) {
              setActive(matchedLink.title);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-80px 0px 0px 0px", // supaya akurat karena navbar fixed
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain"
            loading="lazy"
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">

          {/* SOCIAL ICONS */}
          <div className="flex flex-row gap-5 items-center">
            <li className="hover:scale-110 transition">
              <a href="https://github.com/Rafiwalidain" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-secondary text-[30px] hover:text-white" />
              </a>
            </li>
            <li className="hover:scale-110 transition">
              <a href="https://linkedin.com/in/m-rafi-walidain" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-secondary text-[30px] hover:text-blue-400" />
              </a>
            </li>
            <li className="hover:scale-110 transition">
              <a href="https://www.instagram.com/rafii_waliidain" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-secondary text-[30px] hover:text-red-400" />
              </a>
            </li>
          </div>

          {/* NAVIGATION LINKS */}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer transition`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            loading="lazy"
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">

              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

            </ul>

            {/* MOBILE SOCIAL ICONS */}
            <div className="flex gap-3 mt-4">
              <a href="https://github.com/Rafiwalidain" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-secondary text-[22px] hover:text-white" />
              </a>
              <a href="https://linkedin.com/in/m-rafi-walidain" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-secondary text-[22px] hover:text-blue-400" />
              </a>
              <a href="https://www.instagram.com/rafii_waliidain" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-secondary text-[22px] hover:text-red-400" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;