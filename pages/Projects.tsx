
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_CONTENT } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
import { Sparkles, Activity, Plus, Box, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="pb-32 bg-black min-h-screen">
      {/* Page Header */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black opacity-50 z-0" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-black uppercase tracking-[0.3em] mb-8"
            >
              <Box className="w-4 h-4" />
              <span>Current Portfolio</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 italic uppercase tracking-tighter gradient-text leading-none">
              What We're <br /> Building
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Designing and developing AI-driven products that create meaningful impact at scale. Our focus is utility driven by intent.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 space-y-32 mt-12">
        {PROJECTS_CONTENT.map((project, idx) => (
          <AnimatedSection key={project.id}>
            <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
              {/* Project Visualization */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden bg-gray-900/50 border border-purple-900/30 purple-glow transition-all duration-700 group-hover:border-purple-500/50">
                  {/* Decorative background pattern */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
                  
                  {/* Glowing core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-purple-600 blur-[80px] opacity-20" />
                      {project.id === "01" ? (
                        <Sparkles className="w-32 h-32 text-purple-400 relative z-10" />
                      ) : (
                        <Activity className="w-32 h-32 text-indigo-400 relative z-10" />
                      )}
                    </motion.div>
                  </div>

                  {/* Status Overlay */}
                  <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                    <div className="space-y-2">
                       <span className="text-gray-500 text-xs font-black uppercase tracking-widest block">Project ID</span>
                       <span className="text-4xl font-black text-white italic">#{project.id}</span>
                    </div>
                    <div className="flex items-center space-x-3 px-6 py-3 bg-black/80 backdrop-blur-md rounded-2xl border border-purple-500/20">
                      <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                      <span className="text-xs font-black text-white uppercase tracking-widest">{project.status}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-10 text-left">
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-6xl font-black italic uppercase text-white tracking-tighter leading-tight">
                    {project.name}
                  </h2>
                  <div className="w-20 h-2 bg-purple-600 rounded-full" />
                </div>

                <p className="text-2xl text-gray-300 leading-relaxed font-light italic">
                  "{project.description}"
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  <div className="p-6 bg-gray-900/40 rounded-3xl border border-purple-900/10 group-hover:bg-purple-900/5 transition-colors">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-purple-500 mb-4 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Our Intent
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.id === "01" 
                        ? "Modernizing ancient insights with data-driven AI models for clear, personalized daily guidance."
                        : "Prioritizing privacy and empathy to create a global toolset for mental wellness and tracking."}
                    </p>
                  </div>
                  <div className="p-6 bg-gray-900/40 rounded-3xl border border-purple-900/10 group-hover:bg-purple-900/5 transition-colors">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-purple-500 mb-4 flex items-center">
                      <Plus className="w-4 h-4 mr-2" />
                      Status
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed uppercase font-bold tracking-widest">
                      {project.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Future Vision Section */}
      <AnimatedSection className="max-w-5xl mx-auto px-6 mt-48 text-center">
        <div className="p-16 rounded-[4rem] bg-gradient-to-b from-purple-900/10 to-transparent border border-purple-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.1),transparent)]" />
          <h3 className="text-3xl font-black italic uppercase text-white mb-6">Sustainable Growth</h3>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
            We prioritize sustainable growth over short-term launches. Our product ecosystem is designed to evolve alongside our users' lives, creating long-term value.
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block p-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"
          >
            <div className="px-10 py-4 bg-black rounded-full font-black uppercase italic tracking-widest text-sm hover:bg-transparent transition-colors duration-300">
              Future Roadmap
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Projects;
