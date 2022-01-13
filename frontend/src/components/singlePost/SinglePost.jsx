import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './singlePost.css';
import axios from "axios"

const SinglePost = () => { 
  const location = useLocation()
  const path = (location.pathname.split('/')[2]);
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('http://localhost:3000/api/posts/' + path);
      setPost(res.data)
    }
    getPost()
  }, [path])
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            src={post.photo}
            alt="singlepostimage"
            className="singlePostImg"
          />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAutor">
            Auteur : <b>{post.username}</b>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toLocaleDateString('fr-FR')}
          </span>
        </div>
        <p className="singlePostDescription">
          {post.description}
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
