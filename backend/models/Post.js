const mongoose = require('mongoose');


const postSchema = mongoose.Schema(
  {
    title: { type: String, unique: true, required: true },

    description: { type: String, required: true },
 
    photo: {type: String, required: false},

    username: { type: String, required: true },

    prenium: { type: Boolean, required: true }
  },
  { timestamps: true }
);


module.exports = mongoose.model('Post', postSchema);
