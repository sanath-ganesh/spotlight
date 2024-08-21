import Model from '../models/index.js';

/**
 * Adds a new comment to the database.
 * @param {object} newCommentToAdd - The new comment object to add.
 * @returns {Promise<object>} A promise that resolves to the newly added comment.
 */
export const addNewComment = async (newCommentToAdd) => {
    const newComment = new Model.CommentModel(newCommentToAdd);
    return await newComment.save();
}

/**
 * Fetches a comment by its comment ID.
 * @param {string} commentId - The ID of the comment to fetch.
 * @returns {Promise<object[]>} A promise that resolves to an array of comments matching the provided ID.
 */
export const fetchCommentByCommentId = async (commentId) => {
    return await Model.CommentModel.find({_id: commentId}).exec();
}

/**
 * Fetches all comments associated with a specific user ID.
 * @param {string} userId - The ID of the user whose comments to fetch.
 * @returns {Promise<object[]>} A promise that resolves to an array of comments belonging to the specified user.
 */
export const fetchCommentsByUserId = async (userId) => {
    const userIdCommentToFind = userId;
    return await Model.CommentModel.find({userId: userIdCommentToFind}).exec();
}

/**
 * Fetches all comments from the database.
 * @returns {Promise<object[]>} A promise that resolves to an array containing all comments in the database.
 */
export const fetchAllComments = async () => {
    return await Model.CommentModel.find({}).exec();
}

/**
 * Updates a comment in the database.
 * @param {object[]} commentToUpdate - An array containing the comment object to update.
 * @returns {Promise<object>} A promise that resolves to the updated comment.
 */
export const updateComment = async (commentToUpdate) => {
    return await Model.CommentModel.findOneAndUpdate({_id: commentToUpdate['0']._id}, commentToUpdate['0']);
}

/**
 * Deletes a comment from the database by its comment ID.
 * @param {string} commentId - The ID of the comment to delete.
 * @returns {Promise<object|null>} A promise that resolves to the deleted comment, or null if not found.
 */
export const deleteCommentByCommentId = async (commentId) => {
    return await Model.CommentModel.findOneAndDelete({_id: commentId}).exec();
}

/**
 * Deletes all comments associated with a specific user ID.
 * @param {string} userId - The ID of the user whose comments to delete.
 * @returns {Promise<object>} A promise that resolves to the result of the deletion operation.
 */
export const deleteAllCommentByUserId = async (userId) => {
    return await Model.CommentModel.deleteMany({userId: userId}).exec();
}