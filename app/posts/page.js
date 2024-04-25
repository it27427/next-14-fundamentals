import Link from 'next/link';
import getAllPosts from '../lib/getAllPosts';

const PostPage = async () => {
  const posts = await getAllPosts();

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-3xl'>All Posts</h1>

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

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
