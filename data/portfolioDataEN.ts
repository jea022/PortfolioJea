// ============================================
// 🎯 PORTFOLIO - ENGLISH VERSION
// ============================================

const BASE_URL = '/PortfolioJea';

export const personalInfoEN = {
  name: "Juan Esteban",
  lastName: "Aguinaga",
  role: "Frontend & Web Developer",
  location: "Barcelona, Spain",
  availability: "Available for remote work",
  email: "aguinagajuanes2003@gmail.com",
  phone: "+34 611 757 730",
  bio: "Multiplatform App Development | Web Development | Open to Junior / Remote",
  profileImage: `${BASE_URL}/profile.png`,
  
  fullBio: `I am a Multiplatform Application Developer focused on frontend and web development. I am passionate about creating functional, well-designed digital solutions centered on user experience.

I have practical experience from 6 months of internship at Ancoradual, where I participated in web development projects, collaborated with technical teams, and applied best development practices in real professional environments.

My background includes over 3 years as a manager at Subway Barcelona, an experience that provided me with fundamental skills: leadership, effective communication, time management, and results orientation — competencies I directly apply in my work as a developer.

I currently develop web design projects for startups and personal brands, focusing on performance, UX, and conversion.

I am looking for my first professional opportunity as a junior developer, ideally in remote or hybrid environments, where I can add value, continue learning, and grow with a technology team.`,

  highlights: [
    "6 months of professional web development experience",
    "Specialized in Frontend and multiplatform applications",
    "+3 years of leadership and team management experience",
    "Freelance web design and development projects",
    "Available for remote and hybrid opportunities",
    "Proactive, committed, and constantly learning",
  ],
  
  skills: [
    { name: "HTML / CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Java", level: 70 },
    { name: "SQL / Databases", level: 65 },
    { name: "Git / GitHub", level: 80 },
    { name: "Tailwind CSS", level: 75 },
  ],
};

export const credentialsEN = {
  education: [
    {
      degree: "Higher Degree in Multiplatform Application Development (DAM)",
      institution: "Prat Formacion Profesional Institution",
      year: "2023 - 2025",
      location: "Barcelona, Spain",
    },
    {
      degree: "High School Diploma",
      institution: "Colegio Franciscano De Pio XII",
      year: "2014 - 2021",
      location: "Cali, Colombia",
    },
  ],
  certifications: [
    {
      name: "English Language Training – Level B2",
      issuer: "Learn English",
      year: "2019 - 2021",
    },
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "Catalan", level: "Native" },
    { name: "English", level: "B2 Intermediate" },
  ],
};

export const experienceEN = [
  {
    title: "Software Developer",
    company: "Ancoradual",
    type: "Professional Internship",
    duration: "6 months",
    description: [
      "Development and maintenance of web applications",
      "Collaboration with technical teams on real projects",
      "Implementation of frontend functionalities",
      "Application of best design and development practices",
    ],
  },
];

