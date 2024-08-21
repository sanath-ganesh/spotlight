import UserRouter from './user-route.js';
import CommentRouter from './comment-routes.js';
import IssueRouter from './issue-routes.js';
import UserCommentInteractionRouter from './usercomment-interaction-route.js';
import UserIssueInteractionRouter from './userissue-interaction-route.js';

// Define the base path for all routes
const basePath = '/spotlight';

// Function to initialize all routes
const initializeRoutes = (app) => {
    // Mount UserRouter under the base path
    app.use(`${basePath}`, UserRouter);
    // Mount CommentRouter under the base path with '/comment' prefix
    app.use(`${basePath}/comment`, CommentRouter);
    // Mount IssueRouter under the base path with '/issue' prefix
    app.use(`${basePath}/issue`, IssueRouter);
    // Mount UserCommentInteractionRouter under the base path with '/commentinteraction' prefix
    app.use(`${basePath}/commentinteraction`, UserCommentInteractionRouter);
    // Mount UserIssueInteractionRouter under the base path with '/issueinteraction' prefix
    app.use(`${basePath}/issueinteraction`, UserIssueInteractionRouter);
};

export default initializeRoutes;
