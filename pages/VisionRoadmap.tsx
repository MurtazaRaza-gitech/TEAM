
import React from 'react';
import { ROADMAP_CONTENT } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
import { Milestone, Flag, Compass, CheckCircle } from 'lucide-react';

const VisionRoadmap: React.FC = () => {
  return (
    <div className="pb-32">
      <section className="pt-20 pb-20 px-6 text-center">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter gradient-text">Vision & Roadmap</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are building slowly and intentionally. Here's where we are headed.
          </p>
        </AnimatedSection>
      </section>

      <div className="max-w-4xl mx-auto px-6 space-y-24">
        {/* Short Term */}
        <AnimatedSection>
          <div className="flex items-center space-x-4 mb-12">
            <Flag className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-black italic uppercase">Short-Term</h2>
          </div>
          <div className="grid gap-6">
            {ROADMAP_CONTENT.shortTerm.map((item, idx) => (
              <div key={idx} className="p-8 bg-gray-900/40 border border-purple-900/20 rounded-2xl flex items-center space-x-6 hover:bg-purple-900/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 font-black">0{idx + 1}</span>
                </div>
                <p className="text-xl text-white font-medium">{item}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Long Term */}
        <AnimatedSection>
          <div className="flex items-center space-x-4 mb-12">
            <Compass className="w-8 h-8 text-indigo-500" />
            <h2 className="text-3xl font-black italic uppercase">Long-Term</h2>
          </div>
          <div className="grid gap-6">
            {ROADMAP_CONTENT.longTerm.map((item, idx) => (
              <div key={idx} className="p-8 bg-gray-900/40 border border-purple-900/20 rounded-2xl flex items-center space-x-6 hover:bg-indigo-900/10 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                   <Milestone className="w-24 h-24 text-indigo-500" />
                </div>
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-400 font-black">0{idx + 1}</span>
                </div>
                <p className="text-xl text-white font-medium">{item}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Quote */}
        <AnimatedSection className="text-center pt-24">
          <p className="text-3xl md:text-5xl font-black italic text-gray-700 leading-tight">
            "WE DON'T JUST PREDICT THE FUTURE, WE ARCHITECT IT."
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default VisionRoadmap;
