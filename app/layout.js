import './globals.css';

export const metadata = {
  title: 'Next Fundamentals',
  description: 'Learning next.js fundamentals',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
};

export default RootLayout;
