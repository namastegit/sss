const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");

router.get("/", taskController.fetchAllTasks);
router.get("/:id", taskController.fetchTaskBYID);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTaskById)
router.delete("/:id", taskController.deleteTaskById)

module.exports = router;
