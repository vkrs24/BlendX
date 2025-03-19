import React from "react";
import { useState } from "react";
import { posts_data } from "../data/App_Data.jsx";
import Header from "./Header_Component.jsx";
import Display_Posts from "./Display_Posts.jsx";

function Home() {
  const [posts, setPosts] = useState(posts_data);

  return (
    <>
      <Header />
      <Display_Posts posts={posts} setPosts={setPosts} />
    </>
  );
}

export default Home;