export const conocimientosEN = {
  areas: [
    {
      title: "Frontend Development",
      description: "Creation of modern and responsive interfaces with React, TypeScript and the latest web technologies.",
      icon: "code",
    },
    {
      title: "Web Development",
      description: "Websites optimized for performance, SEO and user experience.",
      icon: "layout",
    },
    {
      title: "Multiplatform Applications",
      description: "Development of applications that work on multiple devices and operating systems.",
      icon: "cpu",
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and attractive interfaces focused on user experience.",
      icon: "camera",
    },
  ],
  
  primerCurso: [
    { nombre: "Markup Languages & SGI", descripcion: "HTML, XML, CSS, XSLT and information management systems" },
    { nombre: "Computer Systems", descripcion: "Operating systems and network administration" },
    { nombre: "Databases", descripcion: "Design, creation and management of SQL databases" },
    { nombre: "Programming", descripcion: "Programming fundamentals and OOP with Java" },
    { nombre: "Development Environments", descripcion: "IDEs, version control and development methodologies" },
    { nombre: "Professional English", descripcion: "Technical communication in English" },
    { nombre: "Applied Digitalization", descripcion: "Digital transformation in productive sectors" },
    { nombre: "Leadership", descripcion: "Management and teamwork skills" },
  ],
  
  segundoCurso: [
    { nombre: "Data Access", descripcion: "Data persistence, ORM and database connections" },
    { nombre: "Interface Development", descripcion: "Design and implementation of graphical interfaces" },
    { nombre: "Multimedia Programming", descripcion: "Mobile and multimedia application development" },
    { nombre: "Service Programming", descripcion: "Concurrent programming, threads and services" },
    { nombre: "Enterprise Management Systems", descripcion: "ERP, CRM and enterprise systems" },
    { nombre: "Intermodular Project", descripcion: "Integrative project of all knowledge" },
  ],
  
  tecnologias: {
    lenguajes: ["JavaScript", "TypeScript", "Java", "HTML5", "CSS3", "SQL"],
    frameworks: ["React", "React Native", "Node.js", "Tailwind CSS", "Bootstrap"],
    herramientas: ["Git", "GitHub", "VS Code", "Android Studio", "Figma", "Postman"],
    bases_datos: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    otros: ["REST API", "Responsive Design", "Agile Methodologies", "Scrum"],
  },
};

export const servicesEN = conocimientosEN.areas;

export const projectsEN = [
  {
    id: "1",
    title: "TradeSim",
    category: "Full Stack",
    description: "Application for managing stock market purchases. Developed with React, Django, Reflex and SQLite.",
    image: `${BASE_URL}/tradesim.png`,
    technologies: ["React", "Django", "SQLite"],
    driveUrl: "https://drive.google.com/drive/folders/14j8zi-fH9vlZiUD1nEwvZON48V-dajc1",
    githubUrl: "https://github.com/pramos-m/TradeSim",
    demoUrl: "https://drive.google.com/file/d/1cZbiKnZ2c1VmUTV0zcgb74U4m2ehfPFX/view?usp=sharing",
  },
  {
    id: "2",
    title: "QuickVentory",
    category: "Web Development",
    description: "Inventory management system developed in React.",
    image: `${BASE_URL}/bannerquickventory.png`,
    technologies: ["React"],
    driveUrl: "https://drive.google.com/drive/folders/14j8zi-fH9vlZiUD1nEwvZON48V-dajc1",
    githubUrl: "https://github.com/jea022/quick_ventory",
    demoUrl: "https://jea022.github.io/quick_ventory/#/login",
  },
  {
    id: "3",
    title: "Electronics MarketPlace",
    category: "Web Development",
    description: "Website for selling electronic products, developed in React and Firebase.",
    image: `${BASE_URL}/marketplace.png`,
    technologies: ["React", "Firebase"],
    driveUrl: "https://drive.google.com/drive/folders/14j8zi-fH9vlZiUD1nEwvZON48V-dajc1",
    githubUrl: "https://github.com/jea022/Tecnoworld",
  },
  {
    id: "4",
    title: "Blender Designs for Unity",
    category: "3D Design",
    description: "3D modeling and design in Blender integrated into Unity projects.",
    image: `${BASE_URL}/blender3.png`,
    imageStyle: { objectPosition: "center 25%" },
    technologies: ["Blender", "Unity"],
    driveUrl: "https://drive.google.com/drive/folders/1TAtGLLB3S8sdzI3OhDozozHwAwSDu_fo?usp=drive_link",
    githubUrl: "",
  },
  {
    id: "5",
    title: "CRM-EMP",
    category: "Desktop App",
    description: "Business management system, developed in PyCharm with Python and Tkinter.",
    image: `${BASE_URL}/crm.png`,
    technologies: ["Python", "Tkinter", "PyCharm"],
    driveUrl: "https://drive.google.com/drive/folders/14j8zi-fH9vlZiUD1nEwvZON48V-dajc1",
    githubUrl: "https://github.com/jea022/crm_emp",
    demoUrl: "https://drive.google.com/file/d/1g1ThIO3s8pqrpcUJtTfTtOrbmxTYexOB/view?usp=drive_link",
  },
  {
    id: "6",
    title: "WordPress Website",
    category: "Web Development",
    description: "Business website built with WordPress.",
    image: `${BASE_URL}/wordpress.png`,
    technologies: ["WordPress", "Design"],
    driveUrl: "https://drive.google.com/drive/folders/14j8zi-fH9vlZiUD1nEwvZON48V-dajc1",
    githubUrl: "",
    demoUrl: "https://drive.google.com/file/d/12U8kaILRmlqNcbCnLXioFiHoxu2itDc_/view?usp=drive_link",
  },
  {
    id: "7",
    title: "SpaceInvaders Game",
    category: "Game Development",
    description: "Classic video game developed in Java, HTML, CSS and Firebase.",
    image: `${BASE_URL}/spacebanner.png`,
    technologies: ["Java", "HTML/CSS", "Firebase"],
    driveUrl: "https://drive.google.com/drive/folders/14j8zi-fH9vlZiUD1nEwvZON48V-dajc1",
    githubUrl: "https://github.com/jea022/SpaceInvaders",
    demoUrl: "https://jea022.github.io/SpaceInvaders/",
  },
  {
    id: "8",
    title: "Driving School CRUD",
    category: "Full Stack",
    description: "Student and teacher management system for driving schools. CRUD in Python with Backbone and Django.",
    image: `${BASE_URL}/Autoescuela.png`,
    technologies: ["Python", "Django", "Backbone"],
    driveUrl: "https://drive.google.com/drive/folders/14j8zi-fH9vlZiUD1nEwvZON48V-dajc1",
    githubUrl: "https://github.com/jea022/crm_autoescuela",
    demoUrl: "https://crm-autoescuela.onrender.com/",
  },
];

