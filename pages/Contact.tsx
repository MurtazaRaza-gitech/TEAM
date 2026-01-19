
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Globe, Phone } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pb-32">
      <section className="pt-20 pb-20 px-6 text-center">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter gradient-text">Get In Touch</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Whether you want to collaborate, learn more about our products, or reach out for general inquiries, we'd love to hear from you.
          </p>
        </AnimatedSection>
      </section>

      <AnimatedSection className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Info Side */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase italic">Contact Info</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-6 bg-gray-900/40 rounded-2xl border border-purple-900/10">
                <div className="p-3 bg-purple-600/20 rounded-xl">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Email Us</p>
                  <p className="text-lg text-white font-medium">Vyora.ai001@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gray-900/40 rounded-2xl border border-purple-900/10">
                <div className="p-3 bg-green-600/20 rounded-xl">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Phone</p>
                  <p className="text-lg text-white font-medium">+92 312 7641850</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gray-900/40 rounded-2xl border border-purple-900/10">
                <div className="p-3 bg-indigo-600/20 rounded-xl">
                  <Globe className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Social</p>
                  <p className="text-lg text-white font-medium">@use_team_ai</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-3xl border border-purple-500/10">
            <h4 className="text-white font-black italic mb-4">FOR INVESTORS</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are currently in early-stage development. For strategic partnership inquiries, please include "PARTNERSHIP" in your subject line.
            </p>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-gray-900/20 p-8 md:p-12 rounded-[3rem] border border-purple-900/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Your Name</label>
              <input
                type="text"
                required
                className="w-full bg-black/50 border border-purple-900/30 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full bg-black/50 border border-purple-900/30 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Message</label>
              <textarea
                required
                rows={5}
                className="w-full bg-black/50 border border-purple-900/30 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="How can we build together?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-5 rounded-2xl font-black italic uppercase tracking-widest flex items-center justify-center space-x-3 transition-all ${
                submitted ? 'bg-green-600' : 'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              {submitted ? (
                <span>Message Sent!</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;
