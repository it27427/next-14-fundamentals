import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='container'>
        <p>&copy; {currentYear} All rights reserved - IT</p>
      </div>
    </footer>
  );
};

export default Footer;
