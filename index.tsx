import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, Menu, X, ArrowRight, Zap, Target, Globe, 
  Brain, Sparkles, Activity, Plus, Box, Linkedin, 
  Mail, MessageCircle, Rocket, Flag, Compass, 
  Milestone, Send, User, CheckCircle2, Workflow
} from 'lucide-react';

// --- TYPES & INTERFACES ---
interface Leader {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  whatsapp: string;
  email: string;
  skills: string[];
}

interface Member {
  name: string;
  role: string;
  bio: string;
  whatsapp: string;
  linkedin?: string;
  email?: string;
}

interface Project {
  id: string;
  name: string;
  status: string;
  description: string;
  focusAreas?: string[];
}

// --- CONSTANTS ---
const COMPANY_NAME = "TEAM";

const HOME_CONTENT = {
  hero: {
    headline: "Building Impactful AI Products for the World",
    subheading: "TEAM is a technology company focused on designing and developing AI-driven products that create meaningful impact at scale.",
  },
  vision: "To build a global company that creates AI-powered products improving how people understand, manage, and interact with their lives.",
  mission: "To design thoughtful, ethical, and scalable AI applications by combining technology, creativity, and human-centered thinking.",
  journey: [
    { year: "2023", event: "TEAM was founded by college student Shehram Mehmood with the goal of building a company from the ground up." },
    { year: "Early Growth", event: "Shehram met Murtaza Raza and Hussnain Zia Ullah, who joined as Co-Founders, bringing complementary technical and strategic skills." },
    { year: "Product Focus", event: "The team shifted its focus toward AI-powered applications and long-term product ecosystems." },
    { year: "Today", event: "TEAM has grown into a group of 10+ members, working collaboratively on multiple AI product ideas currently under development." }
  ],
  whatWeDo: [
    { title: "AI Product Development", description: "We design and build AI-driven applications focused on real-world use cases." },
    { title: "Research & Experimentation", description: "We explore new ideas, test fast, and iterate with intention." },
    { title: "Long-Term Company Building", description: "We prioritize sustainable growth over short-term launches." }
  ]
};

const ABOUT_CONTENT = {
  whoWeAre: "TEAM is an early-stage AI company formed by a group of builders, thinkers, and creators. We believe strong products come from clear thinking, disciplined execution, and teams that care deeply about impact. We are not driven by trends. We are driven by problems worth solving.",
  howWeWork: [
    "Small, focused teams",
    "Product-first mindset",
    "Ethical and responsible AI",
    "Continuous learning and improvement"
  ],
  whyAi: "We believe AI, when built responsibly, has the power to support human decision-making, awareness, and growth. Our products aim to assist, not replace."
};

const PROJECTS_CONTENT: Project[] = [
  {
    id: "01",
    name: "Horoscope App",
    status: "Under Development",
    description: "An AI-powered horoscope application designed to deliver personalized insights using modern data interpretation and clean user experience.",
  },
  {
    id: "02",
    name: "Mental Health Ecosystem",
    status: "In Development",
    description: "A long-term mental health ecosystem built around awareness, tracking, and AI-assisted support tools. Designed with privacy, empathy, and accessibility at its core.",
  }
];

const LEADERSHIP_CONTENT: Leader[] = [
  {
    name: "M. Shehram Mehmood",
    role: "Founder",
    bio: "Shehram is a young entrepreneur, web developer, and anime writer focusing on scalable AI systems. He founded TEAM with a vision for long-term product clarity.",
    linkedin: "https://www.linkedin.com/in/m-shehram-6a706639b/",
    whatsapp: "https://wa.me/+923127641850",
    email: "mailto:Vyora.ai001@gmail.com",
    skills: ["Technical Research & Writing", "Full Stack Dev", "UI/UX Prototyping", "Strategic Management"]
  },
  {
    name: "Hussnain Zia Ullah",
    role: "Co-Founder",
    bio: "Hussnain brings high-performance backend expertise and a creative eye for motion graphics. He leads creative direction at TEAM.",
    linkedin: "https://www.linkedin.com/in/hussnain-zia-ullah-22bb733a6/",
    whatsapp: "https://wa.me/+923287042651",
    email: "mailto:hussnainziya786@gmail.com",
    skills: ["Python & C++ Backend", "Flutter Mobile Dev", "Motion Graphics & VFX", "3D Animation"]
  },
  {
    name: "Murtaza Raza",
    role: "Co-Founder",
    bio: "Murtaza specializes in data-driven insights and streamlined deployment. He ensures the technical foundation of TEAM products is secure.",
    linkedin: "https://www.linkedin.com/in/murtaza-raza-85365a397/",
    whatsapp: "https://wa.me/+923091070382",
    email: "mailto:murtazaraza2286@gmail.com",
    skills: ["Modern Web Dev", "MySQL Integration", "Security Fundamentals", "SEO & Content Strategy"]
  }
];

