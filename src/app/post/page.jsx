// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

const getPosts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  } catch (error) {
    throw new Error("Error fetching posts:", error);
    return [];
  }
};
const PostPage = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const posts = await res.json();
  const posts = await getPosts();
  return (
    <div>
      <h2>This is the Post Page: {posts.length}</h2>
    </div>
  );
};

export default PostPage;
