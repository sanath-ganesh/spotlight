import IssueModel from "../models/Issue.js";

/**
 * Adds a new issue to the database.
 * @param {object} newIssueToAdd - The new issue object to add.
 * @returns {Promise<object>} A promise that resolves to the newly added issue.
 */
export const addNewIssue = async (newIssueToAdd) => {
  delete newIssueToAdd._id; // Remove _id field to allow MongoDB to generate a new ID
  const newIssue = new IssueModel(newIssueToAdd);
  return await newIssue.save();
};

/**
 * Fetches an issue by its ID.
 * @param {string} issueId - The ID of the issue to fetch.
 * @returns {Promise<object|null>} A promise that resolves to the issue if found, or null if not found.
 */
export const fetchIssueByIssueId = async (issueId) => {
  const issueIdToFind = issueId;
  return await IssueModel.findOne({ _id: issueIdToFind }).exec();
};

/**
 * Fetches all issues associated with a specific user ID.
 * @param {string} userId - The ID of the user whose issues to fetch.
 * @returns {Promise<object[]>} A promise that resolves to an array of issues belonging to the specified user.
 */
export const fetchIssuesByUserId = async (userId) => {
  const userIdIssuesToFind = userId;
  return await IssueModel.find({ userId: userIdIssuesToFind }).exec();
};

/**
 * Fetches all issues from the database.
 * @returns {Promise<object[]>} A promise that resolves to an array containing all issues in the database.
 */
export const fetchAllIssues = async () => {
  return await IssueModel.find({}).exec();
};

/**
 * Fetches filtered issues based on specified parameters.
 * @param {object} params - Parameters for filtering issues (keywords, startDate, endDate).
 * @returns {Promise<object[]>} A promise that resolves to an array of filtered issues.
 */
export const fetchfilteredIssues = async (params = {}) => {
  const keyword = params.keywords;
  const lowerRange = params.startDate;
  const upperRange = params.endDate;
  let filter = {};

  if (keyword) {
    const keywordRegex = new RegExp(keyword, "i");
    filter = {
      $or: [
        { issueTitle: { $regex: keywordRegex } },
        { issueDescription: { $regex: keywordRegex } },
        { issueCategory: { $regex: keywordRegex } },
        { issueLocation: { $regex: keywordRegex } },
      ],
    };
  }

  if (lowerRange && upperRange) {
    filter["issueDate"] = {
      $gte: lowerRange,
      $lte: upperRange,
    };
  } else if (lowerRange) {
    filter["issueDate"] = {
      $gte: lowerRange,
    };
  } else if (upperRange) {
    filter["issueDate"] = {
      $lte: upperRange,
    };
  }

  return await IssueModel.find(filter).exec();
};

/**
 * Updates an issue in the database.
 * @param {object} issueToUpdate - The updated issue object.
 * @returns {Promise<object|null>} A promise that resolves to the updated issue if found, or null if not found.
 */
export const updateIssue = async (issueToUpdate) => {
  const issueId = { _id: issueToUpdate._id };
  const updateIssue = new IssueModel(issueToUpdate);
  return await IssueModel.findOneAndUpdate(issueId, updateIssue);
};

/**
 * Deletes an issue by its ID.
 * @param {string} issueId - The ID of the issue to delete.
 * @returns {Promise<object|null>} A promise that resolves to the deleted issue if found, or null if not found.
 */
export const deleteIssueByIssueId = async (issueId) => {
  const issueIdToDelete = issueId;
  return await IssueModel.findOneAndDelete({ _id: issueIdToDelete });
};

/**
 * Deletes all issues associated with a specific user ID.
 * @param {string} userId - The ID of the user whose issues to delete.
 * @returns {Promise<object>} A promise that resolves to the result of the deletion operation.
 */
export const deleteAllIssueByUserId = async (userId) => {
  const userIdIssuesToDelete = userId;
  return await IssueModel.deleteMany({ userId: userIdIssuesToDelete }).exec();
};
