import Comments from '@/app/components/Comments';
import getAllPosts from '@/app/lib/getAllPosts';
import getPost from '@/app/lib/getPost';
import getPostComments from '@/app/lib/getPostComments';
import { Suspense } from 'react';

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

const PostDetails = async ({ params }) => {
  const { id } = params;
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);

  const post = await postPromise;

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-3xl text-indigo-500'>{post.title}</h1>
        <p>{post.body}</p>
      </div>

      <hr className='border-violet-500' />

      <Suspense fallback='<h3>Loading Comments...</h3>'>
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
};

export default PostDetails;

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
