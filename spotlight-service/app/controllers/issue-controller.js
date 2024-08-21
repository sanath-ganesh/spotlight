import * as IssueServices from "../services/issue-service.js";
import { setResponse, setError } from "./response-handler.js";

// Controller function to add a new issue
export const addNewIssue = async (request, response) => {
  try {
    const newIssue = { ...request.body }; // Extracting new issue data from request body
    console.log("newIssue: ", newIssue); // Logging the new issue data
    const responseFromServices = await IssueServices.addNewIssue(newIssue); // Calling service function to add the new issue
    setResponse(response, responseFromServices); // Setting the response
  } catch (err) {
    setError(response, err); // Handling error if any
  }
};

// Controller function to get an issue by its ID
export const getIssueByIssueId = async (request, response) => {
  try {
    const parameters = { ...request.query }; // Extracting parameters from request query
    const responseFromServices = await IssueServices.fetchIssueByIssueId(
      parameters.issueId
    ); // Calling service function to fetch the issue by its ID
    setResponse(response, responseFromServices); // Setting the response
  } catch (err) {
    setError(response, err); // Handling error if any
  }
};

// Controller function to get issues by user ID
export const getIssuesByUserId = async (request, response) => {
  try {
    const parameters = { ...request.query }; // Extracting parameters from request query
    const responseFromServices = await IssueServices.fetchIssuesByUserId(
      parameters.userId
    ); // Calling service function to fetch issues by user ID
    setResponse(response, responseFromServices); // Setting the response
  } catch (err) {
    setError(response, err); // Handling error if any
  }
};

// Controller function to get all issues
export const getAllIssues = async (request, response) => {
  try {
    const responseFromServices = await IssueServices.fetchAllIssues(); // Calling service function to fetch all issues
    setResponse(response, responseFromServices); // Setting the response
  } catch (err) {
    setError(response, err); // Handling error if any
  }
};

// Controller function to update an issue
export const updateIssue = async (request, response) => {
  try {
    const newIssue = { ...request.body }; // Extracting updated issue data from request body
    const responseFromServices = await IssueServices.updateIssue(newIssue); // Calling service function to update the issue
    setResponse(response, responseFromServices); // Setting the response
  } catch (err) {
    setResponse(response, err); // Handling error if any
  }
};

// Controller function to remove an issue by its ID
export const removeIssueByIssueId = async (request, response) => {
  try {
    const issueId = request.params.id; // Extracting issue ID from request parameters
    const responseFromServices = await IssueServices.deleteIssueByIssueId(issueId); // Calling service function to delete the issue by its ID
    setResponse(response, responseFromServices); // Setting the response
  } catch (err) {
    setError(response, err); // Handling error if any
  }
};

// Controller function to remove all issues by user ID
export const removeAllIssuesByUserId = async (request, response) => {
  try {
    const parameters = { ...request.query }; // Extracting parameters from request query
    const responseFromServices = await IssueServices.deleteAllIssueByUserId(parameters.userId); // Calling service function to delete all issues by user ID
    setResponse(response, responseFromServices); // Setting the response
  } catch (err) {
    setError(response, err); // Handling error if any
  }
};

// Controller function to search issues by keywords
export const searchIssuesByKeywords = async (request, response) => {
  try{
    const parameters = {...request.query}; // Extracting parameters from request query
    const responseFromServices = await IssueServices.fetchfilteredIssues(parameters); // Calling service function to search issues by keywords
    setResponse(response, responseFromServices); // Setting the response
  }catch(error){
    setError(response, error); // Handling error if any
  }
};
