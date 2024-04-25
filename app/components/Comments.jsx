const Comments = async ({ promise }) => {
  const comments = await promise;

  return (
    <>
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
    </>
  );
};

export default Comments;
