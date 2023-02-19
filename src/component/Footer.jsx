import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-3">
      <div className="container">
        <p className="text-center">Copyright &copy; {new Date().getFullYear()} GilgitBaltistan.com</p>
      </div>
    </footer>
  );
};

export default Footer;
