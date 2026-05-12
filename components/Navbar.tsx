import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

type ModalType = 'credentials' | 'projects' | 'services' | 'blog' | 'profiles' | 'contact' | 'about' | null;

interface NavbarProps {
  onLetstalk: () => void;
  onNavigate: (modal: ModalType) => void;
  language: string;
  onLanguageToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLetstalk, onNavigate, language, onLanguageToggle }) => {
  const [animKey, setAnimKey] = useState(0);
  const handleToggle = () => {
    onLanguageToggle();
    setAnimKey(k => k + 1);
  };
  return (
    <nav className="flex items-center justify-between max-w-7xl mx-auto w-full py-4">
      <div className="flex items-center gap-4 min-w-[200px]">
        <span className="text-2xl font-bold tracking-tighter">JEA<span className="text-blue-500">Dev</span></span>
        <button onClick={handleToggle} className="flex items-center gap-1.5 px-3 py-2 bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/30 hover:border-blue-500/50 transition-all duration-300 rounded-xl group">
          <motion.div animate={{ rotate: animKey * 360 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
            <Globe className="w-4 h-4 text-blue-400" />
          </motion.div>
          <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.3 }} className="text-xs font-bold text-blue-400">{language === 'es' ? 'English' : 'Español'}</motion.span>
        </button>
      </div>

      <div className="hidden md:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{language === 'es' ? 'Inicio' : 'Home'}</button>
        <button onClick={() => onNavigate('about')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{language === 'es' ? 'Sobre mí' : 'About'}</button>
        <button onClick={() => onNavigate('projects')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{language === 'es' ? 'Proyectos' : 'Projects'}</button>
        <button onClick={() => onNavigate('contact')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{language === 'es' ? 'Contacto' : 'Contact'}</button>
      </div>

      <div className="flex items-center gap-3">
        <a href={`${import.meta.env.BASE_URL}curriculum.pdf`} download="CV_Juan_Esteban_Aguinaga.pdf" className="px-6 py-2.5 bg-zinc-900 border border-zinc-800 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 rounded-xl text-sm font-semibold">
          {language === 'es' ? 'Curriculum' : 'Resume'}
        </a>
        <button onClick={() => onNavigate('contact')} className="px-6 py-2.5 bg-zinc-900 border border-zinc-800 hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-xl text-sm font-semibold">
          {language === 'es' ? 'Hablemos!' : "Let's Talk!"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
