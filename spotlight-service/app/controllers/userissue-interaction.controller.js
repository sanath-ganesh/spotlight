import * as InteractionService from '../services/userissue-interaction-service.js';
import { setResponse, setError } from './response-handler.js';

// Controller function to get all user-issue interactions
export async function getAllUserIssueInteractions(request, response) {
    try {
        const responseFromService = await InteractionService.fetchAllUserIssueInteraction(); // Fetch all interactions
        setResponse(response, responseFromService); // Set response with fetched interactions
    } catch (error) {
        setError(response, error); // Handle error
    }
}

// Controller function to create a new user-issue interaction
export async function createInteraction(request, response) {
    try {
        const { userId, issueId, isUpvoted, isDownvoted } = request.body; // Extract interaction data from request body
        // Check if both isUpvoted and isDownvoted are true
        if (isUpvoted && isDownvoted) {
            return response.status(400).json({
                message: "An interaction cannot be both upvoted and downvoted at the same time."
            });
        }
        // Check if user has already upvoted the issue
        const existingInteraction = await InteractionService.findInteraction(userId, issueId);
        if (existingInteraction && existingInteraction.isUpvoted) {
            return response.status(409).json({
                message: "You have already upvoted this issue."
            });
        }
        const interaction = await InteractionService.createInteraction(userId, issueId, isUpvoted, isDownvoted); // Create new interaction
        setResponse(response, interaction); // Set response with created interaction
    } catch (error) {
        setError(response, error); // Handle error
    }
}

// Controller function to get interactions by issue ID
export async function getInteractionsByIssue(request, response) {
    try {
        const { issueId } = request.params; // Extract issue ID from request parameters
        const interactions = await InteractionService.getInteractionsByIssueId(issueId); // Fetch interactions by issue ID
        setResponse(response, interactions); // Set response with fetched interactions
    } catch (error) {
        setError(response, error); // Handle error
    }
}

// Controller function to get interactions by user ID
export async function getInteractionsByUser(request, response) {
    try {
        const { userId } = request.params; // Extract user ID from request parameters
        const interactions = await InteractionService.getInteractionsByUserId(userId); // Fetch interactions by user ID
        setResponse(response, interactions); // Set response with fetched interactions
    } catch (error) {
        setError(response, error); // Handle error
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
        if (!isUpvoted && !isDownvoted) {
            const deletionResult = await InteractionService.deleteInteraction(interactionId); // Delete interaction if both flags are false
            if (!deletionResult) {
                return response.status(404).json({ message: "Interaction not found for deletion." });
            }
            return setResponse(response, { message: "Interaction deleted successfully." }); // Set response for successful deletion
        }
        const updates = { isUpvoted, isDownvoted };
        const updatedInteraction = await InteractionService.updateInteraction(interactionId, updates); // Update interaction
        if (!updatedInteraction) {
            return setResponse(response, { message: 'Interaction not found' });
        }
        setResponse(response, updatedInteraction); // Set response with updated interaction
    } catch (error) {
        setError(response, error); // Handle error
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
        setResponse(response, { message: "Interaction deleted successfully" }); // Set response for successful deletion
    } catch (error) {
        setError(response, error); // Handle error
    }
}
