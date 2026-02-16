import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
import { User, MessageCircle } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="pb-32">
      <section className="pt-20 pb-20 px-6 text-center">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter gradient-text">People Behind Team</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            TEAM is built by a growing group of designers, developers, and thinkers currently working across multiple AI product ideas.
          </p>
        </AnimatedSection>
      </section>

      <AnimatedSection className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member: any, idx) => (
            <div key={idx} className="group p-8 bg-gray-900/30 border border-purple-900/10 rounded-3xl hover:border-purple-500/30 transition-all transform hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-3 transition-transform overflow-hidden relative border border-purple-500/20">
                  {member.imageUrl ? (
                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover object-top" />
                  ) : (
                    <User className="w-10 h-10 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-black text-white italic mb-1 tracking-tight">{member.name}</h3>
                <p className="text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 italic opacity-80">"{member.bio}"</p>
              </div>
              
              <div className="pt-4 border-t border-purple-900/10 flex justify-center">
                <a 
                  href={member.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-gray-900/50 rounded-xl hover:bg-green-600/10 hover:border-green-500/50 border border-purple-900/10 transition-all flex items-center justify-center space-x-2 group/btn"
                  title="Contact on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-gray-400 group-hover/btn:text-green-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover/btn:text-green-400 transition-colors">WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
          {/* Join Us card */}
          <div className="group p-8 border-2 border-dashed border-purple-900/30 rounded-3xl flex flex-col items-center justify-center text-center space-y-4 hover:border-purple-500/50 transition-colors bg-purple-500/5">
            <div className="w-16 h-16 bg-gray-900/80 rounded-2xl flex items-center justify-center border border-purple-500/20">
              <span className="text-4xl text-purple-500 font-light">+</span>
            </div>
            <div>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">Join Us</h3>
              <p className="text-gray-500 text-xs font-medium">We are always looking for builders and researchers.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Team;
