"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  Newspaper, 
  Download, 
  ExternalLink, 
  Calendar, 
  ArrowRight,
  MessageSquare,
  Globe2,
  Activity
} from "lucide-react";
import Image from "next/image";

const news = [
  {
    title: "MediHelp Expands Redistribution Grid to Sub-Saharan Africa",
    date: "May 10, 2026",
    category: "Expansion",
    desc: "Partnering with regional health authorities to establish 50 new verification nodes in Kenya and Rwanda."
  },
  {
    title: "Impact Report: $1.2M in Surplus Medications Saved in Q1",
    date: "April 22, 2026",
    category: "Impact",
    desc: "Our latest data shows a 24% increase in successful redistribution vectors compared to the previous quarter."
  },
  {
    title: "Technical Whitepaper: Neural Scan Protocol v4.0 Released",
    date: "March 15, 2026",
    category: "Technology",
    desc: "Introducing advanced computer vision for higher confidence in batch identification and expiry verification."
  }
];

export default function PressPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-40 pb-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded">
              Media Relations Center
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
              MediHelp in the <span className="text-blue-600">Global</span> Spotlight.
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Official press releases, brand assets, and institutional impact stories from the frontlines of medication redistribution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
         <div className="lg:col-span-2 space-y-12">
            <h2 className="text-3xl font-bold text-slate-900 border-b border-slate-100 pb-8">Latest Press Releases</h2>
            <div className="space-y-10">
               {news.map((item, i) => (
                 <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-4 group cursor-pointer"
                 >
                    <div className="flex items-center gap-4">
                       <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">
                          {item.category}
                       </span>
                       <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                       </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    <button className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all">
                       Read Full Protocol
                       <ArrowRight className="w-4 h-4" />
                    </button>
                 </motion.div>
               ))}
            </div>
         </div>

         <div className="space-y-10">
            <div className="bg-slate-900 rounded-3xl p-10 text-white space-y-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <Newspaper className="w-12 h-12 text-blue-400" />
               <h4 className="text-2xl font-bold tracking-tight">Institutional Media Kit</h4>
               <p className="text-sm text-slate-400 leading-relaxed font-medium">
                 Download high-resolution logos, executive headshots, and technical diagrams for media use.
               </p>
               <button className="med-button-primary w-full bg-white text-slate-900 hover:bg-slate-100">
                  <Download className="w-4 h-4" />
                  Download Assets (42MB)
               </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-10 space-y-8 shadow-sm">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                     <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Media Inquiries</h4>
               </div>
               <p className="text-sm text-slate-500 font-medium leading-relaxed">
                 Our communications team is available for interviews, data requests, and technical deep-dives.
               </p>
               <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Liaison</p>
                  <p className="text-sm font-bold text-slate-900">press@medihelp.io</p>
               </div>
               <button className="med-button-secondary w-full py-3 text-xs">
                  Request Interview
               </button>
            </div>
         </div>
      </section>
    </main>
  );
}
