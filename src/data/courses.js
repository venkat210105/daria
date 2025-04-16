// src/data/courses.js
import fullstackImage from '../assets/fullstack.webp';
import cloudComputingImage from '../assets/cloudcomputing.jpeg';
import devOpsImage from '../assets/devops.webp';

const courses = [
  {
    id: 1,
    title: "Full Stack Development",
    instructor: "John Doe",
    duration: "16 weeks",
    description: "Learn front-end and back-end tools like React, Node.js, Express, MongoDB, and more to become a full-stack developer.",
    image: fullstackImage,
    link: "/courses/fullstack"
  },
  {
    id: 2,
    title: "Cloud Computing",
    instructor: "Jane Smith",
    duration: "12 weeks",
    description: "Master AWS, Azure, and cloud architecture concepts, and become proficient in designing scalable cloud systems.",
    image: cloudComputingImage,
    link: "/courses/cloudcomputing"
  },
  {
    id: 3,
    title: "DevOps",
    instructor: "Sam Lee",
    duration: "10 weeks",
    description: "Gain expertise in CI/CD pipelines, Docker, Jenkins, Kubernetes, and automation tools for efficient DevOps practices.",
    image: devOpsImage,
    link: "/courses/devops"
  }
];

export default courses;
