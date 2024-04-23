import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: 'This is blog one',
    description: 'Blog description one',
  },
  {
    id: 2,
    title: 'This is blog two',
    description: 'Blog description two',
  },
  {
    id: 3,
    title: 'This is blog three',
    description: 'Blog description three',
  },
  {
    id: 4,
    title: 'This is blog four',
    description: 'Blog description four',
  },
  {
    id: 5,
    title: 'This is blog five',
    description: 'Blog description five',
  },
];

const BlogsPage = () => {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold'>My Blogs</h1>

        <div className='flex flex-col gap-6'>
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
