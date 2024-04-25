import getPost from '@/app/lib/getPost';

const PostDetails = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-bold text-3xl'>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
