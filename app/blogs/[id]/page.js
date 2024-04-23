const BlogDetails = ({ params }) => {
  const { id } = params;

  return (
    <>
      <h1>Blog Details</h1>
      <h4>Blog Number is {id}</h4>
    </>
  );
};

export default BlogDetails;
