import {add, remove, search} from './api-services';
import { Comment } from '../models/CommentModel';

export const getAllComments = async () => {
    return search<Comment>('comment', {});
}

export const getCommentByCommentId = async (id: string) => {
    return search<Comment>(`comment`, {_id: id});
}

export const getCommentByUserId = async (id: string) => {
    return search<Comment>(`comment`, {userId: id});
}

export const addComment = async (comment: Comment) => {
    return add(`comment`, comment);
}

export const updateComment = async (comment: Comment) => {
    return add(`comment`, comment);
}

export const removeCommentByCommentId = async (id: string) => {
    return remove(`comment`, {_id: id});
}

export const removeCommentByUserId = async (id: number) => {
    return remove(`comment`, {userId: id.toString()});
}