import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./comments-service";


export const createCommentThunk = createAsyncThunk(
    'comments/createComment',
    async (comment) => {
        const newComment = await service.createComment(comment)
        return newComment
    })


export const findCommentsThunk = createAsyncThunk(
    "comments/findComments",
    async () => await service.findComments()
);

