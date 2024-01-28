import React, { useState, useEffect } from "react";
import { getPosts } from "../utils/api";
import PostItem from "./PostItem";

const ListPost = ({ show, sort, page }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await getPosts(show, sort, page);
        setPosts(fetchedPosts);
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchData();
  }, [show, sort, page]);

  if (error) {
    return <p>Error fetching data. Please try again later.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-5">
      {!posts && <p>No posts available.</p>}
      {posts && posts.map((post) => <PostItem key={post.id} title={post.title} publishedAt={post.published_at} img={post.medium_image[0]} />)}
    </div>
  );
};

export default ListPost;
