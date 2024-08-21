import UserModel from '../models/user.js';

/**
 * Searches for a user by username and password.
 * @param {object} credentials - The username and password for login.
 * @returns {Promise<object|null>} A promise that resolves to the user if found, or null if not found.
 * @throws {Error} If username or password is missing.
 */
export const search = async ({ username, password }) => {
    if (!username || !password) {
        throw new Error("Username and password are required for login.");
    }
    const user = await UserModel.findOne({ username, password }).exec();
    return user ? user : null;
};

/**
 * Saves a new user to the database.
 * @param {object} user - The user object to save.
 * @returns {Promise<object>} A promise that resolves to the saved user.
 */
export const save = async (user) => {
    const User = new UserModel(user);
    return await User.save();
};

/**
 * Retrieves all users from the database.
 * @param {object} params - Optional parameters to filter users.
 * @returns {Promise<object[]>} A promise that resolves to an array of users.
 */
export const getAllUsers = async (params = {}) => {
    const Users = await UserModel.find(params).exec();
    return Users;
};

/**
 * Retrieves a user by ID from the database.
 * @param {string} id - The ID of the user to retrieve.
 * @returns {Promise<object|null>} A promise that resolves to the user if found, or null if not found.
 */
export const getById = async (id) => {
    const User = await UserModel.findById(id).exec();
    return User;
};

/**
 * Deletes a user by ID from the database.
 * @param {string} id - The ID of the user to delete.
 * @returns {Promise<object|null>} A promise that resolves to the deleted user if found, or null if not found.
 */
export const deleteUser = async (id) => {
    const user = await UserModel.findOneAndDelete({ _id: id }).exec();
    return user;
};

/**
 * Updates a user by ID in the database.
 * @param {string} id - The ID of the user to update.
 * @param {object} data - The updated data for the user.
 * @returns {Promise<object|null>} A promise that resolves to the updated user if found, or null if not found.
 */
export const updateUser = async (id, data) => {
    const updatedUser = await UserModel.findOneAndUpdate({ _id: id }, data, { new: true }).exec();
    return updatedUser;
};
