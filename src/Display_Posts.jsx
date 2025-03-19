import React from "react";
import "../styles/display_posts.css";
import Posts_Component from "./Posts_Component";

function Display_Posts({ posts, setPosts }) {
  return (
    <div className="Post_Container">
      <div className="Profiles_Container">{/* <Profiles_Component /> */}</div>

      <div className="Posts">
        <Posts_Component posts={posts} setPosts={setPosts} />
      </div>

      <div className="Message_Container"></div>
    </div>
  );
}

export default Display_Posts;
