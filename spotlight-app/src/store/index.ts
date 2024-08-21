import {configureStore} from "@reduxjs/toolkit";
import {IssueSlice} from '../store/Issue-Slice';
import { CommentSlice } from "./Comment-Slice";

export const store = configureStore({
    reducer: {
        [IssueSlice.name] : IssueSlice.reducer,
        [CommentSlice.name] : CommentSlice.reducer
    },
});

export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
