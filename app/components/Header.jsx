import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='bg-indigo-700'>
      <div className='container'>
        <nav className='flex items-center justify-between px-6'>
          <Link
            href='/'
            className='text-slate-100 font-semibold text-xl p-3 inline-block'
          >
            NextBlog
          </Link>

          <ul className='flex items-center gap-3'>
            <li>
              <Link
                href='/'
                className={`${
                  pathname === '/'
                    ? 'bg-indigo-900 text-white py-3 px-5 inline-block'
                    : 'text-white py-3 px-5 inline-block transition-all hover:bg-indigo-900'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className={`${
                  pathname === '/about'
                    ? 'bg-indigo-900 text-white py-3 px-5 inline-block'
                    : 'text-white py-3 px-5 inline-block transition-all hover:bg-indigo-900'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/blogs'
                className={`${
                  pathname === '/blogs'
                    ? 'bg-indigo-900 text-white py-3 px-5 inline-block'
                    : 'text-white py-3 px-5 inline-block transition-all hover:bg-indigo-900'
                }`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className={`${
                  pathname === '/contact'
                    ? 'bg-indigo-900 text-white py-3 px-5 inline-block'
                    : 'text-white py-3 px-5 inline-block transition-all hover:bg-indigo-900'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
