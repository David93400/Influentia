const Post = require('../models/Post');
const fs = require('fs');

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(404).json({ error }));
};

exports.getOnePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(404).json({ error }));
};

exports.createPost = (req, res, next) => {

    const newPost = new Post(req.body);

    newPost
      .save()
      .then(() => res.status(201).json({ message: 'post enregistré' }))
      .catch((error) => res.status(400).json({ error }));

};

exports.updatePost = (req, res, next) => {
  const postObject = req.body;

  Post.updateOne(
    { _id: req.params.id },
    { ...postObject, _id: req.params.id }
  )
    .then(res.status(200).json({ message: 'post modifié' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      
        Post.deleteOne({ _id: req.params.id })
          .then(res.status(200).json({ message: 'post supprimé' }))
          .catch((error) => res.status(400).json({ error }));
      
    })
    .catch((error) => res.status(500).json({ error }));
};


