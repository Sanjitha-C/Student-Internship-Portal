const express = require("express");
const Application = require("../models/Application");
const router = express.Router();

// POST /api/applications
router.post("/", async (req, res) => {
  try {
    const { name, email, rollNumber, internshipId, internshipTitle } =
      req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof rollNumber !== "string" ||
      typeof internshipId !== "string" ||
      typeof internshipTitle !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !rollNumber.trim() ||
      !internshipId.trim() ||
      !internshipTitle.trim()
    ) {
      return res.status(400).json({
        message: "Please fill in all required fields."
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({
        message: "Please enter a valid email address."
      });
    }

    const application = await Application.create({
      name: name.trim(),
      email: email.trim(),
      rollNumber: rollNumber.trim(),
      internshipId: internshipId.trim(),
      internshipTitle: internshipTitle.trim()
    });

    return res.status(201).json({
      message: "Application submitted successfully!",
      application
    });
  } catch (error) {
    console.error("Application submission error:", error.message);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: error.message
      });
    }

    return res.status(500).json({
      message: "Unable to save the application. Please try again."
    });
  }
});

// GET /api/applications
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find().sort({
      createdAt: -1
    });

    return res.status(200).json(applications);
  } catch (error) {
    console.error("Application retrieval error:", error.message);

    return res.status(500).json({
      message: "Unable to retrieve applications."
    });
  }
});

module.exports = router;