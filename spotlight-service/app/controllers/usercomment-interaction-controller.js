import * as InteractionService from '../services/usercomment-interaction-service.js';
import { setResponse, setError } from './response-handler.js';

// Controller function to get all user-comment interactions
export async function getAllUserCommentInteractions(request, response) {
  try {
    const responseFromService = await InteractionService.fetchAllUserCommentInteraction();
    setResponse(response, responseFromService);
  } catch (error) {
    setError(response, error);
  }
}

// Controller function to create a new user-comment interaction
export async function createInteraction(request, response) {
  try {
    const { userId, commentId, isUpvoted, isDownvoted } = request.body; // Extract interaction data from request body
    // Check if both isUpvoted and isDownvoted are true
    if (isUpvoted && isDownvoted) {
      return response.status(400).json({
        message: "An interaction cannot be both upvoted and downvoted at the same time."
      });
    }
    // Check if user has already upvoted the comment
    const existingInteraction = await InteractionService.findInteraction(userId, commentId);
    if (existingInteraction && existingInteraction.isUpvoted) {
      return response.status(409).json({
        message: "You have already upvoted this comment."
      });
    }

    const interaction = await InteractionService.createInteraction(userId, commentId, isUpvoted, isDownvoted);
    setResponse(response, interaction);
  } catch (error) {
    setError(response, error);
  }
}

// Controller function to get interactions by comment ID
export async function getInteractionsByComment(request, response) {
  try {
    const { commentId } = request.params; // Extract comment ID from request parameters
    const interactions = await InteractionService.getInteractionsByCommentId(commentId); // Fetch interactions by comment ID
    setResponse(response, interactions);
  } catch (error) {
    setError(response, error);
  }
}

// Controller function to get interactions by user ID
export async function getInteractionsByUser(request, response) {
  try {
    const { userId } = request.params; // Extract user ID from request parameters
    const interactions = await InteractionService.getInteractionsByUserId(userId); // Fetch interactions by user ID
    setResponse(response, interactions);
  } catch (error) {
    setError(response, error);
  }
}

// Controller function to update an interaction
export async function updateInteraction(request, response) {
  try {
    const { interactionId } = request.params; // Extract interaction ID from request parameters
    const { isUpvoted, isDownvoted } = request.body; // Extract updated interaction data from request body
    // Check if both isUpvoted and isDownvoted are true
    if (isUpvoted && isDownvoted) {
      return response.status(400).json({
        message: "An interaction cannot be both upvoted and downvoted at the same time."
      });
    }
    // If both isUpvoted and isDownvoted are false, delete the interaction
    if (!isUpvoted && !isDownvoted) {
      const deletionResult = await InteractionService.deleteInteraction(interactionId);
      if (!deletionResult) {
        return response.status(404).json({ message: "Interaction not found for deletion." });
      }
      return setResponse(response, { message: "Interaction deleted successfully." });
    }
    const updates = { isUpvoted, isDownvoted };
    const updatedInteraction = await InteractionService.updateInteraction(interactionId, updates); // Update interaction
    if (!updatedInteraction) {
      return setResponse(response, { message: 'Interaction not found' });
    }
    setResponse(response, updatedInteraction);
  } catch (error) {
    setError(response, error);
  }
}

// Controller function to delete an interaction
export async function deleteInteraction(request, response) {
  try {
    const { interactionId } = request.params; // Extract interaction ID from request parameters
    const deletedInteraction = await InteractionService.deleteInteraction(interactionId); // Delete interaction
    if (!deletedInteraction) {
      return setResponse(response, { message: 'Interaction not found' });
    }
    setResponse(response, { message: "Interaction deleted successfully" });
  } catch (error) {
    setError(response, error);
  }
}