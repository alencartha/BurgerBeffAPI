const { Router } = require("express");
const usersController = require("../controller/usersController");

const router = Router();

router.get("/", usersController.getUsers);
router.get("/:uid", usersController.getUserById);
router.post("/", usersController.postUser);
router.put("/:uid", usersController.updateUser);
router.delete("/:uid", usersController.deleteUser);

module.exports = router;
