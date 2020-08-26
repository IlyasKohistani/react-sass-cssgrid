import React from "react";
import { FOOTER } from "../data/Gallery";
const Footer = () => {
  const footerList = FOOTER.map((footer) => {
    return (
      <li
        className="nav__item"
        key={footer.id}
        data-aos="zoom-in"
        data-aos-delay={footer.delay}
        data-aos-easing="ease-out-cubic"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <a href={footer.link} className="nav__link">
          {footer.text}
        </a>
      </li>
    );
  });

  return (
    <footer className="footer">
      <ul className="nav">{footerList}</ul>
      <p className="copyright">
        &copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this
        project for your own purposes. This does NOT apply if you plan to
        produce your own course or tutorials based on this project.
      </p>
    </footer>
  );
};

export default Footer;
