
import React from 'react';
import { LEADERSHIP_CONTENT } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
import { Linkedin, Mail, MessageCircle, Rocket } from 'lucide-react';

const Leadership: React.FC = () => {
  return (
    <div className="pb-32">
      <section className="pt-20 pb-20 px-6 text-center">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter gradient-text">Founders</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The architects of TEAM. Combining deep technical research with human-centered product design.
          </p>
        </AnimatedSection>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {LEADERSHIP_CONTENT.map((leader, idx) => (
          <AnimatedSection key={leader.name} className="relative">
            <div className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-start`}>
              {/* Profile Card - Only sticky on md+ to avoid mobile overlap */}
              <div className="w-full md:w-1/3 md:sticky md:top-32">
                <div className="p-1 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-[2.5rem]">
                  <div className="bg-black p-8 rounded-[2.4rem]">
                    <div className="w-full aspect-square rounded-3xl bg-gray-900 flex items-center justify-center mb-8 relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                       <Rocket className="w-24 h-24 text-purple-500/20" />
                       <div className="absolute bottom-6 left-6 text-left">
                          <h3 className="text-2xl font-black text-white italic">{leader.name}</h3>
                          <p className="text-purple-400 font-bold uppercase text-sm tracking-widest">{leader.role}</p>
                       </div>
                    </div>
                    {/* Social Buttons */}
                    <div className="grid grid-cols-3 gap-3">
                      <a 
                        href={leader.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-900 rounded-xl hover:bg-blue-600/20 hover:border-blue-500 border border-transparent transition-all flex justify-center"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400" />
                      </a>
                      <a 
                        href={leader.whatsapp} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-900 rounded-xl hover:bg-green-600/20 hover:border-green-500 border border-transparent transition-all flex justify-center"
                        title="WhatsApp"
                      >
                        <MessageCircle className="w-5 h-5 text-gray-400 hover:text-green-400" />
                      </a>
                      <a 
                        href={leader.email} 
                        className="p-3 bg-gray-900 rounded-xl hover:bg-purple-600/20 hover:border-purple-500 border border-transparent transition-all flex justify-center"
                        title="Email"
                      >
                        <Mail className="w-5 h-5 text-gray-400 hover:text-purple-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Skills */}
              <div className="flex-1 space-y-12">
                <div className="space-y-6">
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-purple-500 text-center md:text-left">About</h4>
                  <p className="text-2xl text-gray-300 leading-relaxed font-light text-center md:text-left">
                    {leader.bio}
                  </p>
                </div>
                
                <div className="space-y-8">
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-purple-500 text-center md:text-left">Core Expertise</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {leader.skills.map((skill, i) => (
                      <div key={i} className="group p-5 bg-gray-900/50 border border-purple-900/20 rounded-2xl hover:border-purple-500/50 transition-all flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-4 group-hover:scale-150 transition-transform" />
                        <span className="text-gray-300 group-hover:text-white font-medium">{skill}</span>
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
