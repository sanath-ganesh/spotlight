import { InteractionCommentType } from "./InteractionType";

export interface Comment {
	_id: string,
	commentId: number,
	userId: string,
	content: string,
	commentInteractions: InteractionCommentType[],
	subComments: Comment[],
	commentDate: string,	
}