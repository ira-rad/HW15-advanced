import React from "react";

const Footer = (key) => (
  <div className="footer__data">
    <img className="footer__icon icon" alt="footer-icon" src={key.image} />
    <p>{key.number}</p>
  </div>
);

export default Footer;
