import mongoose from "mongoose"

//Model for UserIssueInteraction
const Schema = new mongoose.Schema({
    interactionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Issue'
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

const model = mongoose.model('UserIssueInteractionModel', Schema);
export default model;