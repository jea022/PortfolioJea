import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  ArrowUpRight,
  Terminal,
  Layout,
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
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BentoCard from './components/BentoCard';
import Modal from './components/Modal';
import { GoogleGenAI } from '@google/genai';
import { useTranslation } from './i18n';
import {
  personalInfo, enPersonalInfo,
  stats,
  credentials, enCredentials,
  services, enServices,
  projects, enProjects,
  socialLinks,
  brandInfo, enBrandInfo,
  experience, enExperience,
  softSkills, enSoftSkills,
  conocimientos, enConocimientos
} from './data/portfolioData';

type ModalType = 'credentials' | 'projects' | 'services' | 'blog' | 'profiles' | 'contact' | 'about' | null;

const techColors: Record<string, string> = {
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
  'Django': 'bg-green-700/20 text-green-400 border border-green-700/30',
  'SQLite': 'bg-blue-300/20 text-blue-300 border border-blue-300/30',
  'Tkinter': 'bg-teal-600/20 text-teal-400 border border-teal-600/30',
  'PyCharm': 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
  'Backbone': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  'HTML/CSS': 'bg-orange-600/20 text-orange-400 border border-orange-600/30',
  'Diseño': 'bg-pink-500/20 text-pink-400 border border-pink-500/30',
  'Design': 'bg-pink-500/20 text-pink-400 border border-pink-500/30',
};

function usePortfolioData() {
  const { language } = useTranslation();
  const isEn = language === 'en';
  return {
    personalInfo: isEn ? enPersonalInfo : personalInfo,
    credentials: isEn ? enCredentials : credentials,
    experience: isEn ? enExperience : experience,
    conocimientos: isEn ? enConocimientos : conocimientos,
    services: isEn ? enServices : services,
    projects: isEn ? enProjects : projects,
    brandInfo: isEn ? enBrandInfo : brandInfo,
    softSkills: isEn ? enSoftSkills : softSkills,
    stats,
    socialLinks,
  };
}

