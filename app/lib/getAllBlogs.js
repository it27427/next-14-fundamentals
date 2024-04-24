const getAllBlogs = async () => {
  try {
    const res = await fetch(
      'https://newsapi.org/v2/everything?q=apple&from=2024-04-23&to=2024-04-23&sortBy=popularity&apiKey=237deac863ac48918c9193e99bdad82d'
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default getAllBlogs;
