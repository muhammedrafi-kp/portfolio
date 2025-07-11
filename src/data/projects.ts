import type { Project } from '../types';
import greenora from '../assets/greenora.png';
import stepEx from '../assets/stepex.png';
import aadharOCR from "../assets/aadharocr.png";

const projects: Project[] = [

  {
    id: 1,
    title: 'Greenora',
    description: 'A microservices-based smart waste management app with pickups, tracking, and sustainability features.',
    image: greenora,
    tags: ["React.js", "Redux", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "RabbitMQ", "gRPC", "Redis",
      "Socket.IO", "Razorpay", "Mapbox"],
    liveUrl: 'https://greenora.mhdrafi.online/',
    sourceUrl: 'https://github.com/MuhammedRafikp/greenora',
  },
  {
    id: 2,
    title: 'StepEx',
    description: 'A fully responsive e-commerce site selling shoes with cart and payment integration.',
    image: stepEx,
    tags: ["Node.js", " Express.js", "MongoDB", "EJS", "Bootstrap", "CSS", "Razorpay"],
    liveUrl: 'https://stepex.mhdrafi.online/',
    sourceUrl: 'https://github.com/MuhammedRafikp/stepex-ecommerce',
  },
  {
    id: 3,
    title: 'Aadhaar OCR System',
    description: 'A TypeScript-based client-server app that extracts Aadhaar card data from images using Google Cloud Vision API and custom parsing logic.',
    image: aadharOCR,
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Multer", "Google Cloud Vision API", "Vite", "Axios"],
    liveUrl: 'https://aadhaar-ocr.mhdrafi.online/', // replace with actual live URL if deployed
    sourceUrl: 'https://github.com/muhammedrafi-kp/aadhaar-ocr-system.git', // replace with your actual GitHub repo
  }
  // {
  //   id: 4,
  //   title: 'Weather Dashboard',
  //   description: 'Real-time weather application with forecast data, location search, and interactive maps.',
  //   image: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   tags: ['JavaScript', 'React', 'OpenWeatherAPI', 'Chart.js'],
  //   liveUrl: 'https://example.com/weather',
  //   sourceUrl: 'https://github.com/username/weather',
  // }
];

export default projects;