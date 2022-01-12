import React from 'react';
import './post.css';

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1638913662380-9799def8ffb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt="postimg"
      />
      <div className="postInfo">
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </span>
        <hr />
        <span className="postDate">Il y a 1h</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        debitis minus deleniti unde quam rem placeat, maiores beatae, soluta
        architecto inventore neque libero molestiae accusamus odit error maxime
        sit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        debitis minus deleniti unde quam rem placeat, maiores beatae, soluta
        architecto inventore neque libero molestiae accusamus odit error maxime
        sit!
      </p>
    </div>
  );
};

export default Post;
