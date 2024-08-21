// export interface Issue{
//     id: string,
//     issueTitle: string,
//     issueCategory: string[],
//     issueLocation: string,
//     issueDescription: string
//     issueDate: Date,
//     issueComments: Comment[],
//     issueInteractions: InteractionType
// }
import mongoose from "mongoose";


// Tracks the number of interactions per Issue
const InteractionType = {
  interactionId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
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

//Mongoose Schema for the Issue
const Schema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  userId: {
    type: String,
    required: true
  },
  issueId: {
    type: String,
    required: false,
  },
  issueTitle: {
    type: String,
    required: true,
  },
  issueCategory: {
    type: Array,
    required: true,
  },
  issueLocation: {
    type: String,
    required: true,
  },
  issueDescription: {
    type: String,
    requried: true,
  },
  // Change issue Date type to Date when ready.
  issueDate: {
    type: String,
    required: true,
  },
  issueComments: {
    type: Array,
    required: true,
  },
  issueInteractions: {
    type: Array,
    required: true,
  },
  isResolved:{
    type: Boolean,
    required: true
  }
});


const model = mongoose.model('IssueModel', Schema);
export default model;

// How are we going to manage the vote allowance once per user?