const TEAM_MEMBERS: Member[] = [
  { name: "Muhammad Umar Shafiq", role: "AI Developer", bio: "Expert in C++, Python, and RAG-Based AI Systems.", whatsapp: "https://wa.me/+923700430532" },
  { name: "Muhammad Bilal Sheikh", role: "MERN Developer", bio: "Aspiring developer proficient in React and Node.", whatsapp: "https://wa.me/+923001772007" },
  { name: "Hassnain Zaheer", role: "Frontend Dev", bio: "Focus on polished web experiences.", whatsapp: "https://wa.me/+923315647809" },
  { name: "Huzaifa Hassan", role: "Full Stack Dev", bio: "Specialist in end-to-end MERN applications.", whatsapp: "https://wa.me/+923295111162" },
  { name: "Haseeb Ahmad", role: "Backend Dev", bio: "Expertise in PostgreSQL and REST APIs.", whatsapp: "https://wa.me/+923117705430" },
  { name: "Rameen Ali", role: "UI Designer", bio: "Focus on Responsive Design and styling.", whatsapp: "https://wa.me/+923127641850" },
  { name: "Rizwan Iqbal", role: "Systems Dev", bio: "Specializing in SQL and Web Development.", whatsapp: "https://wa.me/+923206224938" }
];

const ROADMAP_CONTENT = {
  shortTerm: ["Launch first consumer applications", "Strengthen AI infrastructure"],
  longTerm: ["Expand into multiple AI-driven verticals", "Build a connected ecosystem of products", "Operate globally"]
};

