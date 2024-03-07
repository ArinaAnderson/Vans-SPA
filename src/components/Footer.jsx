import React from 'react';

const Footer = () => {
  const nowDate = new Date();

  return (
    <footer className="page-footer">
      <div className="center">
        <p className="page-footer__text">&#169; {nowDate.getFullYear()} #VANLIFE</p>
      </div>
    </footer>
  );
};

export default Footer;

