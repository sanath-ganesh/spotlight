import express from 'express'
import * as UserController from '../controllers/user-controller.js'

const router = express.Router();
const userPath = '/user';

// Route for user login
router.route('/login')
    .post(UserController.search);

// Route for user registration
router.route('/register')
    .post(UserController.post);

// Route for getting all users
router.route(userPath)
    .get(UserController.getAllUsers);

// Route for handling individual user by ID
router.route(`${userPath}/:id`)
    // Endpoint for retrieving a user by ID
    .get(UserController.getUserById)
    // Endpoint for deleting a user by ID
    .post(UserController.deleteUser)
    // Endpoint for updating a user by ID
    .put(UserController.updateUser);
   
export default router;
