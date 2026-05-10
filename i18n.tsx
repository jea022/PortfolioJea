import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Language = 'es' | 'en';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, { es: string; en: string }> = {
  'card.credentials.subtitle': { es: 'Más sobre mí', en: 'More about me' },
  'card.credentials': { es: 'Credenciales', en: 'Credentials' },
  'card.projects.subtitle': { es: 'Portfolio', en: 'Portfolio' },
  'card.projects': { es: 'Proyectos', en: 'Projects' },
  'card.services.subtitle': { es: 'Especialización', en: 'Specialization' },
  'card.services': { es: 'Conocimientos', en: 'Skills & Knowledge' },
  'card.brand': { es: 'Marca Personal', en: 'Personal Brand' },
  'card.profiles.subtitle': { es: 'Sígueme', en: 'Follow Me' },
  'card.profiles': { es: 'Perfiles', en: 'Profiles' },
  'stats.years': { es: 'Años de', en: 'Years of' },
  'stats.experience': { es: 'Experiencia', en: 'Experience' },
  'stats.clients': { es: 'Clientes', en: 'Clients' },
  'stats.satisfied': { es: 'Satisfechos', en: 'Satisfied' },
  'stats.projects': { es: 'Proyectos', en: 'Projects' },
  'stats.completed': { es: 'Completados', en: 'Completed' },
  'cta.title': { es: 'Trabajemos', en: "Let's Work" },
  'cta.highlight': { es: 'juntos!', en: 'Together!' },
  'about.highlights': { es: 'Destacados', en: 'Highlights' },
  'about.contact': { es: 'Contactar', en: 'Contact Me' },
  'about.viewprojects': { es: 'Ver Proyectos', en: 'View Projects' },
  'credentials.title': { es: 'Credenciales', en: 'Credentials' },
  'credentials.subtitle': { es: 'Más sobre mí', en: 'More about me' },
  'credentials.experience': { es: 'Experiencia', en: 'Experience' },
  'credentials.education': { es: 'Educación', en: 'Education' },
  'credentials.certifications': { es: 'Certificaciones', en: 'Certifications' },
  'credentials.languages': { es: 'Idiomas', en: 'Languages' },
  'projects.title': { es: 'Proyectos', en: 'Projects' },
  'projects.subtitle': { es: 'Portfolio', en: 'Portfolio' },
  'projects.code': { es: 'Código', en: 'Code' },
  'services.title': { es: 'Conocimientos', en: 'Knowledge' },
  'services.subtitle': { es: 'Formación DAM - Escuela Prat', en: 'DAM Training - Prat School' },
  'services.areas': { es: 'Áreas de Especialización', en: 'Areas of Expertise' },
  'services.technologies': { es: 'Tecnologías y Herramientas', en: 'Technologies & Tools' },
  'services.languages': { es: 'Lenguajes', en: 'Languages' },
  'services.frameworks': { es: 'Frameworks', en: 'Frameworks' },
  'services.tools': { es: 'Herramientas', en: 'Tools' },
  'services.databases': { es: 'Bases de Datos', en: 'Databases' },
  'services.other': { es: 'Otros', en: 'Others' },
  'services.firstyear': { es: 'DAM - Primer Curso', en: 'DAM - First Year' },
  'services.secondyear': { es: 'DAM - Segundo Curso', en: 'DAM - Second Year' },
  'services.42': { es: '42 Barcelona - Common Core', en: '42 Barcelona - Common Core' },
  'services.42.current': { es: 'Nivel actual: Milestone 2', en: 'Current level: Milestone 2' },
  'services.proficiency': { es: 'Nivel de Dominio', en: 'Proficiency Level' },
  'brand.services': { es: 'Servicios', en: 'Services' },
  'brand.projects': { es: 'Proyectos Realizados', en: 'Completed Projects' },
  'brand.includes': { es: '¿Qué incluye?', en: "What's Included?" },
  'brand.request': { es: 'Solicitar Presupuesto', en: 'Request a Quote' },
  'brand.viewweb': { es: 'Ver Web', en: 'View Website' },
  'brand.results': { es: 'Resultados', en: 'Results' },
  'brand.viewproject': { es: 'Ver proyecto', en: 'View project' },
  'profiles.title': { es: 'Redes Sociales', en: 'Social Networks' },
  'profiles.subtitle': { es: 'Sígueme', en: 'Follow Me' },
  'contact.title': { es: 'Hablemos', en: "Let's Talk" },
  'contact.subtitle': { es: 'Contacto', en: 'Contact' },
  'contact.email': { es: 'Email', en: 'Email' },
  'contact.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.location': { es: 'Ubicación', en: 'Location' },
  'contact.aichat': { es: 'Chat con Asistente IA', en: 'Chat with AI Assistant' },
  'chat.title': { es: 'Asistente IA de Juan', en: "Juan's AI Assistant" },
  'chat.status': { es: 'Online y listo para ayudar', en: 'Online and ready to help' },
  'chat.empty': { es: 'Pregúntame sobre mi trabajo, experiencia o disponibilidad.', en: 'Ask me about my work, experience or availability.' },
  'chat.placeholder': { es: 'Escríbeme algo...', en: 'Write me something...' },
  'projects.42progress': { es: 'Progreso de 42 Barcelona', en: '42 Barcelona Progress' },
  'projects.myprojects': { es: 'Mis Proyectos', en: 'My Projects' },
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = useCallback((key: string): string => {
    return translations[key]?.[language] ?? key;
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used within I18nProvider');
  return ctx;
}
