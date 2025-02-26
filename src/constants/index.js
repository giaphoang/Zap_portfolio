import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Aug 2024 - Sep 2024",
    role: "AI Engineer Intern",
    company: "FPT Smart Cloud",
    description: `Designed and implemented a preprocessing pipeline for 20 VnExpress article stocks news using BeautifulSoup,
creating a corpus of 14,000 sentences and 300,000 words. Fine-tuned XLM-RoBERTa for Named Entity
Recognition (NER) with custom stocks data, achieving a 75% F1 score.`,
    technologies: ["Python", "Pytorch", "BeautifulSoup", "NLP", "NER", "BERT"],
  },
  {
    year: "mar 2024 - June 2024",
    role: "Backend Engineer Intern",
    company: "Defi-Kit Team",
    description: `Designed scalable MySQL databases with Prisma Schema for up to 10M users, built a high-performance RestAPI using Fastify and Prisma Client (reducing request latency by 60%), and streamlined deployments by migrating to GitLab CI/CD with Terraform—cutting deployment time by 40%.`,
    technologies: ["Typescript", "Fastify", "Next.js", "React.js", "Docker", "CI/CD", "Prisma", "MySQL", "RestAPI"],
  },
  {
    year: "2021 - 2022",
    role: "AI Engineer Internr",
    company: "FPT Software AI Center",
    description: `Achieved an 80% detection accuracy by fine-tuning PyTorch-based computer vision models to extract Tableau
information, enabling faster data extraction for analysts. Collaborated with 3 teammates to accelerate inference
speed by 4x through NVIDIA TensorRT optimization (ONNX format)`,
    technologies: ["Python", "Pytorch", "TensorRT","ONNX", "OpenCV"],
  },
];

export const PROJECTS = [
  {
    title: "Fake News Classification with LSTM",
    image: project1,
    src: "https://github.com/giaphoang/Fake-News-Classification-with-LSTM",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Unet Brain MRI Segmentation",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "TikTok Fact Checker",
    image: project3,
    src: "https://github.com/dmtrung14/tiktok-techjam24-factcheck?tab=readme-ov-file",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Book Recommender System",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
  {
    title: "Ranking Document Retrieval",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
  {
    title: "CI/CD Pipeline on AWS",
    image: project4,
    src: "https://github.com/giaphoang/CI-CD-Pipeline-on-AWS.git",
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Terraform", "Docker", "Ubuntu", "AWS EC2", "AWS ECR"],
  },
  {
    title: "AI Agents RPG Game",
    image: project4,
    src: "https://ai-crypto-game.vercel.app/",
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Next.js", "React.js", "MongoDB", "RestAPI"],
  },
  {
    title: "Real-Time Chat App",
    image: project4,
    src: "https://github.com/giaphoang/Real-Time-Chat-App",
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Fastify", "Next.js", "Redis", "Docker", "CI/CD", "RestAPI"],
  },  
];

export const CONTACT = {
  address: "1010 North Pleasant St, Amherst, MA 01003 ",
  phoneNo: "+1 413 210 3934 ",
  email: "ghnguyen@umass.edu",
};
