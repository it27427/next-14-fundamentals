import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='bg-indigo-700 p-3'>
      <div className='container'>
        <nav className='flex items-center justify-between'>
          <Link href='/'>NextBlog</Link>

          <ul className='flex items-center gap-3'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/blogs'>Blogs</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
