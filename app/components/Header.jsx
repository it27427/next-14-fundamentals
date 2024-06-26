'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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

          <ul className='flex items-center gap-1'>
            <li>
              <Link
                href='/'
                className={`${
                  pathname === '/'
                    ? 'bg-indigo-900 text-white py-3 px-5 inline-block rounded-md'
                    : 'text-white py-3 px-5 inline-block transition-all hover:bg-indigo-900 rounded-md'
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
                    ? 'bg-indigo-900 text-white py-3 px-5 inline-block rounded-md'
                    : 'text-white py-3 px-5 inline-block transition-all hover:bg-indigo-900 rounded-md'
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
                    ? 'bg-indigo-900 text-white py-3 px-5 inline-block rounded-md'
                    : 'text-white py-3 px-5 inline-block transition-all hover:bg-indigo-900 rounded-md'
                }`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href='/posts'
                className={`${
                  pathname === '/posts'
                    ? 'bg-indigo-900 text-white py-3 px-5 inline-block rounded-md'
                    : 'text-white py-3 px-5 inline-block transition-all hover:bg-indigo-900 rounded-md'
                }`}
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className={`${
                  pathname === '/contact'
                    ? 'bg-indigo-900 text-white py-3 px-5 inline-block rounded-md'
                    : 'text-white py-3 px-5 inline-block transition-all hover:bg-indigo-900 rounded-md'
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
