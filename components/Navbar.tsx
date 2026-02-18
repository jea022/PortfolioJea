
import React from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onLetstalk: () => void;
  onNavigate: (modal: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLetstalk, onNavigate }) => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="flex items-center justify-between max-w-7xl mx-auto w-full py-4">
      <div className="flex items-center gap-4 min-w-[280px]">
        <span className="text-2xl font-bold tracking-tighter">JEA<span className="text-blue-500">Dev</span></span>
        <motion.button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-blue-500 transition-all duration-300 rounded-xl text-sm font-semibold overflow-hidden"
          title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: language === 'es' ? 0 : 360 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Globe className="w-4 h-4" />
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="min-w-[55px]"
            >
              {language === 'es' ? 'English' : 'Español'}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
      
      <div className="hidden md:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{t('nav.home')}</button>
        <button onClick={() => onNavigate('about')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{t('nav.about')}</button>
        <button onClick={() => onNavigate('projects')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{t('nav.projects')}</button>
        <button onClick={() => onNavigate('contact')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{t('nav.contact')}</button>
      </div>

      <div className="flex items-center gap-3">
        <a 
          href="/PortfolioJea/Ats_Cv_Jea_Eng_Esp.pdf"
          download="Ats_Cv_Jea_Eng_Esp.pdf"
          className="px-6 py-2.5 bg-zinc-900 border border-zinc-800 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 rounded-xl text-sm font-semibold"
        >
          {t('nav.cv')}
        </a>
        <button 
          onClick={() => onNavigate('contact')}
          className="px-6 py-2.5 bg-zinc-900 border border-zinc-800 hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-xl text-sm font-semibold"
        >
          {t('nav.letstalk')}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
