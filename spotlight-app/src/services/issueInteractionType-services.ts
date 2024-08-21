import { InteractionIssueType } from "../models/InteractionType";
import { InteractionCommentType } from "../models/InteractionType";

import { add, remove, search, update } from "./api-services";

export const fetchAllIssueInteractions = async () => {
  return search<InteractionIssueType>("issueinteraction", {});
};

export const addNewIssueInteractions = async (interactionIssueTypeToAdd: InteractionIssueType) => {
  return add("issueinteraction", interactionIssueTypeToAdd);2
};

export const getIssueInteractionsByIssueInteractionsId = async (interactionIssueId: string) => {
  return search<InteractionIssueType>("issueinteraction", { _id: interactionIssueId });
};

export const updateAnIssueInteractions = async (updateInteractionIssue: InteractionIssueType) => {
    return update('issueinteraction', updateInteractionIssue);
}

export const removeIssueInteractionsByIssueInteractionsId = async (interactionIssueId: string) => {
    return remove('issueinteraction', {_id: interactionIssueId});
}


// Comment

export const fetchAllCommentInteractions = async () => {
    return search<InteractionCommentType>("commentinteraction", {});
  };
  
  export const addNewCommentInteractions = async (interactionCommentTypeToAdd: InteractionCommentType) => {
    return add("commentinteraction", interactionCommentTypeToAdd);
  };
  
  export const getCommentInteractionsByCommentInteractionsId = async (interactionCommentId: string) => {
    return search<InteractionCommentType>("commentinteraction", { _id: interactionCommentId });
  };
  
  export const updateAnCommentInteractions = async (updateinteractionComment: InteractionIssueType) => {
      return update('commentinteraction', updateinteractionComment);
  }
  
  export const removeCommentInteractionsByCommentInteractionsId = async (interactionCommentId: string) => {
      return remove('commentinteraction', {_id: interactionCommentId});
  }