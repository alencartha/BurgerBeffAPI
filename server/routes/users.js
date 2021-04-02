const { Router } = require('express');
const usersController = require('../controller/usersController');
const authMiddleware = require('../middlewares/auth');

const router = Router();

router.get('/', authMiddleware, usersController.getUsers);
router.get('/:uid', authMiddleware, usersController.getUserById);
router.post('/', usersController.postUser);
router.put('/:uid', authMiddleware, usersController.updateUser);
router.delete('/:uid', authMiddleware, usersController.deleteUser);

module.exports = router;
