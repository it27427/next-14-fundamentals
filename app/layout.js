'use client';

import Footer from './components/Footer';
import './globals.css';

import { usePathname } from 'next/navigation';

// export const metadata = {
//   title: 'Next Fundamentals',
//   description: 'Learning next.js fundamentals',
// };

const RootLayout = ({ children }) => {
  const pathName = usePathname();

  return (
    <html lang='en'>
      <body className='bg-slate-300' suppressHydrationWarning={true}>
        <main>{children}</main>
        {console.log(pathName === '/*')}
        {pathName !== '/*' && <Footer />}
      </body>
    </html>
  );
};

export default RootLayout;
