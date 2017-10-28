const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      lowercase: true,
      enum: ["male","female","unicorn"]
    },
    email: {
      type: String,
      lowercase: true
      //match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    }
});

module.exports = mongoose.model("Person", personSchema) //capitalise and singular
