import React from 'react';
import './singlePost.css';

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1638913662380-9799def8ffb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="singlepostimage"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAutor">
            Auteur : <b>David</b>
          </span>
          <span className="singlePostDate">Il y a 1h</span>
        </div>
        <p className='singlePostDescription'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dolores, sapiente explicabo dolore mollitia debitis? Perspiciatis
          suscipit dicta non dolores, corrupti pariatur qui distinctio esse,
          officia harum fugiat accusantium quasi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequatur dolores, sapiente explicabo
          dolore mollitia debitis? Perspiciatis suscipit dicta non dolores,
          corrupti pariatur qui distinctio esse, officia harum fugiat
          accusantium quasi. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequatur dolores, sapiente explicabo dolore mollitia debitis?
          Perspiciatis suscipit dicta non dolores, corrupti pariatur qui
          distinctio esse, officia harum fugiat accusantium quasi. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consequatur dolores,
          sapiente explicabo dolore mollitia debitis? Perspiciatis suscipit
          dicta non dolores, corrupti pariatur qui distinctio esse, officia
          harum fugiat accusantium quasi.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
