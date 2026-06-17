"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star, ShieldCheck, Zap, Activity } from "lucide-react";

const stories = [
  {
    quote: "The efficiency of the MediHelp redistribution framework enabled our clinic to secure critical cardiac medications during a supply chain disruption. A vital infrastructure for community health.",
    author: "Dr. Elena Rodriguez",
    role: "Chief Medical Officer, HealthFirst Hub",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
  },
  {
    quote: "MediHelp's verification protocol provides the peace of mind required for institutional medication redistribution. It has transformed how we handle surplus pharmaceutical inventory.",
    author: "James Lancaster",
    role: "Director of Operations, PharmaCare Alliance",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
  {
    quote: "Joining as a Validator allowed me to apply my expertise to a global problem. The technical platform is robust, and the impact on patient access is measurable and profound.",
    author: "Dr. Sarah Kim",
    role: "Lead Clinical Pharmacist",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahK",
  },
];

const SuccessStories = () => {
  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest rounded-md">
              <Activity className="w-3.5 h-3.5" />
              Institutional Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2]">
              Measured Impact Across <br />
              The Healthcare Ecosystem.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="p-10 bg-slate-50 border border-slate-100 rounded-xl relative group hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-blue-600/10 mb-6 group-hover:text-blue-600/20 transition-colors" />
              
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 italic">
                &quot;{story.quote}&quot;
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="w-12 h-12 rounded-lg bg-white overflow-hidden border border-slate-100 shadow-sm relative">
                  <Image src={story.image} alt={story.author} fill />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight">{story.author}</h4>
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{story.role}</p>
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
