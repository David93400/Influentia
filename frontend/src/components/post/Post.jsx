import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';

const Post = ({post}) => {
  const PF = "http://localhost:3000/images/";
  
  
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="postimg" />}
      <div className="postInfo">
        <Link className='link' to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr /> 
        <span className="postDate">
          {new Date(post.createdAt).toLocaleDateString('fr-FR')}
        </span>
      </div>
      <p className="postDescription">{post.description}</p>
    </div>
  );
};

export default Post;
