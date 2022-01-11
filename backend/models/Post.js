const mongoose = require('mongoose');


const postSchema = mongoose.Schema(
  {
    title: { type: String, unique: true, required: true },

    description: { type: String, required: true },

    username: { type: String, required: true },

    prenium: { type: Boolean, required: true }
  },
  { timestamp: true }
);


module.exports = mongoose.model('Post', postSchema);
