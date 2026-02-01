// ============================================
// 🎯 PORTFOLIO DE JUAN ESTEBAN AGUINAGA
// ============================================

// Base URL para GitHub Pages
const BASE_URL = '/PortfolioJea';

export const personalInfo = {
  name: "Juan Esteban",
  lastName: "Aguinaga",
  role: "Frontend & Web Developer",
  location: "Barcelona, España",
  availability: "Disponible para trabajo remoto",
  email: "aguinagajuanes2003@gmail.com",
  phone: "+34 611 757 730",
  bio: "Desarrollo Apl. Multiplataforma | Desarrollo Web| Open to Junior / Remote",
  profileImage: `${BASE_URL}/profile.png`,
  
  fullBio: `Soy Desarrollador de Aplicaciones Multiplataforma con enfoque en frontend y desarrollo web. Me apasiona crear soluciones digitales funcionales, bien diseñadas y centradas en la experiencia del usuario.

Cuento con experiencia práctica tras 6 meses de prácticas en Ancoradual, donde participé en proyectos de desarrollo web, colaboré con equipos técnicos y apliqué buenas prácticas de desarrollo en entornos profesionales reales.

Mi trayectoria incluye más de 3 años como encargado en Subway Barcelona, una experiencia que me proporcionó habilidades fundamentales: liderazgo, comunicación efectiva, gestión del tiempo y orientación a resultados — competencias que aplico directamente en mi trabajo como desarrollador.

Actualmente desarrollo proyectos de diseño web para emprendimientos y marcas personales, enfocándome en rendimiento, UX y conversión.

Busco mi primera oportunidad profesional como desarrollador junior, idealmente en entornos remotos o híbridos, donde pueda aportar valor, seguir aprendiendo y crecer junto a un equipo tecnológico.`,

  highlights: [
    "6 meses de experiencia en desarrollo web profesional",
    "Especializado en Frontend y aplicaciones multiplataforma",
    "+3 años de experiencia en liderazgo y gestión de equipos",
    "Proyectos freelance de diseño y desarrollo web",
    "Disponible para oportunidades remotas e híbridas",
    "Proactivo, comprometido y en constante aprendizaje",
  ],
  
  skills: [
    { name: "HTML / CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Java", level: 80 },
    { name: "SQL / Bases de datos", level: 75 },
    { name: "Git / GitHub", level: 85 },
    { name: "Tailwind CSS", level: 85 },
  ],
};

export const stats = {
  yearsExperience: 2,
  clients: 5,
  projects: 10,
};

export const credentials = {
  education: [
    {
      degree: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      institution: "Institución Prat Educación",
      year: "2022 - 2024",
      location: "Barcelona, España",
    },
    {
      degree: "Bachiller Académico",
      institution: "Colegio Pío XII",
      year: "Completado",
      location: "Colombia",
    },
  ],
  certifications: [
    {
      name: "Inglés B1",
      issuer: "Learn English",
      year: "2023",
    },
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Catalán", level: "Nativo" },
    { name: "Inglés", level: "B1 Intermedio" },
  ],
};

export const experience = [
  {
    title: "Desarrollador Web",
    company: "Ancoradual",
    type: "Prácticas Profesionales",
    duration: "6 meses",
    description: [
      "Desarrollo y mantenimiento de aplicaciones web",
      "Colaboración con equipos técnicos en proyectos reales",
      "Implementación de funcionalidades frontend",
      "Aplicación de buenas prácticas de diseño y desarrollo",
    ],
  },
  
];

