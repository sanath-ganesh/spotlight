import express from 'express';
import * as CommentController from '../controllers/comment-controller.js';

const router = express.Router();

// Define routes for handling comment operations
router.route('/')
    // Handle POST requests to add a new comment
    .post(CommentController.addNewComment)
    // Handle GET requests based on query parameters
    .get((request, response, next) => {
        // If query parameter _id is present, fetch comment by comment ID
        if (request.query._id) {
            return CommentController.getCommentByCommentId(request, response);
        }
        // If query parameter userId is present, fetch comments by user ID
        else if (request.query.userId) {
            return CommentController.getCommentsByUserId(request, response);
        }
        // If no specific query parameters are present, proceed to the next middleware
        else {
            next();
        }
    })
    // Handle GET requests to fetch all comments
    .get(CommentController.getAllComments)
    // Handle PUT requests to update a comment
    .put(CommentController.updateComment)
    // Handle DELETE requests based on query parameters
    .delete((request, response, next) => {
        // If query parameter _id is present, remove comment by comment ID
        if (request.query._id) {
            return CommentController.removeCommentByCommentId(request, response);
        }
        // If query parameter userId is present, remove all comments by user ID
        else if (request.query.userId) {
            return CommentController.removeAllCommentsByUserId(request, response);
        }
        // If no specific query parameters are present, proceed to the next middleware
        else {
            next();
        }
    });

export default router;
