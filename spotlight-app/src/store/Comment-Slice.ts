import { createSlice } from "@reduxjs/toolkit";
import { Comment } from "../models/CommentModel";
import { AppState } from ".";

export type CommentListType = Comment[];

const initialState: Comment[]  = []

export const CommentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addNewCommentStore: (state, actions) => {
        state.push(actions.payload);
    },
    deleteAnCommentStore: (state, actions) => {
        state = state.filter((item) => item != actions.payload.id);
    }
  },
});

export const getIssueList = () => {
     return (state: AppState) => state;
}

export const {  addNewCommentStore, deleteAnCommentStore } = CommentSlice.actions;
export default CommentSlice.reducer;