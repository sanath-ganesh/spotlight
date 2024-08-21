import { createSlice } from "@reduxjs/toolkit";
import { Issue } from "../models/IssueModel";
import { AppState } from ".";

export type IssueListType = Issue[];

const initialState: Issue[]  = []

export const IssueSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    fetchNPopulateIssuesListStore: (state, action) => {
      // state.length = 0
      // state.push(action.payload);
      console.log("inside dispatch fn", action.payload);
      action.payload.forEach((issue: Issue) => {
        state.push(issue);
      });
      console.log("finished dispatch", state);
    },
    addNewIssueStore: (state, action) => {
        state.push(action.payload);
    },
    deleteAnIssueStore: (state, action) => {
        state = state.filter((item) => item != action.payload.id);
    }
  },
});

export const getIssueList = () => {
    console.log("inside getter of store", );
     return (state: AppState) => {
      console.log("inside nested getter of store", state.issues);
      return state.issues
    };
}

export const getIssueByIssueId = (issueId: string) => {
  return (state: AppState) => state.issues.find((issue) => issue._id === issueId);
}

export const { fetchNPopulateIssuesListStore, addNewIssueStore, deleteAnIssueStore } = IssueSlice.actions;
export default IssueSlice.reducer;