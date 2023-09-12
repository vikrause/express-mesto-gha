const router = require('express').Router();
const {
  getMe,
  getUsers,
  getUserById,
  updateProfile,
  updateAvatar,
} = require('../controllers/user');

router.get('/me', getMe);
router.get('/', getUsers);
router.get('/:userId', getUserById);
router.patch('/me', updateProfile);
router.patch('/me/avatar', updateAvatar);

module.exports = router;
