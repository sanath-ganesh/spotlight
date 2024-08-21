import express from "express";
import * as CommentInteractionController from "../controllers/usercomment-interaction-controller.js";

const router = express.Router();

// Route for getting all user-comment interactions and creating a new interaction
router.route("/")
  .get(CommentInteractionController.getAllUserCommentInteractions)
  .post(CommentInteractionController.createInteraction);

// Route for getting interactions by comment ID
router
  .route("/comment/:commentId")
  .get(CommentInteractionController.getInteractionsByComment);

// Route for getting interactions by user ID
router
  .route("/user/:userId")
  .get(CommentInteractionController.getInteractionsByUser);

// Route for updating and deleting interactions by interaction ID
router
  .route("/:interactionId")
  .put(CommentInteractionController.updateInteraction)
  .delete(CommentInteractionController.deleteInteraction);

export default router;
