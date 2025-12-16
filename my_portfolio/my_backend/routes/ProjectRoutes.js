// Import express so we can create routes
const express = require("express");
// Router lets us create route groups
const router = express.Router();

// Import the Project model we created
const Project = require("../models/Project");

// ===============================
// CREATE PROJECT (POST)
// ===============================
router.post("/", async (req, res) => {
  try {
    // req.body contains the data sent from the frontend
    const { title, description, image, link } = req.body;

    // Create a new project using the model
    const newProject = await Project.create({
      title,
      description,
      image,
      link,
    });

    // Return the created project to the frontend
    res.status(201).json(newProject);
  } catch (error) {
    console.error("Error creating project:", error); // Logs to console
    res.status(500).json({ error: "Server error" });
  }
});

// ===============================
// GET ALL PROJECTS (GET)
// ===============================
router.get("/", async (req, res) => {
  try {
    // Fetch all projects from MongoDB
    const projects = await Project.find();

    // Send them back to the frontend
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Export the router so the server can use it
module.exports = router;

// ===============================
// DELETE PROJECT (DELETE)
// ===============================
router.put("/:id", async (req, res) => {
  try {
    // Extract project id from the URL (example: /api/projects/12345)
    const projectId = req.params.id;

    // Extract updated fields from request body
    const { title, description, image, link } = req.body;

    // Find project by ID and update its fields
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      {
        title,
        description,
        image,
        link,
      },
      { new: true } // Return the updated document
    );

    // If no project found, send error
    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Send updated data back to frontend
    res.json(updatedProject);
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ===============================
// DELETE PROJECT (DELETE)
// ===============================
router.delete("/:id", async (req, res) => {
  try {
    // Extract the ID from the URL
    const projectId = req.params.id;

    // Delete project by ID
    const deletedProject = await Project.findByIdAndDelete(projectId);

    // If project doesn't exist
    if (!deletedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Send success response
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ error: "Server error" });
  }
});
