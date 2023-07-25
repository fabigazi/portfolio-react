import { createSlice } from "@reduxjs/toolkit";
import { createCommentThunk,  findCommentsThunk } from "../services/comments-thunks";

const initialState = {
    comments: [],
    loading: false
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: {

        [createCommentThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.comments.push(payload)
            },
        [findCommentsThunk.pending]:
            (state) => {
                state.loading = true
                state.comments = []
            },
        [findCommentsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.comments = payload
            },
        [findCommentsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    },
    reducers: {}
});

export default commentsSlice.reducer;