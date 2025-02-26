import project1 from "@/assets/projects/LSTM.webp";
import project2 from "@/assets/projects/train_mri.webp";
import project3 from "@/assets/projects/tiktok_factchecker.webp";
import project4 from "@/assets/projects/document_retrieval.webp";
import project5 from "@/assets/projects/aws_terrafrom_cicd.webp";
import project6 from "@/assets/projects/ai_rpg.webp";
import project7 from "@/assets/projects/chat_app.webp";

export const HERO_CONTENT = `I am a passionate AI/ML developer with hands-on experience in fine-tuning models, word embeddings, TF-IDF, NER, linear regression, classification, neural networks, and decision trees, applied in advanced projects like fake news classification with LSTM and MRI brain segmentation using U-Net. In addition, I bring robust cloud expertise for MLOps, enabling seamless deployment and scaling of AI solutions across platforms. `;

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
    year: "Mar 2024 - June 2024",
    role: "Backend Engineer Intern",
    company: "Defi-Kit Team",
    description: `Designed scalable MySQL databases with Prisma Schema for up to 10M users, built a high-performance RestAPI using Fastify and Prisma Client (reducing request latency by 60%), and streamlined deployments by migrating to GitLab CI/CD with Terraform—cutting deployment time by 40%.`,
    technologies: ["Typescript", "Fastify", "Next.js", "React.js", "Docker", "CI/CD", "Prisma", "MySQL", "RestAPI"],
  },
  {
    year: "June 2023 - Sep 2023",
    role: "AI Engineer Intern",
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
    src: "https://github.com/giaphoang/fake_news_classification_LSTM.git",
    description:
      "A deep learning model that identifies fake news with 93% accuracy using LSTM neural networks. mplemented text preprocessing, word embeddings, and sequence modeling to capture contextual patterIns in news articles.",
    technologies: ["Python", "TensorFlow", "LSTM", "NLP", "Pandas"],
  },
  {
    title: "Unet Brain MRI Segmentation",
    image: project2,
    src:"https://github.com/giaphoang/Unet_MRI_Segmentation.git",
    description:
      "Medical imaging project that segments brain tumors from MRI scans using U-Net architecture. Achieved a Dice score of 0.85 on validation data, enabling precise tumor boundary detection for improved diagnosis.",
    technologies: ["PyTorch", "Computer Vision","Binary Classification", "U-Net", "CNN"],
  },
  {
    title: "TikTok Fact Checker",
    image: project3,
    src: "https://github.com/dmtrung14/tiktok-techjam24-factcheck?tab=readme-ov-file",
    description:
      "A Tiktok feature that convert video to quiz to gamify education content that can compete with entertainment content",
    technologies: ["Clustering", "Multi-class Classification", "LLM", "NLP", "Flutter", "REST APIs"],
  },
  {
    title: "Ranking Document Retrieval",
    image: project4,
    src: "https://colab.research.google.com/drive/1yVbyRwFMpt41qPa42ikXsSrotaC7ofsl?usp=sharing",
    description:
      "An information retrieval system that ranks documents based on relevance to user queries. Implemented TF-IDF vectorization, BM25 ranking algorithm, and query expansion to optimize search results across large document collections.",
    technologies: ["Python", "NLP", "Inverted Index", "Query Expansion", "TF-IDF", "BM25"],
  },
  {
    title: "CI/CD Pipeline on AWS",
    image: project5,
    src: "https://github.com/giaphoang/CI-CD-Pipeline-on-AWS.git",
    description:
      "Automated deployment pipeline on AWS that enables continuous integration and delivery for containerized applications. Implemented infrastructure as code with Terraform, container orchestration, and automated testing for reliable deployments.",
    technologies: ["Terraform", "Docker", "AWS EC2", "AWS ECR", "CI/CD", "GitHub Actions"],
  },
  {
    title: "AI Agents RPG Game",
    image: project6,
    src: "https://ai-crypto-game.vercel.app/",
    description:
      "An interactive RPG game featuring AI-powered NPCs with unique personalities and adaptive behaviors. Players can interact with intelligent agents that learn and respond differently based on gameplay history and decision patterns.",
    technologies: ["Next.js", "React.js", "MongoDB", "REST API", "AI Agents", "Game Development"],
  },
  {
    title: "Real-Time Chat App",
    image: project7,
    src: "https://github.com/giaphoang/Real-Time-Chat-App",
    description:
      "A high-performance real-time messaging application with instant message delivery, read receipts, and user presence indicators. Implemented WebSockets for live updates, Redis for message caching, and containerized deployment for scalability.",
    technologies: ["Fastify", "Next.js", "Redis", "Docker", "WebSockets", "Microservices"],
  },  
];

export const CONTACT = {
  address: "1010 North Pleasant St, Amherst, MA 01003 ",
  phoneNo: "+1 413 210 3934 ",
  email: "ghnguyen@umass.edu",
};
