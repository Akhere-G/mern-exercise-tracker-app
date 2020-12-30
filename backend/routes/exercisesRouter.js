const router = require("express").Router();
const controller = require("../controllers/exercisesController");

router.route("/").get(controller.getExercises);

router.route("/:id").get(controller.getExercise);

router.route("/:id").delete(controller.deleteExercise);

router.route("/update/:id").post(controller.updateExercise);

router.route("/add").post(controller.addExercise);

module.exports = router;
