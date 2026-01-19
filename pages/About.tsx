
import React from 'react';
import { ABOUT_CONTENT } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
import { CheckCircle2, Lightbulb, Workflow, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-32">
      {/* Header */}
      <section className="pt-20 pb-20 px-6 text-center">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter gradient-text">Identity & Philosophy</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are driven by problems worth solving, not just the trends of the moment.
          </p>
        </AnimatedSection>
      </section>

      {/* Who We Are */}
      <AnimatedSection className="max-w-5xl mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8">
            <div className="flex items-center space-x-4">
              <Lightbulb className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-black italic uppercase">Who We Are</h2>
            </div>
            <p className="text-2xl text-gray-300 leading-relaxed font-light">
              {ABOUT_CONTENT.whoWeAre}
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square bg-gradient-to-tr from-purple-600/20 to-indigo-600/20 rounded-3xl border border-purple-500/10 flex items-center justify-center p-12">
               <div className="relative w-full h-full border-2 border-dashed border-purple-500/20 rounded-full animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.8)]" />
               </div>
               <Brain className="absolute w-32 h-32 text-purple-500" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How We Work */}
      <AnimatedSection className="max-w-7xl mx-auto px-6 mb-32 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 grid grid-cols-2 gap-6">
          {ABOUT_CONTENT.howWeWork.map((item, idx) => (
            <div key={idx} className="p-6 bg-gray-900/40 border border-purple-900/10 rounded-2xl hover:scale-105 transition-transform">
              <CheckCircle2 className="w-8 h-8 text-green-500 mb-4" />
              <p className="font-bold text-white">{item}</p>
            </div>
          ))}
        </div>
        <div className="order-1 md:order-2 space-y-8">
           <div className="flex items-center space-x-4">
              <Workflow className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-black italic uppercase">How We Work</h2>
            </div>
            <p className="text-xl text-gray-400 leading-relaxed">
              Our methodology is built on speed, precision, and continuous iteration. We believe that small, dedicated teams can outperform large conglomerates through sheer focus and alignment.
            </p>
        </div>
      </AnimatedSection>

      {/* Why AI */}
      <AnimatedSection className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-purple-900/20 via-black to-indigo-900/20 p-16 rounded-[4rem] border border-purple-500/20 text-center space-y-8">
          <h2 className="text-4xl font-black italic uppercase">Why AI?</h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            "{ABOUT_CONTENT.whyAi}"
          </p>
        </div>
      </AnimatedSection>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
