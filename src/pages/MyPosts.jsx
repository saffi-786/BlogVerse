import { useState, useEffect } from "react";
import { Container, PostCard } from "../Components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

function MyPosts() {
  const [posts, setPosts] = useState([]);

  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <h1 className="text-center font-patua text-4xl">My Posts</h1>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            return post.userId === userData.$id ? (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ) : null;
          })}
        </div>
      </Container>
    </div>
  );
}
export default MyPosts;