// Conocimientos técnicos basados en DAM - Escuela Prat Educación
export const conocimientos = {
  // Áreas principales de especialización
  areas: [
    {
      title: "Desarrollo Frontend",
      description: "Creación de interfaces modernas y responsivas con React, TypeScript y las últimas tecnologías web.",
      icon: "code",
    },
    {
      title: "Desarrollo Web",
      description: "Sitios web optimizados para rendimiento, SEO y experiencia de usuario.",
      icon: "layout",
    },
    {
      title: "Aplicaciones Multiplataforma",
      description: "Desarrollo de aplicaciones que funcionan en múltiples dispositivos y sistemas operativos.",
      icon: "cpu",
    },
    {
      title: "Diseño UI/UX",
      description: "Interfaces intuitivas y atractivas centradas en la experiencia del usuario.",
      icon: "camera",
    },
  ],
  
  // Módulos formativos DAM - Primer Curso
  primerCurso: [
    { nombre: "Lenguajes de Marcas y SGI", descripcion: "HTML, XML, CSS, XSLT y sistemas de gestión de información" },
    { nombre: "Sistemas Informáticos", descripcion: "Administración de sistemas operativos y redes" },
    { nombre: "Bases de Datos", descripcion: "Diseño, creación y gestión de bases de datos SQL" },
    { nombre: "Programación", descripcion: "Fundamentos de programación y POO con Java" },
    { nombre: "Entornos de Desarrollo", descripcion: "IDEs, control de versiones y metodologías de desarrollo" },
    { nombre: "Inglés Profesional", descripcion: "Comunicación técnica en inglés" },
    { nombre: "Digitalización Aplicada", descripcion: "Transformación digital en sectores productivos" },
    { nombre: "Liderazgo", descripcion: "Habilidades de gestión y trabajo en equipo" },
  ],
  
  // Módulos formativos DAM - Segundo Curso
  segundoCurso: [
    { nombre: "Acceso a Datos", descripcion: "Persistencia de datos, ORM y conexiones a bases de datos" },
    { nombre: "Desarrollo de Interfaces", descripcion: "Diseño e implementación de interfaces gráficas" },
    { nombre: "Programación Multimedia", descripcion: "Desarrollo de aplicaciones móviles y multimedia" },
    { nombre: "Programación de Servicios", descripcion: "Programación concurrente, hilos y servicios" },
    { nombre: "Sistemas de Gestión Empresarial", descripcion: "ERP, CRM y sistemas empresariales" },
    { nombre: "Proyecto Intermodular", descripcion: "Proyecto integrador de todos los conocimientos" },
  ],
  
  // Tecnologías y herramientas
  tecnologias: {
    lenguajes: ["JavaScript", "TypeScript", "Java", "HTML5", "CSS3", "SQL"],
    frameworks: ["React", "React Native", "Node.js", "Tailwind CSS", "Bootstrap"],
    herramientas: ["Git", "GitHub", "VS Code", "Android Studio", "Figma", "Postman"],
    bases_datos: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    otros: ["API REST", "Responsive Design", "Metodologías Ágiles", "Scrum"],
  },
};

// Mantenemos services para compatibilidad
export const services = conocimientos.areas;

import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "1",
    title: "TradeSim",
    category: "Full Stack",
    description: "Aplicación para gestionar compras en el mercado de acciones. Desarrollada con React, Django, Reflex y SQLite.",
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
    description: "Sistema de gestión de inventario desarrollado en React.",
    image: `${BASE_URL}/bannerquickventory.png`,
    technologies: ["React"],
    driveUrl: "https://drive.google.com/drive/folders/14j8zi-fH9vlZiUD1nEwvZON48V-dajc1",
    githubUrl: "https://github.com/jea022/quick_ventory",
    demoUrl: "https://jea022.github.io/quick_ventory/#/login",
  },
  {
    id: "3",
    title: "MarketPlace Electrónica",
    category: "Web Development",
    description: "Sitio web para venta de productos electrónicos, desarrollado en React y Firebase.",
    image: `${BASE_URL}/marketplace.png`,
    technologies: ["React", "Firebase"],
    driveUrl: "https://drive.google.com/drive/folders/14j8zi-fH9vlZiUD1nEwvZON48V-dajc1",
    githubUrl: "https://github.com/jea022/Tecnoworld",
  },
  {
    id: "4",
    title: "Diseños Blender para Unity",
    category: "Diseño 3D",
    description: "Modelado y diseño 3D en Blender integrados en proyectos Unity.",
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
    description: "Sistema de gestión para empresas, desarrollado en PyCharm con Python y Tkinter.",
    image: `${BASE_URL}/crm.png`,
    technologies: ["Python", "Tkinter", "PyCharm"],
    driveUrl: "https://drive.google.com/drive/folders/14j8zi-fH9vlZiUD1nEwvZON48V-dajc1",
    githubUrl: "https://github.com/jea022/crm_emp",
    demoUrl: "https://drive.google.com/file/d/1g1ThIO3s8pqrpcUJtTfTtOrbmxTYexOB/view?usp=drive_link",
  },
  {
    id: "6",
    title: "Página WordPress",
    category: "Web Development",
    description: "Página web de un negocio elaborada con WordPress.",
    image: `${BASE_URL}/wordpress.png`,
    technologies: ["WordPress", "Diseño"],
    driveUrl: "https://drive.google.com/drive/folders/14j8zi-fH9vlZiUD1nEwvZON48V-dajc1",
    githubUrl: "",
    demoUrl: "https://drive.google.com/file/d/12U8kaILRmlqNcbCnLXioFiHoxu2itDc_/view?usp=drive_link",
  },
  {
    id: "7",
    title: "Juego SpaceInvaders",
    category: "Game Development",
    description: "Videojuego clásico desarrollado en Java, HTML, CSS y Firebase.",
    image: `${BASE_URL}/spacebanner.png`,
    technologies: ["Java", "HTML/CSS", "Firebase"],
    driveUrl: "https://drive.google.com/drive/folders/14j8zi-fH9vlZiUD1nEwvZON48V-dajc1",
    githubUrl: "https://github.com/jea022/SpaceInvaders",
    demoUrl: "https://jea022.github.io/SpaceInvaders/",
  },
  {
    id: "8",
    title: "CRM Autoescuela",
    category: "Full Stack",
    description: "Sistema de gestión de alumnos y profesores para autoescuelas. CRUD en Python con Backbone y Django.",
    image: `${BASE_URL}/Autoescuela.png`,
    technologies: ["Python", "Django", "Backbone"],
    driveUrl: "https://drive.google.com/drive/folders/14j8zi-fH9vlZiUD1nEwvZON48V-dajc1",
    githubUrl: "https://github.com/jea022/crm_autoescuela",
    demoUrl: "https://crm-autoescuela.onrender.com/",
  },
];

