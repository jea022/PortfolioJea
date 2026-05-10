import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

type ModalType = 'credentials' | 'projects' | 'services' | 'blog' | 'profiles' | 'contact' | 'about' | null;

interface FooterProps {
  onNavigate: (modal: ModalType) => void;
  language: string;
  onLanguageToggle: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, language, onLanguageToggle }) => {
  const [animKey, setAnimKey] = useState(0);
  const handleToggle = () => {
    onLanguageToggle();
    setAnimKey(k => k + 1);
  };
  return (
    <footer className="max-w-7xl mx-auto w-full py-16 flex flex-col items-center gap-12 border-t border-zinc-900 mt-20">
      <div className="text-center">
        <span className="text-3xl font-bold tracking-tighter mb-8 block">JEA<span className="text-blue-500">Dev</span></span>

        <div className="flex items-center justify-center gap-10">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xs uppercase tracking-widest font-semibold text-zinc-500 hover:text-white transition-colors">{language === 'es' ? 'Inicio' : 'Home'}</button>
          <button onClick={() => onNavigate('about')} className="text-xs uppercase tracking-widest font-semibold text-zinc-500 hover:text-white transition-colors">{language === 'es' ? 'Sobre mí' : 'About'}</button>
          <button onClick={() => onNavigate('projects')} className="text-xs uppercase tracking-widest font-semibold text-zinc-500 hover:text-white transition-colors">{language === 'es' ? 'Proyectos' : 'Projects'}</button>
          <button onClick={() => onNavigate('contact')} className="text-xs uppercase tracking-widest font-semibold text-zinc-500 hover:text-white transition-colors">{language === 'es' ? 'Contacto' : 'Contact'}</button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={handleToggle} className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors">
          <motion.div animate={{ rotate: animKey * 360 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
            <Globe className="w-3.5 h-3.5" />
          </motion.div>
          <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.3 }}>{language === 'es' ? 'English' : 'Español'}</motion.span>
        </button>
      </div>

      <div className="text-zinc-500 text-[11px] tracking-wide">
        © 2026 Juan Esteban Aguinaga <span className="text-blue-500">{language === 'es' ? 'Todos los derechos reservados' : 'All rights reserved'}</span>
      </div>
    </footer>
  );
};

export default Footer;
