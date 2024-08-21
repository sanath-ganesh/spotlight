import { request } from 'express';
import * as UserService from '../services/user-service.js';
import { setResponse, setError } from './response-handler.js';

// Controller function to search for a user by username and password
export const search = async (request, response) => {
    try {
        const { username, password } = request.body; // Extract username and password from request body
        if (!username || !password) {
            throw new Error("Username and password must be provided."); // Throw error if username or password is missing
        }
        const user = await UserService.search({ username, password }); // Call service function to search for user
        if (user) {
            setResponse(response, { success: true, user }); // Send success response if user is found
        } else {
            response.status(404).json({ success: false, message: "User not found." }); // Send error response if user is not found
        }
    } catch (error) {
        setError(response, error); // Handle error if any
    }
};

// Controller function to create a new user
export const post = async (request, response) => {
    try {
        const params = { ...request.body }; // Extract user data from request body
        const User = await UserService.save(params); // Call service function to save the new user
        setResponse(response, User); // Set response with the saved user data
    }
    catch (error) {
        setError(response, error); // Handle error if any
    }
};

// Controller function to get all users
export const getAllUsers = async (request, response) => {
    try {
        const queryParams = request.query; // Extract query parameters from request
        const users = await UserService.getAllUsers(queryParams); // Call service function to fetch all users
        setResponse(response, users); // Set response with the fetched users data
    } catch (error) {
        setError(response, error); // Handle error if any
    }
};

// Controller function to get a user by ID
export const getUserById = async (request, response) => {
    try {
        const userId = request.params.id; // Extract user ID from request parameters
        const user = await UserService.getById(userId); // Call service function to fetch user by ID
        if (user) {
            setResponse(response, user); // Set response with the fetched user data
        } else {
            response.status(404).json({ message: "User not found." }); // Send error response if user is not found
        }
    } catch (error) {
        console.error("Error fetching user:", error); // Log detailed error
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            response.status(400).json({ message: "Invalid user ID format." }); // Send error response for invalid ObjectId format
        } else {
            setError(response, error); // Handle other types of errors
        }
    }
};

// Controller function to delete a user by ID
export const deleteUser = async (request, response) => {
    try {
        const User = await UserService.deleteUser(request.params.id); // Call service function to delete user by ID
        if (!User) {
            return setResponse(response, { message: 'User not found' }); // Send response if user is not found
        }
        return setResponse(response, { message: 'User removed successfully' }); // Send response if user is deleted successfully
    }
    catch (error) {
        setError(response, error); // Handle error if any
    }
};

// Controller function to update a user by ID
export const updateUser = async (request, response) => {
    try {
        const newData = { ...request.body }; // Extract updated user data from request body
        const User = await UserService.updateUser(request.params.id, newData); // Call service function to update user by ID
        setResponse(response, User); // Set response with the updated user data
    } catch (error) {
        setError(response, error); // Handle error if any
    }
};
