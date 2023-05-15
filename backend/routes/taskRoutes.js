const express = require("express");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const router = express.Router();

// CRUD
// Create a Task
router.post("/", createTask); // Callbacki functionid on controlleri folderis

// Read/Get data
// all tasks
router.get("/", getTasks);
// one task
router.get("/:id", getTask);

// Delete task
router.delete("/:id", deleteTask);

// Update task
router.put("/:id", updateTask);

// Saab nii ka
// router.route("/").put(createTask).get(getTasks)
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)

module.exports = router;
