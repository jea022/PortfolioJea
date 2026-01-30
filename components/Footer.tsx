
import React from 'react';

interface FooterProps {
  onNavigate: (modal: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="max-w-7xl mx-auto w-full py-16 flex flex-col items-center gap-12 border-t border-zinc-900 mt-20">
      <div className="text-center">
        <span className="text-3xl font-bold tracking-tighter mb-8 block">JEA<span className="text-blue-500">Dev</span></span>
        
        <div className="flex items-center justify-center gap-10">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xs uppercase tracking-widest font-semibold text-zinc-500 hover:text-white transition-colors">Inicio</button>
          <button onClick={() => onNavigate('about')} className="text-xs uppercase tracking-widest font-semibold text-zinc-500 hover:text-white transition-colors">Sobre mí</button>
          <button onClick={() => onNavigate('projects')} className="text-xs uppercase tracking-widest font-semibold text-zinc-500 hover:text-white transition-colors">Proyectos</button>
          <button onClick={() => onNavigate('contact')} className="text-xs uppercase tracking-widest font-semibold text-zinc-500 hover:text-white transition-colors">Contacto</button>
        </div>
      </div>
      
      <div className="text-zinc-500 text-[11px] tracking-wide">
        © 2026 Juan Esteban Aguinaga <span className="text-blue-500">Todos los derechos reservados</span>
      </div>
    </footer>
  );
};

export default Footer;
