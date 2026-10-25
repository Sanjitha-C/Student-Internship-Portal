
const express = require('express');
const router = express.Router();

const internships = [
  {
    id: 'web-development',
    title: 'Web Development Intern',
    company: 'Tech Solutions',
    location: 'Remote',
    duration: '3 months',
    stipend: '₹8,000/month',
    description:
      'Build responsive web applications using HTML, CSS, JavaScript and React.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    id: 'backend-development',
    title: 'Backend Development Intern',
    company: 'CodeWorks',
    location: 'Hybrid',
    duration: '3 months',
    stipend: '₹10,000/month',
    description:
      'Develop REST APIs and work with databases and server-side JavaScript.',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics Intern',
    company: 'Data Insights',
    location: 'Remote',
    duration: '2 months',
    stipend: '₹7,000/month',
    description:
      'Analyze datasets, prepare reports and communicate data-driven insights.',
    skills: ['Python', 'SQL', 'Excel', 'Data Visualization'],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design Intern',
    company: 'Creative Labs',
    location: 'On-site',
    duration: '3 months',
    stipend: '₹8,000/month',
    description:
      'Create user-friendly interfaces, wireframes and interactive prototypes.',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'UI Design'],
  },
];

router.get('/internships', (req, res) => {
  res.json(internships);
});

router.get('/internships/:id', (req, res) => {
  const internship = internships.find(
    (item) => item.id === req.params.id
  );

  if (!internship) {
    return res.status(404).json({
      message: 'Internship not found.',
    });
  }

  res.json(internship);
});

module.exports = router;
