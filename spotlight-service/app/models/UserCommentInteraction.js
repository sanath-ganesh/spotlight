import mongoose from "mongoose"

//Model for CommentInteraction
const Schema = new mongoose.Schema({
    interactionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Comment'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    isUpvoted: {
        type: Boolean,
        default: false
    },
    isDownvoted: {
        type: Boolean,
        default: false
    }
});

const model = mongoose.model('UserCommentInteractionModel', Schema);
export default model;