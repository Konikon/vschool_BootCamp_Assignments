const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const legoSchema = new Schema({
  name: {
        type: String,
        required: true
    },
  pieces: {
        type: Number,
        required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
});

module.exports = mongoose.model("Lego", legoSchema);
