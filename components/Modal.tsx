import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, subtitle, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#1a1a1a] w-full max-w-4xl max-h-[90vh] rounded-[40px] border border-zinc-800 shadow-2xl overflow-hidden animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 border-b border-zinc-800 flex justify-between items-start">
          <div>
            {subtitle && (
              <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase block mb-2">
                {subtitle}
              </span>
            )}
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-zinc-800 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
