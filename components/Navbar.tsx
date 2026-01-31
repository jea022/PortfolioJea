
import React from 'react';

interface NavbarProps {
  onLetstalk: () => void;
  onNavigate: (modal: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLetstalk, onNavigate }) => {
  return (
    <nav className="flex items-center justify-between max-w-7xl mx-auto w-full py-4">
      <div className="flex items-center min-w-[200px]">
        <span className="text-2xl font-bold tracking-tighter">JEA<span className="text-blue-500">Dev</span></span>
      </div>
      
      <div className="hidden md:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Inicio</button>
        <button onClick={() => onNavigate('about')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Sobre mí</button>
        <button onClick={() => onNavigate('projects')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Proyectos</button>
        <button onClick={() => onNavigate('contact')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Contacto</button>
      </div>

      <div className="flex items-center gap-3">
        <a 
          href="/PortfolioJea/Hoja%20de%20vida%20JEAC.pdf"
          download="Hoja_de_vida_Juan_Esteban_Aguinaga.pdf"
          className="px-6 py-2.5 bg-zinc-900 border border-zinc-800 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 rounded-xl text-sm font-semibold"
        >
          Hoja de Vida
        </a>
        <button 
          onClick={() => onNavigate('contact')}
          className="px-6 py-2.5 bg-zinc-900 border border-zinc-800 hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-xl text-sm font-semibold"
        >
          Hablemos!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
