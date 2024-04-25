import Link from 'next/link';
// import getAllBlogs from '../lib/getAllBlogs';

const blogs = [
  {
    id: 1,
    title: 'Blog title one',
    description: 'Blog one description',
  },
  {
    id: 2,
    title: 'Blog title two',
    description: 'Blog two description',
  },
  {
    id: 3,
    title: 'Blog title three',
    description: 'Blog three description',
  },
];

const BlogsPage = async () => {
  // const blogs = await getAllBlogs();

  return (
    <>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold'>My Blogs</h1>

        <div className='flex flex-col gap-3'>
          {blogs.map((blog) => (
            <Link href={`blogs/${blog.id}`} key={blog.id}>
              {blog.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
