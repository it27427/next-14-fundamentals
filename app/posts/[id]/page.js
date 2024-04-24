const PostDetails = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <h1 className='font-bold text-3xl'>Post number is {id}</h1>
    </div>
  );
};

export default PostDetails;
