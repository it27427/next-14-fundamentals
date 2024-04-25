const getAllPosts = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=10',
      {
        next: {
          revalidate: 10,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllPosts;
