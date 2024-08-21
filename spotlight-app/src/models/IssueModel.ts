import { Comment } from './CommentModel.ts';
import { InteractionIssueType } from './InteractionType.ts';

export interface Issue {
    _id: string,
    userId: string,
    issueTitle: string,
    issueCategory: string[],
    issueLocation: string,
    issueDescription: string
    issueDate: string,
    issueComments: Comment[],
    issueInteractions: InteractionIssueType[]
    isResolved: boolean
}
