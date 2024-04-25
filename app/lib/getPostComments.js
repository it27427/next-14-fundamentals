const getPostComments = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getPostComments;
