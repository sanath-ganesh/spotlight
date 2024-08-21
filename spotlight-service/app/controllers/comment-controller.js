import * as CommentService from "../services/comment-service.js";
import { setResponse, setError } from "./response-handler.js";

// Controller function to add a new comment
export const addNewComment = async (request, response) => {
  try {
    const newComment = { ...request.body }; // Extracting new comment data from request body
    const responseFromServices = CommentService.addNewComment(newComment); // Calling service function to add the new comment
    setResponse(response, responseFromServices); // Setting the response
  } catch (err) {
    setError(response, err); // Handling error if any
  }
};

// Controller function to get a comment by its ID
export const getCommentByCommentId = async (request, response) => {
  try {
    const parameters = { ...request.query }; // Extracting parameters from request query
    const responseFromServices = await CommentService.fetchCommentByCommentId(
      parameters._id
    ); // Calling service function to fetch the comment
    setResponse(response, responseFromServices); // Setting the response
  } catch (err) {
    setError(response, err); // Handling error if any
  }
};

// Controller function to get comments by user ID
export const getCommentsByUserId = async (request, response) => {
  try {
    const parameters = { ...request.query }; // Extracting parameters from request query
    const responseFromServices = await CommentService.fetchCommentsByUserId(
      parameters.userId
    ); // Calling service function to fetch comments by user ID
    setResponse(response, responseFromServices); // Setting the response
  } catch (err) {
    setError(response, err); // Handling error if any
  }
};

// Controller function to get all comments
export const getAllComments = async (request, response) => {
  try {
    const responseFromServices = await CommentService.fetchAllComments(); // Calling service function to fetch all comments
    setResponse(response, responseFromServices); // Setting the response
  } catch (err) {
    setError(response, err); // Handling error if any
  }
};

// Controller function to update a comment
export const updateComment = async (request, response) => {
  try {
    const newComment = { ...request.body }; // Extracting updated comment data from request body
    const responseFromServices = CommentService.updateComment(newComment); // Calling service function to update the comment
    setResponse(response, responseFromServices); // Setting the response
  } catch (err) {
    setResponse(response, err); // Handling error if any
  }
};

// Controller function to remove a comment by its ID
export const removeCommentByCommentId = async (request, response) => {
  try {
    const responseFromServices = CommentService.deleteCommentByCommentId(request.query._id); // Calling service function to delete the comment by its ID
    setResponse(response, responseFromServices); // Setting the response
  } catch (err) {
    setError(response, err); // Handling error if any
  }
};

// Controller function to remove all comments by user ID
export const removeAllCommentsByUserId = async (request, response) => {
  try {
    const parameters = { ...request.query }; // Extracting parameters from request query
    const responseFromServices = CommentService.deleteAllCommentByUserId(parameters.userId); // Calling service function to delete all comments by user ID
    setResponse(response, responseFromServices); // Setting the response
  } catch (err) {
    setError(response, err); // Handling error if any
  }
};
