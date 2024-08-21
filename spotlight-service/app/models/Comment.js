import mongoose from "mongoose";


// Tracks the number of interactions per Issue
const InteractionType = {
  interactionId: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  upvote: {
    type: Number,
    required: true,
  },
  downvote: {
    type: Number,
    required: true,
  },
};

//Model for comments
const Schema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  commentId: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  commentInteractions: {
    type: Array,
    required: true,
  },
  subComments: {
    type: Array,
    requried: true,
  },
  commentDate: {
    type: String,
    required: true,
  },
});


const model = mongoose.model('CommentModel', Schema);
export default model;