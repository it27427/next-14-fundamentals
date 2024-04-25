import Footer from './components/Footer';
import Header from './components/Header';

import './globals.css';

export const metadata = {
  title: 'Next Fundamentals',
  description: 'Learning next.js fundamentals',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className='bg-slate-300' suppressHydrationWarning={true}>
        <Header />
        <main className='min-h-screen p-6'>
          <div className='container'>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
