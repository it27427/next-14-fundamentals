import getPost from '@/app/lib/getPost';
import getPostComments from '@/app/lib/getPostComments';

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

  const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-3xl text-indigo-500'>{post.title}</h1>
        <p>{post.body}</p>
      </div>

      <hr className='border-violet-500' />

      <div className='flex flex-col gap-4'>
        <h2 className='font-bold text-2xl text-neutral-700'>Comments</h2>

        <ul className='flex flex-col gap-3'>
          {comments.map((comment) => (
            <li key={comment.id} className='flex flex-col gap-2'>
              <span className='inline-block font-semibold text-violet-500'>
                {comment.name}
              </span>
              <span>{comment.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostDetails;