export const socialLinks = {
  github: "https://github.com/jea022",
  linkedin: "https://www.linkedin.com/in/juanaguidev/",
  twitter: "#",
  dribbble: "#",
};

// Marca Personal - Servicios de desarrollo web para emprendedores
export const brandInfo = {
  name: "NoName",
  tagline: "Desarrollo Web para Emprendedores",
  description: "Ayudo a pequeñas marcas y emprendimientos a construir su identidad digital con sitios web profesionales, optimizados y centrados en conversión.",
  url: "https://jea022.github.io/NoName/",
  logo: `${BASE_URL}/logononame.png`,

  services: [
    {
      title: "Landing Pages",
      description: "Páginas de aterrizaje optimizadas para captar clientes y generar leads.",
      price: "Desde 299€",
    },
    {
      title: "Web Corporativa",
      description: "Sitio web profesional para dar credibilidad y presencia online a tu negocio.",
      price: "Desde 499€",
    },
    {
      title: "E-commerce Básico",
      description: "Tienda online para empezar a vender tus productos en internet.",
      price: "Desde 799€",
    },
    {
      title: "Mantenimiento Web",
      description: "Actualizaciones, seguridad y soporte técnico continuo.",
      price: "Desde 49€/mes",
    },
  ],
  benefits: [
    "Diseño profesional y moderno",
    "Optimizado para móviles",
    "Velocidad de carga rápida",
    "SEO básico incluido",
    "Soporte personalizado",
  ],
  projects: [
    {
      title: "Portafolio/Marca Personal",
      description: "Landing page para marca personal.",
      result: "45% incremento en conversiones",
      images: [`${BASE_URL}/noname-portfolio-1.png`, `${BASE_URL}/noname-portfolio-2.png`],
      url: "https://jea022.github.io/Portfolio/",
    },
    {
      title: "Agencia de Marketing (Faralion)",
      description: "Web corporativa con secciones de servicios.",
      result: "60 leads mensuales",
      images: [`${BASE_URL}/noname-faralion-1.png`, `${BASE_URL}/noname-faralion-2.png`],
      url: "https://jea022.github.io/Faralion/",
    },
    {
      title: "Emprendimiento de Repostería (Dreamy Bites)",
      description: "Landing page B2B.",
      result: "3.2x ROI en primer mes",
      images: [`${BASE_URL}/noname-dreamy-1.png`, `${BASE_URL}/noname-dreamy-2.png`],
      url: "https://jea022.github.io/DreamyBites/",
    },
  ],
};

export const softSkills = [
  "Trabajo en equipo",
  "Comunicación efectiva", 
  "Gestión del tiempo",
  "Liderazgo",
  "Atención al cliente",
  "Proactividad",
  "Responsabilidad",
  "Adaptabilidad",
];
