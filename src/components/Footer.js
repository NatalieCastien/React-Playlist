import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerStyle">
          <p className="footerText">© Natalie Castien {year}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
