import express from 'express';
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from '../controllers/users.js'
import { verfyToken } from '../middleware/auth,js';

const router = express.Router();

// read
router.get('/:id', verfyToken, getUser);
router.get('/:id/friends', verfyToken, getUserFriends);

// update

router.patch('/:id/:friendId', verifyToken, addRemoveFriend);

export default router;