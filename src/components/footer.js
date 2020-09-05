import React from "react";

function Footer(key) {
  return (
    <div className="footer__data">
      <img className="footer__icon icon" alt="footer-icon" src={key.image} />
      <p>{key.number}</p>
    </div>
  );
}
export default Footer;
