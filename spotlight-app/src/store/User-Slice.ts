import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/User";
import { AppState } from ".";

interface UserState {
    currentUser: User | null;
    isLoading: boolean;
    error: string | null;
}

export const initialState: UserState = {
    currentUser: null,
    isLoading: false,
    error: null
};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.currentUser = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        clearUser(state) {
            state.currentUser = null;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        }
    }
});

export const getAllUsersList = () => {
    return (state: AppState) => state;
}

export const { setUser, clearUser, setLoading, setError } = UserSlice.actions;
export default UserSlice.reducer;
