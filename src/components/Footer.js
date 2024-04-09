import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <span className="text-muted"><strong>GIETU CLUB</strong> &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;
