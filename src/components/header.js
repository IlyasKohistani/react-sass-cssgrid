import React from "react";
import logo from "../img/logo.png";
import logo1 from "../img/logo-bbc.png";
import logo2 from "../img/logo-forbes.png";
import logo3 from "../img/logo-techcrunch.png";
import logo4 from "../img/logo-bi.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Nexter logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our properties</button>
      <div className="header__seenon-text">As seen on</div>
      <div className="header__seenon-logos">
        <img src={logo1} alt="Seen on logo 1" />
        <img src={logo2} alt="Seen on logo 2" />
        <img src={logo3} alt="Seen on logo 3" />
        <img src={logo4} alt="Seen on logo 4" />
      </div>
    </header>
  );
};

export default Header;