export const brandInfoEN = {
  name: "NoName",
  tagline: "Web Development for Entrepreneurs",
  description: "I help small brands and startups build their digital identity with professional, optimized websites focused on conversion.",
  url: "https://jea022.github.io/NoName/",
  logo: `${BASE_URL}/NoName.png`,

  services: [
    {
      title: "Landing Pages",
      description: "Landing pages optimized to capture clients and generate leads.",
    },
    {
      title: "Corporate Website",
      description: "Professional website to give credibility and online presence to your business.",
    },
    {
      title: "Basic E-commerce",
      description: "Online store to start selling your products on the internet.",
    },
    {
      title: "Web Maintenance",
      description: "Updates, security and continuous technical support.",
    },
  ],
  benefits: [
    "Professional and modern design",
    "Mobile optimized",
    "Fast loading speed",
    "Basic SEO included",
    "Personalized support",
  ],
  projects: [
    {
      title: "Portfolio/Personal Brand",
      description: "Landing page for personal brand.",
      result: "45% increase in conversions",
      images: [`${BASE_URL}/noname-portfolio-1.png`, `${BASE_URL}/noname-portfolio-2.png`],
      url: "https://jea022.github.io/Portfolio/",
    },
    {
      title: "Marketing Agency (Faralion)",
      description: "Corporate website with service sections.",
      result: "60 monthly leads",
      images: [`${BASE_URL}/noname-faralion-1.png`, `${BASE_URL}/noname-faralion-2.png`],
      url: "https://jea022.github.io/Faralion/",
    },
    {
      title: "Bakery Business (Dreamy Bites)",
      description: "B2B Landing page.",
      result: "3.2x ROI in first month",
      images: [`${BASE_URL}/noname-dreamy-1.png`, `${BASE_URL}/noname-dreamy-2.png`],
      url: "https://jea022.github.io/DreamyBites/",
    },
  ],
};

export const softSkillsEN = [
  "Teamwork",
  "Effective communication", 
  "Time management",
  "Leadership",
  "Customer service",
  "Proactivity",
  "Responsibility",
  "Adaptability",
];
