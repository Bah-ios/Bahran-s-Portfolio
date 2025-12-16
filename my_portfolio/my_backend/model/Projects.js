// Import mongoose library so we can define a schema and interact with MongoDB
const mongoose = require("mongoose");

// Create a schema (a blueprint) for a Project document
// This defines the shape of data you will save to MongoDB
const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,      // The project title
      required: true,    // Must be provided
    },
    description: {
      type: String,      // Short explanation of the project
      required: true,
    },
    image: {
      type: String,      // URL of the project image
      required: false,   // Optional
    },
    link: {
      type: String,      // Link to GitHub or live demo
      required: false,
    },
  },
  {
    timestamps: true,     // Automatically adds createdAt & updatedAt fields
  }
);

// Export the model so it can be used in routes
module.exports = mongoose.model("Project", ProjectSchema);
