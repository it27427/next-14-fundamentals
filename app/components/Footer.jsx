'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='container px-4 lg:px-12 xxl:px-0'>
        <p>&copy; {currentYear} All rights reserved - IT</p>
      </div>
    </footer>
  );
};

export default Footer;
