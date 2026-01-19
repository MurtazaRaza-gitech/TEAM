import React from 'react';
import { LEADERSHIP_CONTENT } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
import { Linkedin, Mail, MessageCircle, Rocket } from 'lucide-react';

const Leadership: React.FC = () => {
  return (
    <div className="pb-32 overflow-hidden">
      {/* Header Section */}
      <section className="pt-20 pb-12 md:pb-24 px-6 text-center">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 italic uppercase tracking-tighter gradient-text leading-tight">
            Founders
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The architects of TEAM. Combining deep technical research with human-centered product design.
          </p>
        </AnimatedSection>
      </section>

      {/* Founders List */}
      <div className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-40">
        {LEADERSHIP_CONTENT.map((leader, idx) => (
          <AnimatedSection key={leader.name} className="relative">
            <div className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-start`}>
              
              {/* Profile Card - Sticky on Desktop ONLY, Relative on Mobile */}
              <div className="w-full md:w-5/12 lg:w-4/12 relative md:sticky md:top-32 z-10">
                <div className="p-0.5 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl">
                  <div className="bg-black p-6 md:p-8 rounded-[1.9rem] md:rounded-[2.4rem]">
                    {/* Icon Container */}
                    <div className="w-full h-48 sm:h-64 md:aspect-square rounded-2xl bg-gray-900/50 flex items-center justify-center mb-8 relative overflow-hidden group/img border border-purple-500/10">
                       <Rocket className="w-16 h-16 md:w-24 md:h-24 text-purple-500/20 group-hover/img:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    
                    {/* Identity */}
                    <div className="text-center mb-8">
                       <h3 className="text-2xl md:text-3xl font-black text-white italic tracking-tight">{leader.name}</h3>
                       <p className="text-purple-400 font-bold uppercase text-xs tracking-[0.3em] mt-2">{leader.role}</p>
                    </div>

                    {/* Social Buttons */}
                    <div className="grid grid-cols-3 gap-3">
                      <a 
                        href={leader.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 bg-gray-900/50 rounded-2xl hover:bg-blue-600/20 hover:border-blue-500/50 border border-purple-900/10 transition-all flex justify-center items-center group/soc"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 text-gray-400 group-hover/soc:text-blue-400 transition-colors" />
                      </a>
                      <a 
                        href={leader.whatsapp} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 bg-gray-900/50 rounded-2xl hover:bg-green-600/20 hover:border-green-500/50 border border-purple-900/10 transition-all flex justify-center items-center group/soc"
                        title="WhatsApp"
                      >
                        <MessageCircle className="w-5 h-5 text-gray-400 group-hover/soc:text-green-400 transition-colors" />
                      </a>
                      <a 
                        href={leader.email} 
                        className="p-4 bg-gray-900/50 rounded-2xl hover:bg-purple-600/20 hover:border-purple-500/50 border border-purple-900/10 transition-all flex justify-center items-center group/soc"
                        title="Email"
                      >
                        <Mail className="w-5 h-5 text-gray-400 group-hover/soc:text-purple-400 transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Skills Content */}
              <div className="flex-1 w-full space-y-12 md:space-y-16 relative z-0">
                {/* About Text */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-[2px] bg-purple-500 rounded-full" />
                    <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-purple-500">The Founder's Story</h4>
                  </div>
                  <p className="text-lg md:text-3xl text-gray-300 leading-relaxed font-light italic md:not-italic">
                    "{leader.bio}"
                  </p>
                </div>
                
                {/* Expertise Grid */}
                <div className="space-y-8">
                  <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-purple-500">Core Expertise & Focus</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {leader.skills.map((skill, i) => (
                      <div key={i} className="group p-5 bg-gray-900/20 border border-purple-900/10 rounded-2xl hover:border-purple-500/30 hover:bg-purple-900/5 transition-all flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-4 group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                        <span className="text-gray-300 group-hover:text-white font-medium text-sm md:text-lg leading-snug">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
