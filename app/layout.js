import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'Next Fundamentals',
  description: 'Learning next.js fundamentals',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className='bg-slate-300' suppressHydrationWarning={true}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
