import { useLanguage } from '../context/LanguageContext';

// Spanish data
import {
  personalInfo as personalInfoES,
  credentials as credentialsES,
  experience as experienceES,
  conocimientos as conocimientosES,
  services as servicesES,
  projects as projectsES,
  brandInfo as brandInfoES,
  softSkills as softSkillsES,
  stats,
  socialLinks,
} from './portfolioData';

// English data
import {
  personalInfoEN,
  credentialsEN,
  experienceEN,
  conocimientosEN,
  servicesEN,
  projectsEN,
  brandInfoEN,
  softSkillsEN,
} from './portfolioDataEN';

export const usePortfolioData = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  return {
    personalInfo: isEnglish ? personalInfoEN : personalInfoES,
    credentials: isEnglish ? credentialsEN : credentialsES,
    experience: isEnglish ? experienceEN : experienceES,
    conocimientos: isEnglish ? conocimientosEN : conocimientosES,
    services: isEnglish ? servicesEN : servicesES,
    projects: isEnglish ? projectsEN : projectsES,
    brandInfo: isEnglish ? brandInfoEN : brandInfoES,
    softSkills: isEnglish ? softSkillsEN : softSkillsES,
    // These don't change with language
    stats,
    socialLinks,
  };
};
