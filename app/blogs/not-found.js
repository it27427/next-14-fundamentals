import Link from 'next/link';

const BlogNotFound = () => {
  return (
    <div>
      <div className='flex flex-col gap-6 items-center justify-center min-h-screen'>
        <h2 className='text-4xl text-red-600 font-bold text-center'>
          Error 404!
          <br />
          Blog Not Fond
        </h2>
        <Link
          href='/blogs'
          className='bg-red-800	text-slate-100 text-sm font-semibold px-4 py-3 rounded-md transition-all hover:bg-red-500'
        >
          Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogNotFound;
