import Link from 'next/link';
import getAllBlogs from '../lib/getAllBlogs';

const BlogsPage = async () => {
  const blogs = await getAllBlogs();

  return (
    <>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold'>My Blogs</h1>

        <div className='flex flex-col gap-3'>
          {blogs.map((blog) => (
            <Link href={`blogs/${blog.source.id}`} key={blog.source.id}>
              {blog.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
