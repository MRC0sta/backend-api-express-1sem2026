import express from 'express'
import { getPostsController } from '../controllers/post/getPostsController.js'
import { createPostsController } from '../controllers/post/createPostsController.js'
import { updatePostController } from '../controllers/post/updatePostsController.js'
import { updateAvatarPostsController } from '../controllers/post/updateAvatarPostController.js'
import { deletePostsController } from '../controllers/post/deletePostsController.js'

const router = express.Router()

router.get('/', getPostsController)
router.post('/', createPostsController)
router.put('/', updatePostController)
router.patch('/', updateAvatarPostsController)
router.delete('/', deletePostsController)

export default router
