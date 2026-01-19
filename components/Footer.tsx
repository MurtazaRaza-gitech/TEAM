
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, LEADERSHIP_CONTENT } from '../constants';
import { Linkedin, MessageCircle, Mail, Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  // Use Founder Shehram Mehmood's data for the global footer socials
  const founder = LEADERSHIP_CONTENT[0];

  return (
    <footer className="bg-black border-t border-purple-900/20 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="flex items-center space-x-2">
            <Cpu className="w-8 h-8 text-purple-500" />
            <span className="text-3xl font-black italic uppercase tracking-tighter text-white">{COMPANY_NAME}</span>
          </Link>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Revolutionizing how the world interacts with technology through human-centered AI products.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a 
              href={founder.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 bg-gray-900 hover:bg-blue-900/40 border border-transparent hover:border-blue-500/50 rounded-full transition-all group"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
            </a>
            <a 
              href={founder.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 bg-gray-900 hover:bg-green-900/40 border border-transparent hover:border-green-500/50 rounded-full transition-all group"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-green-400" />
            </a>
            <a 
              href={founder.email} 
              className="p-2.5 bg-gray-900 hover:bg-purple-900/40 border border-transparent hover:border-purple-500/50 rounded-full transition-all group"
              title="Email"
            >
              <Mail className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
            </a>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-purple-400 transition-colors">Projects</Link></li>
            <li><Link to="/leadership" className="hover:text-purple-400 transition-colors">Leadership</Link></li>
            <li><Link to="/roadmap" className="hover:text-purple-400 transition-colors">Roadmap</Link></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-purple-400 transition-colors">Terms of Service</Link></li>
            <li><Link to="/" className="hover:text-purple-400 transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-purple-900/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500 text-center md:text-left">
        <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        <p>Crafting the future with intent.</p>
      </div>
    </footer>
  );
};

export default Footer;