// --- SHARED COMPONENTS ---
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.section>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: 'Home', path: '/' }, { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' }, { name: 'Founders', path: '/leadership' },
    { name: 'Team', path: '/team' }, { name: 'Roadmap', path: '/roadmap' },
    { name: 'Contact', path: '/contact' }
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="p-2 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/40 transition-all">
            <Cpu className="w-6 h-6 text-purple-400" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">{COMPANY_NAME}</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-purple-400 ${location.pathname === link.path ? 'text-purple-400' : 'text-gray-400'}`}>{link.name}</Link>
          ))}
          <Link to="/contact" className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-semibold transition-all transform hover:scale-105 purple-glow">Get Started</Link>
        </div>
        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden absolute top-20 left-0 right-0 bg-black/95 border-b border-purple-900/20 py-6">
            <div className="flex flex-col space-y-4 px-6">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-lg font-medium text-gray-400 hover:text-purple-400" onClick={() => setIsOpen(false)}>{link.name}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer: React.FC = () => {
  const founder = LEADERSHIP_CONTENT[0];
  return (
    <footer className="bg-black border-t border-purple-900/20 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div className="col-span-1 md:col-span-2 space-y-6 flex flex-col items-center md:items-start">
          <Link to="/" className="flex items-center space-x-2">
            <Cpu className="w-8 h-8 text-purple-500" />
            <span className="text-3xl font-black italic uppercase tracking-tighter text-white">{COMPANY_NAME}</span>
          </Link>
          <p className="text-gray-400 max-w-sm leading-relaxed">Revolutionizing technology through human-centered AI products.</p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href={founder.linkedin} target="_blank" className="p-2.5 bg-gray-900 hover:bg-blue-900/40 border border-transparent hover:border-blue-500/50 rounded-full transition-all group"><Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400" /></a>
            <a href={founder.whatsapp} target="_blank" className="p-2.5 bg-gray-900 hover:bg-green-900/40 border border-transparent hover:border-green-500/50 rounded-full transition-all group"><MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-green-400" /></a>
            <a href={founder.email} className="p-2.5 bg-gray-900 hover:bg-purple-900/40 border border-transparent hover:border-purple-500/50 rounded-full transition-all group"><Mail className="w-5 h-5 text-gray-400 group-hover:text-purple-400" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 italic uppercase">Explore</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-purple-400 transition-colors">Work</Link></li>
            <li><Link to="/leadership" className="hover:text-purple-400 transition-colors">Founders</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 italic uppercase">Legal</h4>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- PAGES ---
const Home = () => (
  <div className="space-y-32 pb-32">
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-bold tracking-widest uppercase"
        >
          Introducing Team
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight gradient-text">{HOME_CONTENT.hero.headline}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">{HOME_CONTENT.hero.subheading}</motion.p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/projects" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center group">Explore Work <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
        </div>
      </div>
    </section>
    <AnimatedSection className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
      <div className="p-12 bg-gray-900/50 border border-purple-900/20 rounded-[2rem] group relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10"><Zap className="w-32 h-32 text-purple-500" /></div>
        <h2 className="text-3xl font-black mb-6 flex items-center italic uppercase"><Zap className="w-8 h-8 text-purple-500 mr-4" />Vision</h2>
        <p className="text-lg text-gray-400 italic">"{HOME_CONTENT.vision}"</p>
      </div>
      <div className="p-12 bg-gray-900/50 border border-purple-900/20 rounded-[2rem] group relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10"><Target className="w-32 h-32 text-indigo-500" /></div>
        <h2 className="text-3xl font-black mb-6 flex items-center italic uppercase"><Target className="w-8 h-8 text-indigo-500 mr-4" />Mission</h2>
        <p className="text-lg text-gray-400 italic">"{HOME_CONTENT.mission}"</p>
      </div>
    </AnimatedSection>
    <AnimatedSection className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-black text-center mb-16 gradient-text uppercase italic">Our Journey</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {HOME_CONTENT.journey.map((item: any, i: number) => (
          <div key={i} className="p-8 bg-gray-900/30 rounded-3xl border border-purple-900/10 hover:border-purple-500/30 transition-all">
            <span className="text-purple-400 font-black text-2xl block mb-2">{item.year}</span>
            <p className="text-gray-400 text-sm leading-relaxed">{item.event}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  </div>
);

const About = () => (
  <div className="pb-32 px-6">
    <section className="pt-20 text-center"><AnimatedSection><h1 className="text-5xl md:text-7xl font-black italic uppercase gradient-text">Identity</h1></AnimatedSection></section>
    <AnimatedSection className="max-w-5xl mx-auto mt-20 flex flex-col md:flex-row gap-16 items-center">
      <div className="flex-1 space-y-8">
        <h2 className="text-4xl font-black italic uppercase">Who We Are</h2>
        <p className="text-2xl text-gray-300 font-light leading-relaxed">{ABOUT_CONTENT.whoWeAre}</p>
      </div>
      <div className="flex-1 aspect-square bg-purple-600/10 rounded-3xl border border-purple-500/20 flex items-center justify-center relative">
        <div className="absolute inset-0 animate-spin-slow border-2 border-dashed border-purple-500/20 rounded-full" />
        <Brain className="w-32 h-32 text-purple-500" />
      </div>
    </AnimatedSection>
  </div>
);

const Projects = () => (
  <div className="pb-32 px-6">
    <section className="pt-24 text-center"><AnimatedSection><h1 className="text-6xl md:text-8xl font-black italic uppercase gradient-text">Building</h1></AnimatedSection></section>
    <div className="max-w-7xl mx-auto space-y-32 mt-20">
      {PROJECTS_CONTENT.map((p: Project, i: number) => (
        <AnimatedSection key={p.id} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
          <div className="w-full lg:w-1/2 aspect-video bg-gray-900/50 rounded-[3rem] border border-purple-900/30 flex items-center justify-center purple-glow transition-all hover:border-purple-500/50">
            {p.id === "01" ? <Sparkles className="w-32 h-32 text-purple-400" /> : <Activity className="w-32 h-32 text-indigo-400" />}
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-4 py-1.5 bg-purple-600/20 border border-purple-500/30 rounded-full text-[10px] font-black uppercase tracking-widest text-purple-400 flex items-center shadow-lg">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 animate-pulse" />
                {p.status}
              </span>
            </div>
            <h2 className="text-5xl font-black italic uppercase text-white leading-tight">{p.name}</h2>
            <p className="text-2xl text-gray-300 font-light italic leading-relaxed">"{p.description}"</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
);

const Leadership = () => (
  <div className="pb-32 px-6">
    <section className="pt-20 text-center"><AnimatedSection><h1 className="text-5xl md:text-7xl font-black italic uppercase gradient-text">Founders</h1></AnimatedSection></section>
    <div className="max-w-7xl mx-auto space-y-32 mt-20">
      {LEADERSHIP_CONTENT.map((l: Leader, i: number) => (
        <AnimatedSection key={l.name} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16`}>
          <div className="w-full md:w-1/3 bg-gray-900/50 p-8 rounded-[3rem] border border-purple-900/20 text-center sticky top-32">
            <div className="aspect-square rounded-2xl bg-black mb-6 flex items-center justify-center"><Rocket className="w-24 h-24 text-purple-500/20" /></div>
            <h3 className="text-2xl font-black italic">{l.name}</h3>
            <p className="text-purple-400 font-bold uppercase text-xs mb-6 tracking-widest">{l.role}</p>
            <div className="flex justify-center gap-4">
               <a href={l.whatsapp} target="_blank" className="p-3 bg-gray-800 rounded-xl hover:bg-green-500/20 transition-all"><MessageCircle className="w-5 h-5" /></a>
               <a href={l.linkedin} target="_blank" className="p-3 bg-gray-800 rounded-xl hover:bg-blue-500/20 transition-all"><Linkedin className="w-5 h-5" /></a>
               <a href={l.email} className="p-3 bg-gray-800 rounded-xl hover:bg-purple-500/20 transition-all"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <p className="text-2xl text-gray-300 font-light leading-relaxed">{l.bio}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {l.skills.map((s: string, idx: number) => (
                <div key={idx} className="p-4 bg-gray-900/30 rounded-xl border border-purple-900/10 flex items-center"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-4" />{s}</div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
);

const TeamPage = () => (
  <div className="pb-32 px-6">
    <section className="pt-20 text-center"><AnimatedSection><h1 className="text-5xl md:text-7xl font-black italic uppercase gradient-text">Core Team</h1></AnimatedSection></section>
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
      {TEAM_MEMBERS.map((m: Member, i: number) => (
        <div key={i} className="p-8 bg-gray-900/30 border border-purple-900/10 rounded-3xl flex flex-col justify-between hover:border-purple-500/40 transition-all group">
          <div>
            <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6"><User className="w-6 h-6 text-purple-400" /></div>
            <h3 className="text-xl font-black italic">{m.name}</h3>
            <p className="text-purple-400 text-xs font-black uppercase mb-4">{m.role}</p>
            <p className="text-gray-400 text-sm italic mb-6">"{m.bio}"</p>
          </div>
          <a href={m.whatsapp} target="_blank" className="w-full py-3 bg-gray-900 rounded-xl flex items-center justify-center space-x-2 text-gray-400 hover:text-green-400 transition-all border border-transparent hover:border-green-500/30"><MessageCircle className="w-4 h-4" /><span>WhatsApp</span></a>
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); setTimeout(() => { setSent(false); setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' }); }, 3000); };
  return (
    <div className="pb-32 px-6">
      <section className="pt-20 text-center"><AnimatedSection><h1 className="text-5xl md:text-7xl font-black italic uppercase gradient-text">Contact</h1></AnimatedSection></section>
      <div className="max-w-4xl mx-auto mt-20 bg-gray-900/20 p-12 rounded-[3rem] border border-purple-900/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
              <input type="text" required className="w-full bg-black/50 border border-purple-900/30 rounded-xl px-6 py-4 text-white focus:border-purple-500 focus:outline-none" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Professional Email</label>
              <input type="email" required className="w-full bg-black/50 border border-purple-900/30 rounded-xl px-6 py-4 text-white focus:border-purple-500 focus:outline-none" placeholder="john@company.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Inquiry Type</label>
            <select className="w-full bg-black/50 border border-purple-900/30 rounded-xl px-6 py-4 text-white focus:border-purple-500 focus:outline-none appearance-none" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}>
              <option value="General Inquiry">General Inquiry</option>
              <option value="AI Development">AI Product Development</option>
              <option value="Research Partnership">Research Partnership</option>
              <option value="Investment / Partnership">Investment / PARTNERSHIP</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Message</label>
            <textarea required rows={5} className="w-full bg-black/50 border border-purple-900/30 rounded-xl px-6 py-4 text-white focus:border-purple-500 focus:outline-none resize-none" placeholder="Tell us about your project or inquiry..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
          </div>
          <button type="submit" className={`w-full py-5 rounded-2xl font-black italic uppercase tracking-widest transition-all ${sent ? 'bg-green-600' : 'bg-purple-600 hover:bg-purple-700'}`}>{sent ? 'Sent!' : 'Drop a Message'}</button>
        </form>
      </div>
    </div>
  );
};

const VisionRoadmap = () => (
  <div className="pb-32 px-6">
    <section className="pt-20 text-center"><AnimatedSection><h1 className="text-5xl md:text-7xl font-black italic uppercase gradient-text">Roadmap</h1></AnimatedSection></section>
    <div className="max-w-4xl mx-auto space-y-12 mt-20">
      {ROADMAP_CONTENT.shortTerm.map((item: string, i: number) => (
        <div key={i} className="p-8 bg-gray-900/40 border border-purple-900/20 rounded-2xl flex items-center space-x-6">
          <span className="text-purple-400 font-black text-2xl">0{i+1}</span>
          <p className="text-xl text-white font-medium">{item}</p>
        </div>
      ))}
      {ROADMAP_CONTENT.longTerm.map((item: string, i: number) => (
        <div key={i} className="p-8 bg-gray-900/40 border border-purple-900/20 rounded-2xl flex items-center space-x-6">
          <span className="text-indigo-400 font-black text-2xl">0{i+1}</span>
          <p className="text-xl text-white font-medium">{item}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- APP ENTRY ---
const App = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/roadmap" element={<VisionRoadmap />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<HashRouter><App /></HashRouter>);
}
