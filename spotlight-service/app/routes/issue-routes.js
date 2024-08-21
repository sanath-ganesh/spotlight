import express from 'express';
import * as IssueController from '../controllers/issue-controller.js'; 

const router = express.Router();

// Routes for handling multiple issues
router.route('/')
    // Endpoint for creating a new issue
    .post(IssueController.addNewIssue)
    // Middleware for handling different query parameters
    .get((request, response, next) => {
        // If query parameter 'issueId' is provided, retrieve issue by ID
        if(request.query.issueId){
            return IssueController.getIssueByIssueId(request, response);
        }
        // If query parameter 'userId' is provided, retrieve issues by user ID
        else if(request.query.userId){
            return IssueController.getIssuesByUserId(request, response);
        }
        // If query parameters for searching by keywords, start date, or end date are provided
        else if(request.query.keywords || request.query.startDate || request.query.endDate){
            return IssueController.searchIssuesByKeywords(request, response);
        }
        // If none of the above conditions match, pass the request to the next middleware
        else{
            next();
        }
    })
    // Endpoint for retrieving all issues
    .get(IssueController.getAllIssues)
    // Endpoint for updating an issue
    .put(IssueController.updateIssue)
    // Endpoint for deleting all issues by user ID
    .delete(IssueController.removeAllIssuesByUserId);

// Route for handling individual issue by ID
router.route('/:id')
    // Endpoint for deleting an issue by ID
    .delete(IssueController.removeIssueByIssueId);

export default router;
