import express from 'express';
import * as IssueInteractionController from '../controllers/userissue-interaction.controller.js';

const router = express.Router();

// Route for getting all user-issue interactions and creating a new interaction
router.route('/')
    .get(IssueInteractionController.getAllUserIssueInteractions)
    .post(IssueInteractionController.createInteraction);

// Route for getting interactions by issue ID
router.route('/issue/:issueId')
    .get(IssueInteractionController.getInteractionsByIssue);

// Route for getting interactions by user ID
router.route('/user/:userId')
    .get(IssueInteractionController.getInteractionsByUser);

// Route for updating and deleting interactions by interaction ID
router.route('/:interactionId')
    .put(IssueInteractionController.updateInteraction)
    .delete(IssueInteractionController.deleteInteraction);

export default router;
