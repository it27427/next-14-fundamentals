'use client';

import Footer from './components/Footer';
import './globals.css';

import { useRouter } from 'next/compat/router';
import { usePathname } from 'next/navigation';

// export const metadata = {
//   title: 'Next Fundamentals',
//   description: 'Learning next.js fundamentals',
// };

const RootLayout = ({ children }) => {
  // const pathName = usePathname();
  const router = useRouter();

  return (
    <html lang='en'>
      <body className='bg-slate-300' suppressHydrationWarning={true}>
        <main>{children}</main>
        {/* {router !== '*' && <Footer />} */}
      </body>
    </html>
  );
};

export default RootLayout;
