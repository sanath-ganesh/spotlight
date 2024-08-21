import UserCommentInteraction from '../models/UserCommentInteraction.js';
import User from '../models/user.js';
import Comment from '../models/Comment.js';

/**
 * Creates a new user-comment interaction.
 * @param {string} userId - The ID of the user interacting.
 * @param {string} commentId - The ID of the comment being interacted with.
 * @param {boolean} isUpvoted - Indicates whether the interaction is an upvote.
 * @param {boolean} isDownvoted - Indicates whether the interaction is a downvote.
 * @returns {Promise<object>} A promise that resolves to the created interaction.
 * @throws {Error} If user or comment does not exist.
 */
async function createInteraction(userId, commentId, isUpvoted, isDownvoted) {
  const userExists = await User.exists({ _id: userId });
  const commentExists = await Comment.exists({ _id: commentId });

  if (!userExists || !commentExists) {
    throw new Error("User or comment does not exist.");
  }

  const interaction = new UserCommentInteraction({
    userId,
    commentId,
    isUpvoted,
    isDownvoted
  });

  await interaction.save();
  return interaction;
}

/**
 * Retrieves interactions by comment ID.
 * @param {string} commentId - The ID of the comment.
 * @returns {Promise<object[]>} A promise that resolves to an array of interactions.
 */
async function getInteractionsByCommentId(commentId) {
  return await UserCommentInteraction.find({ commentId });
}

/**
 * Retrieves interactions by user ID.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<object[]>} A promise that resolves to an array of interactions.
 */
async function getInteractionsByUserId(userId) {
  return await UserCommentInteraction.find({ userId });
}

/**
 * Updates an interaction.
 * @param {string} id - The ID of the interaction to update.
 * @param {object} updates - The updates to apply to the interaction.
 * @returns {Promise<object>} A promise that resolves to the updated interaction.
 * @throws {Error} If interaction is not found.
 */
async function updateInteraction(id, updates) {
  const interaction = await UserCommentInteraction.findByIdAndUpdate(id, updates, { new: true });
  if (!interaction) {
    throw new Error("Interaction not found.");
  }
  return interaction;
}

/**
 * Deletes an interaction.
 * @param {string} id - The ID of the interaction to delete.
 * @returns {Promise<object>} A promise that resolves to the deleted interaction.
 * @throws {Error} If interaction is not found.
 */
async function deleteInteraction(id) {
  const result = await UserCommentInteraction.findByIdAndDelete(id);
  if (!result) {
    throw new Error("Interaction not found.");
  }
  return result;
}

/**
 * Finds an interaction by user ID and comment ID.
 * @param {string} userId - The ID of the user.
 * @param {string} commentId - The ID of the comment.
 * @returns {Promise<object|null>} A promise that resolves to the found interaction, or null if not found.
 */
async function findInteraction(userId, commentId) {
  return await UserCommentInteraction.findOne({
    userId: userId,
    commentId: commentId
  });
}

/**
 * Retrieves all user-comment interactions.
 * @returns {Promise<object[]>} A promise that resolves to an array of user-comment interactions.
 */
async function fetchAllUserCommentInteraction() {
  return await UserCommentInteraction.find({}).exec();
}

export {
  createInteraction,getInteractionsByCommentId,getInteractionsByUserId,updateInteraction,
  deleteInteraction,findInteraction,fetchAllUserCommentInteraction
};
