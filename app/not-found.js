'use client';

import Link from 'next/link';

const notFound = () => {
  return (
    <div className='flex flex-col gap-6 items-center justify-center min-h-screen'>
      <h2 className='text-4xl text-red-600 font-bold text-center'>
        Error 404!
        <br />
        Page Not Fond
      </h2>
      <Link
        href='/'
        className='bg-red-800	text-slate-100 text-sm font-semibold px-4 py-3 rounded-md transition-all hover:bg-red-500'
      >
        Back to Home
      </Link>
    </div>
  );
};

export default notFound;
