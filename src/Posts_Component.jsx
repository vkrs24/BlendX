import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/display_posts.css";
import profile from "../public/profile.jpg";
import spy from "../public/spy.jpg";

function Posts_Component({ posts, setPosts }) {
  const [heartClickedId, setHeartClickedId] = useState(null);

  function handleHeartCount(user_id) {
    setHeartClickedId(user_id);

    const updatedPosts = posts.map((post) =>
      post.user_id === user_id
        ? { ...post, post_heart: post.post_heart + 1 }
        : post
    );

    setPosts(updatedPosts);

    setTimeout(() => setHeartClickedId(null), 1500);
  }

  return (
    <>
      {posts.length > 0 &&
        posts.map((post, index) => (
          <div className="Post_Box" key={index}>
            <div className="Post_Top_Content">
              <div className="User_Profile">
                <Link to={`/userprofile${post.user_id}`}>
                  <img src={profile} alt="profile" />
                </Link>
              </div>
              <div className="User_Name">
                <p>{post.user_name}</p>
              </div>
            </div>
            <div className="Post_Middle_Content">
              <div className="Post_Image">
                <Link to={`/seepost${post.user_id}`}>
                  <img src={spy} alt="image" />
                </Link>
              </div>
            </div>
            <div className="Post_Bottom_Content">
              <div className="Post_Bottom_Content_Left_Section">
                <p
                  onClick={() => handleHeartCount(post.user_id)}
                  className={`Post_Heart_Count ${
                    heartClickedId === post.user_id ? "clicked" : ""
                  }`}
                >
                  {post.post_heart} ❤️
                </p>
              </div>
              <div className="Post_Bottom_Content_Right_Section">
                <p className="Post_Title">{post.post_title}</p>
                <p className="Post_Date">{post.post_date}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Posts_Component;
