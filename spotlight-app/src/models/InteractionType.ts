export interface InteractionIssueType {
    _id: string,
    interactionId: string,
    userId: string,
    isUpvoted: boolean,
    isDownvoted: boolean,
}
export interface InteractionCommentType {
    _id: string,
    interactionId: string,
    userId: string,
    isUpvoted: boolean,
    isDownvoted: boolean,
}