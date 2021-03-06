const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },

    email: { type: String, unique: true, required: true },

    password: { type: String, required: true },

    isAdmin: { type: Boolean, default: false },
  },
  { timestamp: true }
);

userSchema.plugin(uniqueValidator);
 
module.exports = mongoose.model('User', userSchema);
