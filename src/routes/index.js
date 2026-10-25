const express = require("express");
const router = express.Router();

const internships = [
  {
    id: "1",
    title: "Web Development Intern",
    company: "ABC Technologies",
    category: "Web Development",
    location: "Remote",
    type: "Internship",
    duration: "2 months",
    stipend: "Performance-based",
    deadline: "30 November 2026",
    eligibility: "Students pursuing Computer Science or a related degree.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    responsibilities: [
      "Develop responsive web pages.",
      "Build reusable React components.",
      "Test website functionality and fix bugs.",
      "Collaborate with the development team."
    ],
    description:
      "Work on frontend development and learn how modern web applications are designed, developed and tested."
  },
  {
    id: "2",
    title: "Data Analyst Intern",
    company: "Data Solutions",
    category: "Data Analytics",
    location: "Coimbatore",
    type: "Internship",
    duration: "3 months",
    stipend: "To be discussed",
    deadline: "15 December 2026",
    eligibility: "Students interested in data analysis and interpretation.",
    skills: ["Python", "Excel", "SQL", "Data Visualization"],
    responsibilities: [
      "Clean and prepare datasets.",
      "Perform exploratory data analysis.",
      "Create reports and visualizations.",
      "Communicate findings from data."
    ],
    description:
      "Learn to transform raw data into meaningful insights that support business decisions."
  },
  {
    id: "3",
    title: "AI/ML Intern",
    company: "Innovate AI",
    category: "Artificial Intelligence",
    location: "Remote",
    type: "Internship",
    duration: "3 months",
    stipend: "To be discussed",
    deadline: "20 December 2026",
    eligibility: "Students with basic Python and mathematics knowledge.",
    skills: ["Python", "NumPy", "Pandas", "Machine Learning"],
    responsibilities: [
      "Prepare datasets for machine learning.",
      "Explore and train basic ML models.",
      "Evaluate model performance.",
      "Document experiments and results."
    ],
    description:
      "Gain practical experience in data preprocessing, machine learning workflows and model evaluation."
  }
];

// GET all internships
router.get("/internships", (req, res) => {
  res.status(200).json(internships);
});

// GET one internship by ID
router.get("/internships/:id", (req, res) => {
  const internship = internships.find(
    (item) => item.id === req.params.id
  );

  if (!internship) {
    return res.status(404).json({
      message: "Internship not found",
      requestedId: req.params.id
    });
  }

  res.status(200).json(internship);
});

module.exports = router;