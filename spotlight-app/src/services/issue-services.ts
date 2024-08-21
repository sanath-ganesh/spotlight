import { Issue } from "../models/IssueModel";
import { add, remove, search, update } from "./api-services";

export const fetchAllIssues = async () => {
  return search<Issue>("issue", {});
};

export const searchInIssues = async (lkeywords: string | undefined, startDate: string | undefined, endDate: string | undefined) => {
    return search<Issue>('issue', {keywords: lkeywords, startDate, endDate})
}

export const addNewIssue = async (issueToAdd: Issue) => {
  return add("issue", issueToAdd);
};

export const getIssueByIssueId = async (issueId: string) => {
  return search<Issue>("issue", { _id: issueId });
};

export const getIssuesByUserId = async (lUserId: string) => {
  return search<Issue>("issue", {userId: lUserId});
};

export const updateAnIssue = async (updateIssue: Issue) => {
    return update('issue', updateIssue);
}

export const removeIssueByIssueId = async (issueId: string) => {
    return remove('issue', {_id: issueId});
}

export const removeIssuesByUserId = async (luserId: string) => {
    return remove('issue', {userId: luserId})
}