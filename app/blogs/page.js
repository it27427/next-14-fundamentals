import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: 'This is blog one',
    imgSrc:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJsb2dzfGVufDB8fDB8fHww',
    description: 'Blog description one',
  },
  {
    id: 2,
    title: 'This is blog two',
    imgSrc:
      'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsb2dzfGVufDB8fDB8fHww',
    description: 'Blog description two',
  },
  {
    id: 3,
    title: 'This is blog three',
    imgSrc:
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2dzfGVufDB8fDB8fHww',
    description: 'Blog description three',
  },
  {
    id: 4,
    title: 'This is blog four',
    imgSrc:
      'https://plus.unsplash.com/premium_photo-1682434403587-1313db01ed02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3N8ZW58MHx8MHx8fDA%3D',
    description: 'Blog description four',
  },
  {
    id: 5,
    title: 'This is blog five',
    imgSrc:
      'https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZ3N8ZW58MHx8MHx8fDA%3D',
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
