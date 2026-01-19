
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Globe } from 'lucide-react';
import { HOME_CONTENT } from '../constants';
import AnimatedSection from '../components/AnimatedSection';

const Home: React.FC = () => {
  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight gradient-text"
          >
            {HOME_CONTENT.hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {HOME_CONTENT.hero.subheading}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/projects"
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center group"
            >
              Explore Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/roadmap"
              className="px-8 py-4 bg-gray-900 border border-purple-500/20 text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
            >
              Our Vision
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <AnimatedSection className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="p-12 bg-gray-900/50 border border-purple-900/20 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Zap className="w-32 h-32 text-purple-500" />
          </div>
          <h2 className="text-3xl font-black mb-6 flex items-center">
            <Zap className="w-8 h-8 text-purple-500 mr-4" />
            Our Vision
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed italic">"{HOME_CONTENT.vision}"</p>
        </div>
        <div className="p-12 bg-gray-900/50 border border-purple-900/20 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Target className="w-32 h-32 text-indigo-500" />
          </div>
          <h2 className="text-3xl font-black mb-6 flex items-center">
            <Target className="w-8 h-8 text-indigo-500 mr-4" />
            Our Mission
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed italic">"{HOME_CONTENT.mission}"</p>
        </div>
      </AnimatedSection>

      {/* Timeline Section */}
      <AnimatedSection className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black gradient-text mb-4 italic uppercase">Our Journey</h2>
          <div className="w-24 h-1.5 bg-purple-600 mx-auto rounded-full" />
        </div>
        <div className="relative border-l border-purple-900/30 ml-4 md:ml-0 md:flex md:border-l-0 md:justify-between space-y-12 md:space-y-0">
          {HOME_CONTENT.journey.map((item, idx) => (
            <div key={idx} className="relative md:w-1/4 px-8 group">
              <div className="hidden md:block absolute top-0 left-0 right-0 h-0.5 bg-purple-900/30 mt-4" />
              <div className="absolute top-0 left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-4 border-purple-600 z-10 transition-transform group-hover:scale-125" />
              <div className="pt-12">
                <span className="text-purple-400 font-black text-2xl block mb-2">{item.year}</span>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* What We Do */}
      <AnimatedSection className="max-w-7xl mx-auto px-6 bg-purple-600/5 py-24 rounded-[3rem] border border-purple-500/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4 italic uppercase">What We Do</h2>
          <p className="text-gray-400">Pioneering AI at every scale.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {HOME_CONTENT.whatWeDo.map((block, idx) => (
            <div key={idx} className="p-8 bg-black/40 border border-purple-900/20 rounded-2xl hover:border-purple-500 transition-colors group">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                {idx === 0 && <Zap className="w-6 h-6 text-purple-400 group-hover:text-white" />}
                {idx === 1 && <Globe className="w-6 h-6 text-purple-400 group-hover:text-white" />}
                {idx === 2 && <Target className="w-6 h-6 text-purple-400 group-hover:text-white" />}
              </div>
              <h3 className="text-xl font-bold mb-4">{block.title}</h3>
              <p className="text-gray-400 leading-relaxed">{block.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