const App: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const {
    personalInfo: pi,
    stats: st,
    credentials: cr,
    services: sv,
    projects: pr,
    socialLinks: sl,
    brandInfo: bi,
    experience: ex,
    softSkills: ss,
    conocimientos: cn,
  } = usePortfolioData();

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'ai', content: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [brandImageIdx, setBrandImageIdx] = useState<Record<number, number>>({ 0: 0, 1: 0, 2: 0 });

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

  useEffect(() => {
    ["https://badge.mediaplus.ma/greenbinary/jaguinag", ...pr.map(p => p.image), ...bi.projects.flatMap(p => p.images), bi.logo, "/projects-cover.jpg", pi.profileImage].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [language]);

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
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <Navbar
          onLetstalk={() => setIsChatOpen(true)}
          onNavigate={(modal) => setActiveModal(modal)}
          language={language}
          onLanguageToggle={() => setLanguage(language === 'es' ? 'en' : 'es')}
        />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col md:flex-row items-center gap-8 p-10 relative overflow-hidden" onClick={() => setActiveModal('about')}>
              <motion.div
                className="w-full md:w-1/2 aspect-square rounded-tl-3xl rounded-br-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900 relative"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <img src={pi.profileImage} alt={`${pi.name} ${pi.lastName}`} className="w-full h-full object-cover hover:scale-105 transition-all duration-500" style={{ objectPosition: 'center 20%' }} />
              </motion.div>
              <motion.div className="w-full md:w-1/2 text-left" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2 block">{pi.role}</span>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">{pi.name}<br /><span className="text-gradient">{pi.lastName}</span></h1>
                <p className="text-zinc-400 font-light mb-8 max-w-xs">{pi.bio.substring(0, 80)}...</p>
                <div className="absolute bottom-10 right-10">
                  <div className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                    <Plus className="w-5 h-5 text-zinc-600 group-hover:text-black" />
                  </div>
                </div>
              </motion.div>
            </BentoCard>

            <BentoCard className="p-8 flex flex-col justify-between group" onClick={() => setActiveModal('credentials')}>
              <div className="flex justify-center py-4">
                <div className="text-4xl font-serif italic text-blue-500/30">{pi.lastName}</div>
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

            <BentoCard className="p-8 flex flex-col justify-between group overflow-hidden" onClick={() => setActiveModal('projects')}>
              <div className="flex justify-center py-4 h-32 relative">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img src="/projects-cover.jpg" alt="Projects Preview" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
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

            <BentoCard className="md:col-span-2 p-10 flex flex-col justify-between group" onClick={() => setActiveModal('services')}>
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

            <BentoCard className="p-8 flex flex-col justify-between group" onClick={() => setActiveModal('blog')}>
              <div className="flex justify-center py-4">
                <div className="flex items-center gap-2">
                  <div className="w-20 h-20 rounded-xl overflow-hidden">
                    <img src={bi.logo} alt={bi.name} className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold tracking-widest text-orange-400 uppercase block mb-1">{t('card.brand')}</span>
                <div className="flex justify-between items-end">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">{bi.name}</h3>
                  <div className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                    <Plus className="w-5 h-5 text-zinc-600 group-hover:text-black" />
                  </div>
                </div>
              </div>
            </BentoCard>

            <BentoCard className="p-8 flex flex-col justify-between group" onClick={() => setActiveModal('profiles')}>
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

            <BentoCard className="md:col-span-2 p-6">
              <div className="grid grid-cols-3 gap-4 h-full">
                <div className="bg-zinc-900/50 rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-zinc-800/50 hover:border-blue-500/30 transition-colors">
                  <span className="text-4xl font-bold block mb-2 text-blue-400">{st.yearsExperience.toString().padStart(2, '0')}</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest leading-tight">{t('stats.years')}<br />{t('stats.experience')}</span>
                </div>
                <div className="bg-zinc-900/50 rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-zinc-800/50 hover:border-green-500/30 transition-colors">
                  <span className="text-4xl font-bold block mb-2 text-green-400">+{st.clients}</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest leading-tight">{t('stats.clients')}<br />{t('stats.satisfied')}</span>
                </div>
                <div className="bg-zinc-900/50 rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-zinc-800/50 hover:border-purple-500/30 transition-colors">
                  <span className="text-4xl font-bold block mb-2 text-purple-400">+{st.projects}</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest leading-tight">{t('stats.projects')}<br />{t('stats.completed')}</span>
                </div>
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-2 lg:col-span-4 p-12 flex flex-col md:flex-row justify-between items-center group relative overflow-hidden" onClick={() => setActiveModal('contact')}>
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

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
        <Footer
          onNavigate={(modal) => setActiveModal(modal)}
          language={language}
          onLanguageToggle={() => setLanguage(language === 'es' ? 'en' : 'es')}
        />
      </motion.div>

      <Modal isOpen={activeModal === 'about'} onClose={() => setActiveModal(null)} title={`${pi.name} ${pi.lastName}`} subtitle={pi.role}>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
              <img src={pi.profileImage} alt={`${pi.name} ${pi.lastName}`} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-zinc-400 mb-2"><MapPin className="w-4 h-4" />{pi.location}</div>
              <p className="text-zinc-300 leading-relaxed whitespace-pre-line">{pi.fullBio}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Sparkles className="w-5 h-5 text-yellow-500" />{t('about.highlights')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pi.highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-sm">{h}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={() => { setActiveModal('contact') }} className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-semibold transition-colors flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />{t('about.contact')}
            </button>
            <button onClick={() => { setActiveModal('projects') }} className="flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 rounded-2xl font-semibold transition-colors flex items-center justify-center gap-2 border border-zinc-700">
              <Layout className="w-5 h-5" />{t('about.viewprojects')}
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'credentials'} onClose={() => setActiveModal(null)} title={t('credentials.title')} subtitle={t('credentials.subtitle')}>
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4"><Briefcase className="w-6 h-6 text-blue-500" /><h3 className="text-xl font-semibold">{t('credentials.experience')}</h3></div>
            <div className="space-y-4">
              {ex.map((exp, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{exp.title}</h4>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">{exp.duration}</span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-3">{exp.company} · {exp.type}</p>
                  <ul className="space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-zinc-500 flex items-start gap-2">
                        <span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4"><GraduationCap className="w-6 h-6 text-purple-500" /><h3 className="text-xl font-semibold">{t('credentials.education')}</h3></div>
            <div className="space-y-4">
              {cr.education.map((edu, idx) => (
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
          <div>
            <div className="flex items-center gap-3 mb-4"><Award className="w-6 h-6 text-yellow-500" /><h3 className="text-xl font-semibold">{t('credentials.certifications')}</h3></div>
            <div className="space-y-4">
              {cr.certifications.map((cert, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                  <h4 className="font-semibold mb-1">{cert.name}</h4>
                  <p className="text-sm text-zinc-400">{cert.issuer} · {cert.year}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4"><Globe className="w-6 h-6 text-green-500" /><h3 className="text-xl font-semibold">{t('credentials.languages')}</h3></div>
            <div className="flex flex-wrap gap-3">
              {cr.languages.map((lang, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-full px-5 py-2 border border-zinc-800">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-zinc-500 ml-2">· {lang.level}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4"><Heart className="w-6 h-6 text-red-500" /><h3 className="text-xl font-semibold">Soft Skills</h3></div>
            <div className="flex flex-wrap gap-2">
              {ss.map((skill, idx) => (
                <span key={idx} className="bg-zinc-800 text-zinc-300 px-4 py-2 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'projects'} onClose={() => setActiveModal(null)} title={t('projects.title')} subtitle={t('projects.subtitle')}>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Code className="w-5 h-5 text-blue-500" />{t('projects.42progress')}</h3>
        <div className="flex justify-center mb-10">
          <img src="https://badge.mediaplus.ma/greenbinary/jaguinag" alt="42 Badge" className="w-full max-w-md rounded-2xl" />
        </div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Layout className="w-5 h-5 text-red-500" />{t('projects.myprojects')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pr.map((project) => (
            <div key={project.id} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group">
              <div className="aspect-video overflow-hidden" style={project.imageStyle?.backgroundColor ? { backgroundColor: project.imageStyle.backgroundColor } : undefined}>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{
                    objectFit: (project.imageStyle?.objectFit as React.CSSProperties['objectFit']) || 'cover',
                    objectPosition: project.imageStyle?.objectPosition || 'center',
                    transform: project.imageStyle?.transform || undefined,
                  }} />
              </div>
              <div className="p-5">
                <span className="text-xs text-blue-500 uppercase tracking-wider">{project.category}</span>
                <h4 className="text-lg font-semibold mt-1 mb-2">{project.title}</h4>
                <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech, idx) => (
                    <span key={idx} className={`text-xs px-3 py-1 rounded-full ${techColors[tech] || 'bg-zinc-800 text-zinc-300 border border-zinc-700'}`}>{tech}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-green-500 hover:text-green-400">
                      <Play className="w-4 h-4" /> Demo
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

      <Modal isOpen={activeModal === 'services'} onClose={() => setActiveModal(null)} title={t('services.title')} subtitle={t('services.subtitle')}>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Sparkles className="w-5 h-5 text-red-500" />{t('services.areas')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sv.map((service, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-3 text-red-500">{getServiceIcon(service.icon)}</div>
                  <h4 className="font-semibold mb-1">{service.title}</h4>
                  <p className="text-sm text-zinc-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Code className="w-5 h-5 text-blue-500" />{t('services.technologies')}</h3>
            <div className="space-y-4">
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('services.languages')}</span>
                <div className="flex flex-wrap gap-2 mt-2">{cn.tecnologias.lenguajes.map((tech, idx) => (<span key={idx} className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm">{tech}</span>))}</div>
              </div>
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('services.frameworks')}</span>
                <div className="flex flex-wrap gap-2 mt-2">{cn.tecnologias.frameworks.map((tech, idx) => (<span key={idx} className="px-3 py-1.5 bg-purple-500/20 text-purple-400 rounded-full text-sm">{tech}</span>))}</div>
              </div>
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('services.tools')}</span>
                <div className="flex flex-wrap gap-2 mt-2">{cn.tecnologias.herramientas.map((tech, idx) => (<span key={idx} className="px-3 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm">{tech}</span>))}</div>
              </div>
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('services.databases')}</span>
                <div className="flex flex-wrap gap-2 mt-2">{cn.tecnologias.bases_datos.map((tech, idx) => (<span key={idx} className="px-3 py-1.5 bg-orange-500/20 text-orange-400 rounded-full text-sm">{tech}</span>))}</div>
              </div>
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('services.other')}</span>
                <div className="flex flex-wrap gap-2 mt-2">{cn.tecnologias.otros.map((tech, idx) => (<span key={idx} className="px-3 py-1.5 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">{tech}</span>))}</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><GraduationCap className="w-5 h-5 text-purple-500" />{t('services.firstyear')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cn.primerCurso.map((mod, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-xl p-4 border border-purple-500/30 transition-colors">
                  <h4 className="font-medium text-sm mb-1">{mod.nombre}</h4>
                  <p className="text-xs text-zinc-500">{mod.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><GraduationCap className="w-5 h-5 text-green-500" />{t('services.secondyear')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cn.segundoCurso.map((mod, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-xl p-4 border border-green-500/30 transition-colors">
                  <h4 className="font-medium text-sm mb-1">{mod.nombre}</h4>
                  <p className="text-xs text-zinc-500">{mod.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Code className="w-5 h-5 text-yellow-500" />{t('services.42')}</h3>
            <p className="text-xs text-yellow-500/70 mb-4">{t('services.42.current')}</p>
            <div className="space-y-6">
              {cn.cuarentaDos.map((group, gIdx) => {
                const icons = [<Terminal className="w-4 h-4 inline-block mr-1.5 text-amber-400" />, <Cpu className="w-4 h-4 inline-block mr-1.5 text-cyan-400" />, <Sparkles className="w-4 h-4 inline-block mr-1.5 text-red-400" />];
                const borders = ['border-amber-500/30', 'border-cyan-500/30', 'border-red-500/30'];
                return (
                  <div key={gIdx}>
                    <h4 className="text-sm font-semibold text-zinc-100 mb-3 uppercase tracking-wider">{icons[gIdx] || icons[0]} {group.milestone}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {group.subjects.map((subj, sIdx) => (
                        <div key={sIdx} className={`bg-zinc-900 rounded-xl p-4 border ${borders[gIdx] || borders[0]} transition-colors`}>
                          <h4 className="font-medium text-sm mb-1 text-zinc-100">{subj.nombre}</h4>
                          <p className="text-xs text-zinc-500">{subj.descripcion}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Cpu className="w-5 h-5 text-pink-500" />{t('services.proficiency')}</h3>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={pi.skills.map(s => ({ ...s, fullMark: 100 }))}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="name" tick={{ fill: '#a1a1aa', fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#52525b', fontSize: 10 }} />
                <Radar name="Nivel" dataKey="level" stroke="#f472b6" fill="#f472b6" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'blog'} onClose={() => setActiveModal(null)} title={bi.name} subtitle={bi.tagline}>
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-2xl p-6 border border-orange-500/30">
            <div className="mb-4 flex items-center gap-4">
              <div className="relative w-20 h-20 flex-shrink-0">
                <img src={bi.logo} alt={bi.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{bi.name}</h3>
                <p className="text-orange-400">{bi.tagline}</p>
              </div>
            </div>
            <p className="text-zinc-300 leading-relaxed">{bi.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('brand.services')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bi.services.map((service, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 hover:border-orange-500/50 transition-colors">
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-zinc-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('brand.projects')}</h3>
            <div className="space-y-4">
              {bi.projects.map((project, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 hover:border-orange-500/50 transition-colors">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative w-full md:w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-zinc-800">
                      <img src={project.images[brandImageIdx[idx] || 0]} alt={project.title} className="w-full h-full object-cover transition-all duration-500" />
                      <button onClick={() => setBrandImageIdx(prev => ({ ...prev, [idx]: prev[idx] === 0 ? 1 : 0 }))} className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button onClick={() => setBrandImageIdx(prev => ({ ...prev, [idx]: prev[idx] === 0 ? 1 : 0 }))} className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                        {project.images.map((_, imgIdx) => (
                          <button key={imgIdx} onClick={() => setBrandImageIdx(prev => ({ ...prev, [idx]: imgIdx }))}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${(brandImageIdx[idx] || 0) === imgIdx ? 'bg-white' : 'bg-white/40'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-semibold text-white mb-1">{project.title}</h4>
                        <p className="text-sm text-zinc-400 mb-2">{project.description}</p>
                        <p className="text-sm text-green-400 font-medium">{t('brand.results')}: {project.result}</p>
                      </div>
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm text-orange-400 hover:text-orange-300 flex items-center gap-1 mt-2">
                        {t('brand.viewproject')} <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('brand.includes')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {bi.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`mailto:${pi.email}?subject=Consulta%20JEA%20Dev%20Studio`} className="flex-1 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />{t('brand.request')}
            </a>
            {bi.url !== "#" && (
              <a href={bi.url} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 rounded-2xl font-semibold transition-colors flex items-center justify-center gap-2 border border-zinc-700">
                <ExternalLink className="w-5 h-5" />{t('brand.viewweb')}
              </a>
            )}
          </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'profiles'} onClose={() => setActiveModal(null)} title={t('profiles.title')} subtitle={t('profiles.subtitle')}>
        <div className="grid grid-cols-2 gap-4">
          <a href={sl.github} target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col items-center gap-3 group">
            <Github className="w-10 h-10 text-zinc-400 group-hover:text-white transition-colors" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a href={sl.linkedin} target="_blank" rel="noopener noreferrer" className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col items-center gap-3 group">
            <Linkedin className="w-10 h-10 text-zinc-400 group-hover:text-blue-500 transition-colors" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'contact'} onClose={() => setActiveModal(null)} title={t('contact.title')} subtitle={t('contact.subtitle')}>
        <div className="space-y-6">
          <p className="text-zinc-400">{pi.bio}</p>
          <div className="space-y-4">
            <a href={`mailto:${pi.email}`} className="flex items-center gap-4 bg-zinc-900 rounded-2xl p-5 border border-zinc-800 hover:border-blue-500 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center"><Mail className="w-6 h-6 text-blue-500" /></div>
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('contact.email')}</span>
                <p className="font-medium group-hover:text-blue-500 transition-colors">{pi.email}</p>
              </div>
            </a>
            <a href={`tel:${pi.phone}`} className="flex items-center gap-4 bg-zinc-900 rounded-2xl p-5 border border-zinc-800 hover:border-green-500 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center"><Phone className="w-6 h-6 text-green-500" /></div>
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('contact.phone')}</span>
                <p className="font-medium group-hover:text-green-500 transition-colors">{pi.phone}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center"><MapPin className="w-6 h-6 text-purple-500" /></div>
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{t('contact.location')}</span>
                <p className="font-medium">{pi.location}</p>
              </div>
            </div>
          </div>
          <button onClick={() => { setActiveModal(null); setIsChatOpen(true); }} className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-semibold transition-colors flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />{t('contact.aichat')}
          </button>
        </div>
      </Modal>

      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#1a1a1a] w-full max-w-lg rounded-3xl border border-zinc-800 shadow-2xl flex flex-col h-[600px] overflow-hidden">
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-[#1a1a1a]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white" /></div>
                <div>
                  <h3 className="font-semibold">{t('chat.title')}</h3>
                  <p className="text-xs text-zinc-500">{t('chat.status')}</p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="p-2 hover:bg-zinc-800 rounded-full transition-colors"><X className="w-6 h-6" /></button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-4 custom-scrollbar">
              {chatHistory.length === 0 && (
                <div className="text-center py-10"><p className="text-zinc-500 text-sm">{t('chat.empty')}</p></div>
              )}
              {chatHistory.map((chat, idx) => (
                <div key={idx} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl ${chat.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700'}`}>
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
                <input type="text" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendChat()} placeholder={t('chat.placeholder')}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-blue-500 transition-colors pr-14" />
                <button onClick={handleSendChat} disabled={!chatMessage.trim() || isTyping}
                  className="absolute right-2 p-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 text-white rounded-full transition-all">
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
