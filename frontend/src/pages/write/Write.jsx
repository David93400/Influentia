import React from 'react';
import './write.css'

const Write = () => {
    return (
      <div className="write">
        <img
          className="writeImg"
          src="https://images.unsplash.com/photo-1638913662380-9799def8ffb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="postimg"
        />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
            <input
              type="text"
              placeholder="Titre"
              className="writeInput"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Rédiger votre article ici.."
              type="text"
              className="writeInput writeText"
            ></textarea>
          </div>
          <button className="writeSubmit">Publier</button>
        </form>
      </div>
    );
};

export default Write;