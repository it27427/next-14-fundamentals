import Link from 'next/link';
import getAllPosts from '../lib/getAllPosts';

const PostPage = async () => {
  const posts = await getAllPosts();

  return (
    <div className='flex flex-col gap-4'>
      <h1>All Posts</h1>

      <div className='flex flex-col gap-3'>
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
