import UserIssueInteraction from '../models/UserIssueInteraction.js';
import User from '../models/user.js';
import Issue from '../models/Issue.js';

/**
 * Creates a new user-issue interaction.
 * @param {string} userId - The ID of the user interacting.
 * @param {string} issueId - The ID of the issue being interacted with.
 * @param {boolean} isUpvoted - Indicates whether the interaction is an upvote.
 * @param {boolean} isDownvoted - Indicates whether the interaction is a downvote.
 * @returns {Promise<object>} A promise that resolves to the created interaction.
 * @throws {Error} If user or issue does not exist.
 */
async function createInteraction(userId, issueId, isUpvoted, isDownvoted) {
    const userExists = await User.exists({ _id: userId });
    const issueExists = await Issue.exists({ _id: issueId });

    if (!userExists || !issueExists) {
        throw new Error("User or issue does not exist.");
    }

    const interaction = new UserIssueInteraction({
        userId,
        issueId,
        isUpvoted,
        isDownvoted
    });

    await interaction.save();
    return interaction;
}

/**
 * Retrieves interactions by issue ID.
 * @param {string} issueId - The ID of the issue.
 * @returns {Promise<object[]>} A promise that resolves to an array of interactions.
 */
async function getInteractionsByIssueId(issueId) {
    return await UserIssueInteraction.find({ issueId });
}

/**
 * Retrieves interactions by user ID.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<object[]>} A promise that resolves to an array of interactions.
 */
async function getInteractionsByUserId(userId) {
    return await UserIssueInteraction.find({ userId });
}

/**
 * Updates an interaction.
 * @param {string} id - The ID of the interaction to update.
 * @param {object} updates - The updates to apply to the interaction.
 * @returns {Promise<object>} A promise that resolves to the updated interaction.
 */
async function updateInteraction(id, updates) {
    const interaction = await UserIssueInteraction.findByIdAndUpdate(id, updates, { new: true });
    return interaction;
}

/**
 * Deletes an interaction.
 * @param {string} id - The ID of the interaction to delete.
 * @returns {Promise<object>} A promise that resolves to the deleted interaction.
 */
async function deleteInteraction(id) {
    const result = await UserIssueInteraction.findByIdAndDelete(id);
    return result;
}

/**
 * Finds an interaction by user ID and issue ID.
 * @param {string} userId - The ID of the user.
 * @param {string} issueId - The ID of the issue.
 * @returns {Promise<object|null>} A promise that resolves to the found interaction, or null if not found.
 */
async function findInteraction(userId, issueId) {
    return await UserIssueInteraction.findOne({
        userId: userId,
        issueId: issueId
    });
}

/**
 * Retrieves all user-issue interactions.
 * @returns {Promise<object[]>} A promise that resolves to an array of user-issue interactions.
 */
async function fetchAllUserIssueInteraction() {
    return await UserIssueInteraction.find({}).exec();
}

export {
    createInteraction,
    getInteractionsByIssueId,
    getInteractionsByUserId,
    updateInteraction,
    deleteInteraction,
    findInteraction,
    fetchAllUserIssueInteraction
};
