import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.cv': 'Hoja de Vida',
    'nav.letstalk': 'Hablemos!',
    
    // Hero Card
    'hero.bio': 'Desarrollo Apl. Multiplataforma | Desarrollo Web| Open to Junior / Remote',
    
    // Cards
    'card.credentials': 'Credenciales',
    'card.credentials.subtitle': 'Más sobre mí',
    'card.projects': 'Proyectos',
    'card.projects.subtitle': 'Portfolio',
    'card.services': 'Conocimientos',
    'card.services.subtitle': 'Especialización',
    'card.brand': 'Marca Personal',
    'card.profiles': 'Perfiles',
    'card.profiles.subtitle': 'Sígueme',
    
    // Stats
    'stats.years': 'Años de',
    'stats.experience': 'Experiencia',
    'stats.clients': 'Clientes',
    'stats.satisfied': 'Satisfechos',
    'stats.projects': 'Proyectos',
    'stats.completed': 'Completados',
    
    // CTA
    'cta.title': 'Trabajemos',
    'cta.highlight': 'juntos!',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    
    // About Modal
    'about.highlights': 'Destacados',
    'about.contact': 'Contactar',
    'about.viewprojects': 'Ver Proyectos',
    
    // Credentials Modal
    'credentials.title': 'Credenciales',
    'credentials.subtitle': 'Más sobre mí',
    'credentials.experience': 'Experiencia',
    'credentials.education': 'Educación',
    'credentials.certifications': 'Certificaciones',
    'credentials.languages': 'Idiomas',
    'credentials.softskills': 'Soft Skills',
    
    // Projects Modal
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Portfolio',
    'projects.demo': 'Demo',
    'projects.code': 'Código',
    
    // Services/Knowledge Modal
    'services.title': 'Conocimientos',
    'services.subtitle': 'Formación DAM - Escuela Prat',
    'services.areas': 'Áreas de Especialización',
    'services.technologies': 'Tecnologías y Herramientas',
    'services.languages': 'Lenguajes',
    'services.frameworks': 'Frameworks',
    'services.tools': 'Herramientas',
    'services.databases': 'Bases de Datos',
    'services.other': 'Otros',
    'services.firstyear': 'DAM - Primer Curso',
    'services.secondyear': 'DAM - Segundo Curso',
    'services.proficiency': 'Nivel de Dominio',
    
    // Brand Modal
    'brand.services': 'Servicios',
    'brand.projects': 'Proyectos Realizados',
    'brand.results': 'Resultados',
    'brand.viewproject': 'Ver proyecto',
    'brand.includes': '¿Qué incluye?',
    'brand.request': 'Solicitar Presupuesto',
    'brand.viewweb': 'Ver Web',
    
    // Profiles Modal
    'profiles.title': 'Redes Sociales',
    'profiles.subtitle': 'Sígueme',
    
    // Contact Modal
    'contact.title': 'Hablemos',
    'contact.subtitle': 'Contacto',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.aichat': 'Chat con Asistente IA',
    
    // AI Chat
    'chat.title': 'Asistente IA de Juan',
    'chat.status': 'Online y listo para ayudar',
    'chat.placeholder': 'Escríbeme algo...',
    'chat.empty': 'Pregúntame sobre mi trabajo, experiencia o disponibilidad.',

    // Personal Info (will be used with data)
    'role': 'Frontend & Web Developer',
    'availability': 'Disponible para trabajo remoto',
    'bio': 'Desarrollo Apl. Multiplataforma | Desarrollo Web| Open to Junior / Remote',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About me',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume',
    'nav.letstalk': "Let's talk!",
    
    // Hero Card
    'hero.bio': 'Multiplatform App Development | Web Development | Open to Junior / Remote',
    
    // Cards
    'card.credentials': 'Credentials',
    'card.credentials.subtitle': 'More about me',
    'card.projects': 'Projects',
    'card.projects.subtitle': 'Portfolio',
    'card.services': 'Knowledge',
    'card.services.subtitle': 'Specialization',
    'card.brand': 'Personal Brand',
    'card.profiles': 'Profiles',
    'card.profiles.subtitle': 'Follow me',
    
    // Stats
    'stats.years': 'Years of',
    'stats.experience': 'Experience',
    'stats.clients': 'Happy',
    'stats.satisfied': 'Clients',
    'stats.projects': 'Projects',
    'stats.completed': 'Completed',
    
    // CTA
    'cta.title': "Let's work",
    'cta.highlight': 'together!',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    
    // About Modal
    'about.highlights': 'Highlights',
    'about.contact': 'Contact',
    'about.viewprojects': 'View Projects',
    
    // Credentials Modal
    'credentials.title': 'Credentials',
    'credentials.subtitle': 'More about me',
    'credentials.experience': 'Experience',
    'credentials.education': 'Education',
    'credentials.certifications': 'Certifications',
    'credentials.languages': 'Languages',
    'credentials.softskills': 'Soft Skills',
    
    // Projects Modal
    'projects.title': 'Projects',
    'projects.subtitle': 'Portfolio',
    'projects.demo': 'Demo',
    'projects.code': 'Code',
    
    // Services/Knowledge Modal
    'services.title': 'Knowledge',
    'services.subtitle': 'DAM Training - Prat School',
    'services.areas': 'Areas of Specialization',
    'services.technologies': 'Technologies & Tools',
    'services.languages': 'Languages',
    'services.frameworks': 'Frameworks',
    'services.tools': 'Tools',
    'services.databases': 'Databases',
    'services.other': 'Other',
    'services.firstyear': 'DAM - First Year',
    'services.secondyear': 'DAM - Second Year',
    'services.proficiency': 'Proficiency Level',
    
    // Brand Modal
    'brand.services': 'Services',
    'brand.projects': 'Completed Projects',
    'brand.results': 'Results',
    'brand.viewproject': 'View project',
    'brand.includes': 'What\'s included?',
    'brand.request': 'Request Quote',
    'brand.viewweb': 'View Website',
    
    // Profiles Modal
    'profiles.title': 'Social Media',
    'profiles.subtitle': 'Follow me',
    
    // Contact Modal
    'contact.title': "Let's Talk",
    'contact.subtitle': 'Contact',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.aichat': 'Chat with AI Assistant',
    
    // AI Chat
    'chat.title': "Juan's AI Assistant",
    'chat.status': 'Online and ready to help',
    'chat.placeholder': 'Write something...',
    'chat.empty': 'Ask me about my work, experience or availability.',

    // Personal Info
    'role': 'Frontend & Web Developer',
    'availability': 'Available for remote work',
    'bio': 'Multiplatform App Development | Web Development | Open to Junior / Remote',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
