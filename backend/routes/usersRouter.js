const router = require("express").Router();
const controller = require("../controllers/userController");

router.route("/").get(controller.getUsers);

router.route("/add").post(controller.addUser);

module.exports = router;
