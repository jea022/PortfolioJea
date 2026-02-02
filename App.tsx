
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  ArrowUpRight, 
  Terminal, 
  Layout, 
  Dribbble, 
  Twitter, 
  Github, 
  Linkedin, 
  Cpu, 
  Code,
  Sparkles,
  X,
  Send,
  ExternalLink,
  GraduationCap,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Heart,
  Rocket,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BentoCard from './components/BentoCard';
import Modal from './components/Modal';
import { GoogleGenAI } from '@google/genai';
import { useLanguage } from './context/LanguageContext';
import { usePortfolioData } from './data/usePortfolioData';

type ModalType = 'credentials' | 'projects' | 'services' | 'blog' | 'profiles' | 'contact' | 'about' | null;

const App: React.FC = () => {
  const { t, language } = useLanguage();
  const { personalInfo, stats, credentials, services, projects, socialLinks, brandInfo, experience, softSkills, conocimientos } = usePortfolioData();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'ai', content: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [brandProjectImages, setBrandProjectImages] = useState<{[key: number]: number}>({0: 0, 1: 0, 2: 0});

  const handleSendChat = async () => {
    if (!chatMessage.trim()) return;

    const userMsg = chatMessage;
    setChatHistory(prev => [...prev, { role: 'user', content: userMsg }]);
    setChatMessage('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: userMsg,
        config: {
          systemInstruction: "Eres el asistente IA de Juan Esteban Aguinaga, un Desarrollador de Aplicaciones Multiplataforma (DAM) especializado en Frontend y desarrollo web, ubicado en Barcelona, España. Juan tiene 2 años de experiencia, realizó prácticas en Ancoradual y tiene más de 3 años de experiencia en gestión. Responde en español de forma profesional, amigable y concisa. Ayuda a responder preguntas sobre su experiencia, habilidades, disponibilidad y servicios.",
        }
      });
      
      const aiResponse = response.text || "Lo siento, no pude procesar eso. ¡Juan está ocupado creando cosas increíbles!";
      setChatHistory(prev => [...prev, { role: 'ai', content: aiResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setChatHistory(prev => [...prev, { role: 'ai', content: "Error conectando con el asistente. Por favor, intenta de nuevo." }]);
    } finally {
      setIsTyping(false);
    }
  };

  // Preload project images
  useEffect(() => {
    const imagesToPreload = [
      ...projects.map(p => p.image),
      ...brandInfo.projects.flatMap(p => p.images),
      '/PortfolioJea/projects-cover.jpg',
      personalInfo.profileImage,
    ];
    
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return <Code className="w-8 h-8" />;
      case 'layout': return <Layout className="w-8 h-8" />;
      case 'cpu': return <Cpu className="w-8 h-8" />;
      case 'terminal': return <Terminal className="w-8 h-8" />;
      default: return <Code className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col px-4 md:px-8 lg:px-16 py-6">
      {/* Animated Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar onLetstalk={() => setIsChatOpen(true)} onNavigate={(modal) => setActiveModal(modal)} />
      </motion.div>
      
      <AnimatePresence mode="wait">
        <motion.main 
          key={language}
          className="flex-grow mt-12 mb-20 max-w-7xl mx-auto w-full"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Main Bento Grid: 4 columns on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Row 1 & 2 (Left): Profile Hero Card (2x2 area) */}
          <BentoCard index={0} className="md:col-span-2 md:row-span-2 flex flex-col md:flex-row items-center gap-8 p-10 relative overflow-hidden" onClick={() => setActiveModal('about')}>
            <motion.div 
              className="w-full md:w-1/2 aspect-square rounded-tl-3xl rounded-br-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900 relative"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <img 
                src={personalInfo.profileImage} 
                alt={`${personalInfo.name} ${personalInfo.lastName}`} 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                style={{ objectPosition: 'center 20%' }}
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 text-left"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2 block">{personalInfo.role}</span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">{personalInfo.name}<br/><span className="text-gradient">{personalInfo.lastName}</span></h1>
              <p className="text-zinc-400 font-light mb-8 max-w-xs">{personalInfo.bio.substring(0, 80)}...</p>
              <div className="absolute bottom-10 right-10">
                <div className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                  <Plus className="w-5 h-5 text-zinc-600 group-hover:text-black" />
                </div>
              </div>
            </motion.div>
          </BentoCard>

          {/* Row 1 (Right): Credentials (1x1) */}
          <BentoCard index={1} className="p-8 flex flex-col justify-between group" onClick={() => setActiveModal('credentials')}>
             <div className="flex justify-center py-4">
                <div className="text-4xl font-serif italic text-blue-500/30">{personalInfo.lastName}</div>
             </div>
             <div>
               <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase block mb-1">{t('card.credentials.subtitle')}</span>
               <div className="flex justify-between items-end">
                  <h3 className="text-xl font-semibold">{t('card.credentials')}</h3>
                  <div className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                    <Plus className="w-5 h-5 text-zinc-600 group-hover:text-black" />
                  </div>
               </div>
             </div>
          </BentoCard>

          {/* Row 1 (Right): Projects (1x1) */}
          <BentoCard index={2} className="p-8 flex flex-col justify-between group overflow-hidden" onClick={() => setActiveModal('projects')}>
             <div className="flex justify-center py-4 h-32 relative">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img 
                    src="/PortfolioJea/projects-cover.jpg" 
                    alt="Projects Preview" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
             </div>
             <div>
               <span className="text-xs font-semibold tracking-widest text-green-400 uppercase block mb-1">{t('card.projects.subtitle')}</span>
               <div className="flex justify-between items-end">
                  <h3 className="text-xl font-semibold">{t('card.projects')}</h3>
                  <div className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                    <Plus className="w-5 h-5 text-zinc-600 group-hover:text-black" />
                  </div>
               </div>
             </div>
          </BentoCard>

          {/* Row 2 (Right): Services Offering (Moved here, takes 2 columns, Row 2 is shared with Profile card) */}
          <BentoCard index={3} className="md:col-span-2 p-10 flex flex-col justify-between group" onClick={() => setActiveModal('services')}>
             <div className="flex justify-around items-center py-8">
                <Terminal className="w-10 h-10 text-pink-400 stroke-1" />
                <Layout className="w-10 h-10 text-blue-400 stroke-1" />
                <Cpu className="w-10 h-10 text-green-400 stroke-1" />
                <Code className="w-10 h-10 text-purple-400 stroke-1" />
             </div>
             <div>
               <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase block mb-1">{t('card.services.subtitle')}</span>
               <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-semibold">{t('card.services')}</h3>
                  <div className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                    <Plus className="w-5 h-5 text-zinc-600 group-hover:text-black" />
                  </div>
               </div>
             </div>
          </BentoCard>

          {/* Row 3 (Left): Brand/Services Card (1x1) */}
          <BentoCard index={4} className="p-8 flex flex-col justify-between group" onClick={() => setActiveModal('blog')}>
             <div className="flex justify-center py-4">
               <div className="flex items-center gap-2">
                 <div className="w-20 h-20 rounded-xl overflow-hidden">
                   <img src={brandInfo.logo} alt={brandInfo.name} className="w-full h-full object-contain" />
                 </div>
               </div>
             </div>
             <div>
               <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase block mb-1">{t('card.brand')}</span>
               <div className="flex justify-between items-end">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{brandInfo.name}</h3>
                  <div className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                    <Plus className="w-5 h-5 text-zinc-600 group-hover:text-black" />
                  </div>
               </div>
             </div>
          </BentoCard>

          {/* Row 3 (Left): Social Profiles Card (Moved here, 1x1) */}
          <BentoCard index={5} className="p-8 flex flex-col justify-between group" onClick={() => setActiveModal('profiles')}>
             <div className="flex justify-center gap-4 py-8">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center hover:bg-blue-600/30 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
             </div>
             <div>
               <span className="text-xs font-semibold tracking-widest text-pink-400 uppercase block mb-1">{t('card.profiles.subtitle')}</span>
               <div className="flex justify-between items-end">
                  <h3 className="text-xl font-semibold">{t('card.profiles')}</h3>
                  <div className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                    <Plus className="w-5 h-5 text-zinc-600 group-hover:text-black" />
                  </div>
               </div>
             </div>
          </BentoCard>

          {/* Row 3 (Right): Stats Cards - Un solo contenedor con sub-contenedores */}
          <BentoCard index={6} className="md:col-span-2 p-6">
            <div className="grid grid-cols-3 gap-4 h-full">
              <div className="bg-zinc-900/50 rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-zinc-800/50 hover:border-blue-500/30 transition-colors">
                <span className="text-4xl font-bold block mb-2 text-blue-400">{stats.yearsExperience.toString().padStart(2, '0')}</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest leading-tight">{t('stats.years')}<br/>{t('stats.experience')}</span>
              </div>
              <div className="bg-zinc-900/50 rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-zinc-800/50 hover:border-green-500/30 transition-colors">
                <span className="text-4xl font-bold block mb-2 text-green-400">+{stats.clients}</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest leading-tight">{t('stats.clients')}<br/>{t('stats.satisfied')}</span>
              </div>
              <div className="bg-zinc-900/50 rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-zinc-800/50 hover:border-purple-500/30 transition-colors">
                <span className="text-4xl font-bold block mb-2 text-purple-400">+{stats.projects}</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest leading-tight">{t('stats.projects')}<br/>{t('stats.completed')}</span>
              </div>
            </div>
          </BentoCard>

          {/* Row 4: CTA Card (4 columns) */}
          <BentoCard index={7} className="md:col-span-2 lg:col-span-4 p-12 flex flex-col md:flex-row justify-between items-center group relative overflow-hidden" onClick={() => setActiveModal('contact')}>
            <div className="text-center md:text-left">
               <h2 className="text-4xl md:text-6xl font-bold leading-tight">{t('cta.title')} <span className="text-blue-500">{t('cta.highlight')}</span></h2>
            </div>
            <div className="mt-8 md:mt-0">
               <div className="w-16 h-16 border border-zinc-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                  <Plus className="w-8 h-8 text-zinc-600 group-hover:text-black" />
               </div>
            </div>
          </BentoCard>

          </div>
        </motion.main>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Footer onNavigate={(modal) => setActiveModal(modal)} />
      </motion.div>

      {/* About/Profile Modal */}
      <Modal 
        isOpen={activeModal === 'about'} 
        onClose={() => setActiveModal(null)}
        title={`${personalInfo.name} ${personalInfo.lastName}`}
        subtitle={personalInfo.role}
      >
        <div className="space-y-8">
          {/* Header with image */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
              <img 
                src={personalInfo.profileImage} 
                alt={`${personalInfo.name} ${personalInfo.lastName}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </div>
              <p className="text-zinc-300 leading-relaxed whitespace-pre-line">{personalInfo.fullBio}</p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              {t('about.highlights')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {personalInfo.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => { setActiveModal('contact'); }}
              className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {t('about.contact')}
            </button>
            <button 
              onClick={() => { setActiveModal('projects'); }}
              className="flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 rounded-2xl font-semibold transition-colors flex items-center justify-center gap-2 border border-zinc-700"
            >
              <Layout className="w-5 h-5" />
              {t('about.viewprojects')}
            </button>
          </div>
        </div>
      </Modal>

      {/* Credentials Modal */}
      <Modal 
        isOpen={activeModal === 'credentials'} 
        onClose={() => setActiveModal(null)}
        title={t('credentials.title')}
        subtitle={t('credentials.subtitle')}
      >
        <div className="space-y-8">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold">{t('credentials.experience')}</h3>
            </div>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{exp.title}</h4>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">{exp.duration}</span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-3">{exp.company} · {exp.type}</p>
                  <ul className="space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-zinc-500 flex items-start gap-2">
                        <span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-purple-500" />
              <h3 className="text-xl font-semibold">{t('credentials.education')}</h3>
            </div>
            <div className="space-y-4">
              {credentials.education.map((edu, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                  <h4 className="font-semibold mb-1">{edu.degree}</h4>
                  <p className="text-sm text-zinc-400">{edu.institution}</p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-xs text-zinc-500">{edu.year}</span>
                    <span className="text-xs text-zinc-500">{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-yellow-500" />
              <h3 className="text-xl font-semibold">{t('credentials.certifications')}</h3>
            </div>
            <div className="space-y-4">
              {credentials.certifications.map((cert, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                  <h4 className="font-semibold mb-1">{cert.name}</h4>
                  <p className="text-sm text-zinc-400">{cert.issuer} · {cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-semibold">{t('credentials.languages')}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {credentials.languages.map((lang, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-full px-5 py-2 border border-zinc-800">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-zinc-500 ml-2">· {lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-semibold">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, idx) => (
                <span key={idx} className="bg-zinc-800 text-zinc-300 px-4 py-2 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      {/* Projects Modal */}
      <Modal 
        isOpen={activeModal === 'projects'} 
        onClose={() => setActiveModal(null)}
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group">
              <div className="aspect-video overflow-hidden" style={project.imageStyle?.backgroundColor ? { backgroundColor: project.imageStyle.backgroundColor } : undefined}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{
                    objectFit: (project.imageStyle?.objectFit as React.CSSProperties['objectFit']) || 'cover',
                    objectPosition: project.imageStyle?.objectPosition || 'center',
                    transform: project.imageStyle?.transform || undefined,
                  }}
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-blue-500 uppercase tracking-wider">{project.category}</span>
                <h4 className="text-lg font-semibold mt-1 mb-2">{project.title}</h4>
                <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => {
                    const techColors: {[key: string]: string} = {
                      'React': 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30',
                      'TypeScript': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
                      'JavaScript': 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
                      'Node.js': 'bg-green-500/20 text-green-400 border border-green-500/30',
                      'Python': 'bg-yellow-600/20 text-yellow-500 border border-yellow-600/30',
                      'Java': 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
                      'MySQL': 'bg-blue-600/20 text-blue-400 border border-blue-600/30',
                      'MongoDB': 'bg-green-600/20 text-green-500 border border-green-600/30',
                      'Firebase': 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
                      'Tailwind CSS': 'bg-teal-500/20 text-teal-400 border border-teal-500/30',
                      'CSS': 'bg-blue-400/20 text-blue-300 border border-blue-400/30',
                      'HTML': 'bg-orange-600/20 text-orange-400 border border-orange-600/30',
                      'Blender': 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
                      'WordPress': 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30',
                      'PHP': 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
                      'C#': 'bg-violet-500/20 text-violet-400 border border-violet-500/30',
                      'Unity': 'bg-zinc-400/20 text-zinc-300 border border-zinc-400/30',
                      'Modelado 3D': 'bg-pink-500/20 text-pink-400 border border-pink-500/30',
                      'API REST': 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
                      'Vite': 'bg-purple-400/20 text-purple-300 border border-purple-400/30',
                    };
                    const colorClass = techColors[tech] || 'bg-zinc-800 text-zinc-300 border border-zinc-700';
                    return <span key={idx} className={`text-xs px-3 py-1 rounded-full ${colorClass}`}>{tech}</span>;
                  })}
                </div>
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-green-500 hover:text-green-400">
                      <Rocket className="w-4 h-4" /> Demo
                    </a>
                  )}
                  <a href={project.driveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-400">
                    <ExternalLink className="w-4 h-4" /> Drive
                  </a>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white">
                      <Github className="w-4 h-4" /> {t('projects.code')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>

      {/* Conocimientos Modal */}
      <Modal 
        isOpen={activeModal === 'services'} 
        onClose={() => setActiveModal(null)}
        title={t('services.title')}
        subtitle={t('services.subtitle')}
      >
        <div className="space-y-8">
          {/* Áreas de especialización */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              {t('services.areas')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-3 text-blue-500">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h4 className="font-semibold mb-1">{service.title}</h4>
                  <p className="text-sm text-zinc-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tecnologías */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-500" />
              {t('services.technologies')}
            </h3>
            <div className="space-y-4">
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('services.languages')}</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {conocimientos.tecnologias.lenguajes.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('services.frameworks')}</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {conocimientos.tecnologias.frameworks.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-purple-500/20 text-purple-400 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('services.tools')}</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {conocimientos.tecnologias.herramientas.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('services.databases')}</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {conocimientos.tecnologias.bases_datos.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-orange-500/20 text-orange-400 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('services.other')}</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {conocimientos.tecnologias.otros.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Formación DAM - Primer Curso */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-500" />
              {t('services.firstyear')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {conocimientos.primerCurso.map((modulo, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <h4 className="font-medium text-sm mb-1">{modulo.nombre}</h4>
                  <p className="text-xs text-zinc-500">{modulo.descripcion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Formación DAM - Segundo Curso */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-green-500" />
              {t('services.secondyear')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {conocimientos.segundoCurso.map((modulo, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <h4 className="font-medium text-sm mb-1">{modulo.nombre}</h4>
                  <p className="text-xs text-zinc-500">{modulo.descripcion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Habilidades Técnicas con barras */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-pink-500" />
              {t('services.proficiency')}
            </h3>
            <div className="space-y-3">
              {personalInfo.skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span className="text-zinc-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-500 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      {/* Brand/Services Modal */}
      <Modal 
        isOpen={activeModal === 'blog'} 
        onClose={() => setActiveModal(null)}
        title={brandInfo.name}
        subtitle={brandInfo.tagline}
      >
        <div className="space-y-8">
          {/* Hero */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30">
            <div className="mb-4">
              <h3 className="text-2xl font-bold">{brandInfo.name}</h3>
              <p className="text-blue-400">{brandInfo.tagline}</p>
            </div>
            <p className="text-zinc-300 leading-relaxed">{brandInfo.description}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('brand.services')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {brandInfo.services.map((service, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 hover:border-blue-500/50 transition-colors">
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-zinc-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('brand.projects')}</h3>
            <div className="space-y-4">
              {brandInfo.projects.map((project, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 hover:border-blue-500/50 transition-colors">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Image Carousel */}
                    <div className="relative w-full md:w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-zinc-800">
                      <img 
                        src={project.images[brandProjectImages[idx] || 0]} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      {/* Navigation Arrows */}
                      <button 
                        onClick={() => setBrandProjectImages(prev => ({
                          ...prev, 
                          [idx]: prev[idx] === 0 ? 1 : 0
                        }))}
                        className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => setBrandProjectImages(prev => ({
                          ...prev, 
                          [idx]: prev[idx] === 0 ? 1 : 0
                        }))}
                        className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      {/* Dots Indicator */}
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                        {project.images.map((_, imgIdx) => (
                          <button 
                            key={imgIdx}
                            onClick={() => setBrandProjectImages(prev => ({...prev, [idx]: imgIdx}))}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              (brandProjectImages[idx] || 0) === imgIdx ? 'bg-white' : 'bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Project Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-semibold text-white mb-1">{project.title}</h4>
                        <p className="text-sm text-zinc-400 mb-2">{project.description}</p>
                        <p className="text-sm text-green-400 font-medium">{t('brand.results')}: {project.result}</p>
                      </div>
                      {project.url !== "#" && (
                        <a 
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-2"
                        >
                          {t('brand.viewproject')} <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('brand.includes')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {brandInfo.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
                    onClick={() => setActiveModal('contact')}
                    className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    {t('brand.request')}
                  </button>
            {brandInfo.url !== "#" && (
              <a 
                href={brandInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 rounded-2xl font-semibold transition-colors flex items-center justify-center gap-2 border border-zinc-700"
              >
                <ExternalLink className="w-5 h-5" />
                {t('brand.viewweb')}
              </a>
            )}
          </div>
        </div>
      </Modal>

      {/* Profiles Modal */}
      <Modal 
        isOpen={activeModal === 'profiles'} 
        onClose={() => setActiveModal(null)}
        title={t('profiles.title')}
        subtitle={t('profiles.subtitle')}
      >
        <div className="grid grid-cols-2 gap-4">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col items-center gap-3 group">
            <Github className="w-10 h-10 text-zinc-400 group-hover:text-white transition-colors" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col items-center gap-3 group">
            <Linkedin className="w-10 h-10 text-zinc-400 group-hover:text-blue-500 transition-colors" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </Modal>

      {/* Contact Modal */}
      <Modal 
        isOpen={activeModal === 'contact'} 
        onClose={() => setActiveModal(null)}
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      >
        <div className="space-y-6">
          <p className="text-zinc-400">{personalInfo.bio}</p>
          
          <div className="space-y-4">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 bg-zinc-900 rounded-2xl p-5 border border-zinc-800 hover:border-blue-500 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('contact.email')}</span>
                <p className="font-medium group-hover:text-blue-500 transition-colors">{personalInfo.email}</p>
              </div>
            </a>
            
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 bg-zinc-900 rounded-2xl p-5 border border-zinc-800 hover:border-green-500 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('contact.phone')}</span>
                <p className="font-medium group-hover:text-green-500 transition-colors">{personalInfo.phone}</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('contact.location')}</span>
                <p className="font-medium">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => { setActiveModal(null); setIsChatOpen(true); }}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            {t('contact.aichat')}
          </button>
        </div>
      </Modal>

      {/* AI Assistant Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#1a1a1a] w-full max-w-lg rounded-3xl border border-zinc-800 shadow-2xl flex flex-col h-[600px] overflow-hidden">
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-[#1a1a1a]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">{t('chat.title')}</h3>
                  <p className="text-xs text-zinc-500">{t('chat.status')}</p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-4 custom-scrollbar">
              {chatHistory.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-zinc-500 text-sm">{t('chat.empty')}</p>
                </div>
              )}
              {chatHistory.map((chat, idx) => (
                <div key={idx} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    chat.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{chat.content}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none border border-zinc-700">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-zinc-800 bg-[#1a1a1a]">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                  placeholder={t('chat.placeholder')}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-blue-500 transition-colors pr-14"
                />
                <button 
                  onClick={handleSendChat}
                  disabled={!chatMessage.trim() || isTyping}
                  className="absolute right-2 p-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 text-white rounded-full transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
