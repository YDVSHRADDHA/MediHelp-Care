"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, Pill, Heart, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-white overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-50 border border-blue-100">
            <Activity className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Enterprise Medical Distribution v4.0</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Global <span className="text-blue-600">Medicine</span> <br />
            Redistribution <br />
            Framework.
          </h1>

          <p className="text-xl text-slate-500 max-w-xl leading-relaxed">
            Reducing pharmaceutical waste by connecting surplus verified medications to accredited healthcare providers and patients in need globally.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/signup"
              className="med-button-primary px-10 py-5 text-lg"
            >
              Initialize Donation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/discover"
              className="med-button-secondary px-10 py-5 text-lg"
            >
              Browse Inventory
              <Search className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex items-center gap-10 pt-10 border-t border-slate-100">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">42,800+</span>
              <span className="text-sm font-medium text-slate-400">Verified Units Saved</span>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">98.4%</span>
              <span className="text-sm font-medium text-slate-400">Distribution Efficiency</span>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">450+</span>
              <span className="text-sm font-medium text-slate-400">NGO Partners</span>
            </div>
          </div>
        </motion.div>

        {/* Professional Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] w-full max-w-[550px] mx-auto group">
            <div className="absolute inset-0 bg-blue-600/10 rounded-2xl -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
            <div className="absolute inset-0 bg-slate-900/5 rounded-2xl rotate-2 transition-transform group-hover:rotate-0 duration-500" />
            
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000" 
                alt="Medical Supplies" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-med rounded-xl border border-white/20 shadow-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Protocol V4.0</p>
                    <p className="text-sm font-bold text-slate-900">Pharmacist-Verified Supply</p>
                  </div>
                </div>
                <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: "98%" }}
                     transition={{ duration: 1.5, delay: 0.5 }}
                     className="h-full bg-blue-600" 
                   />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
