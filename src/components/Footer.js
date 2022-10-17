import React from "react";
import sapFooterLogo from "../asset/sapFooterLogo.svg";

const Footer = () => {
  return (
    <div className="footer__container bg-black d-flex justify-content-between align-items-center">
      {/* Footer logo */}
      <div className="footer__logo">
        <img src={sapFooterLogo} alt="footerLogo" />
      </div>
      {/* copyrights details */}
      <div className="footer__copyRights text-white">
        <h2>&copy;2022 Minions Ventures Pvt Ltd</h2>
      </div>
    </div>
  );
};

export default Footer;
