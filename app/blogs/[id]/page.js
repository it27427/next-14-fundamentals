const BlogDetails = ({ params, title, description }) => {
  const { id } = params;

  return (
    <>
      <div className='flex flex-col gap-3'>
        <h1 className='text-xl font-bold'>This is blog {id}</h1>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
};

export default BlogDetails;
