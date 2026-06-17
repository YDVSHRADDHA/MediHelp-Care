"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  Building2, 
  Globe2, 
  Heart, 
  Target, 
  Users, 
  ShieldCheck,
  Zap,
  ArrowRight
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-40 pb-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded">
              Institutional Framework
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Engineering a <br />
              <span className="text-blue-600">Waste-Free</span> Future.
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
              MediHelp is a global infrastructure project dedicated to solving the pharmaceutical surplus crisis through advanced logistics and verification protocols.
            </p>
          </div>
          
          <div className="relative aspect-square">
             <div className="absolute inset-0 bg-blue-600 rounded-3xl -rotate-6 scale-95 opacity-10" />
             <div className="relative h-full w-full rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" 
                  alt="Laboratory" 
                  fill 
                  className="object-cover" 
                />
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-100">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            {[
              { title: "Our Mission", desc: "To redistribute every unit of surplus medication to accredited healthcare nodes globally.", icon: Target },
              { title: "Global Reach", desc: "Operating in 42 countries with over 450 verified institutional partners.", icon: Globe2 },
              { title: "Impact Driven", desc: "Saved over 428,000 medication units and counting through our unified grid.", icon: Zap },
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-6">
                 <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                 <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
         </div>
      </section>

      <section className="section-spacing max-w-7xl mx-auto">
         <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
               <Image 
                 src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=1000" 
                 alt="Pharma Supply" 
                 fill 
                 className="object-cover" 
               />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
               <h2 className="text-4xl font-bold text-slate-900 tracking-tight">The Institutional Advantage</h2>
               <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  By digitizing the surplus lifecycle, we provide pharmaceutical manufacturers and healthcare providers 
                  with an immutable record of their positive social impact and waste reduction metrics.
               </p>
               <div className="space-y-4">
                  {[
                    "Pharmacist-led verification on every batch",
                    "End-to-end ePedigree tracking logs",
                    "Secure cold-chain redistribution vectors",
                    "Automated tax-incentive reporting for institutions"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <ShieldCheck className="w-5 h-5 text-blue-600" />
                       <span className="text-sm font-bold text-slate-700">{text}</span>
                    </div>
                  ))}
               </div>
               <button className="med-button-primary">
                  Learn About Our Compliance
                  <ArrowRight className="w-4 h-4" />
               </button>
            </div>
         </div>
      </section>
    </main>
  );
}
