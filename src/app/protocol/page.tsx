"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  FileSearch, 
  ClipboardCheck, 
  Activity, 
  Lock, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Search
} from "lucide-react";

export default function ProtocolPage() {
  const steps = [
    {
      title: "Neural Batch Identification",
      desc: "Every medication unit is scanned using our Vision Intelligence to extract batch numbers, manufacturing dates, and digital pedigrees.",
      icon: FileSearch
    },
    {
      title: "Therapeutic Integrity Check",
      desc: "Pharmacists verify the storage conditions and chemical stability markers to ensure the medication meets all clinical standards.",
      icon: Activity
    },
    {
      title: "Regulatory Cross-Reference",
      desc: "Automatic compliance check against FDA Title II and regional healthcare redistribution laws in 42 countries.",
      icon: ShieldCheck
    },
    {
      title: "Immutable Ledger Logging",
      desc: "Once verified, the unit is logged on our centralized ledger for end-to-end tracking from donor to patient.",
      icon: Lock
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-40 pb-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded">
              <ShieldCheck className="w-4 h-4" />
              Standard Protocol v4.0
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
              Institutional <span className="text-blue-600">Verification</span> Protocol.
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              MediHelp maintains the world&apos;s most rigorous pharmaceutical redistribution standards to ensure patient safety and ecosystem trust.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-3xl p-12 text-white relative overflow-hidden flex flex-col justify-between">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
             
             <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                      <FileText className="w-6 h-6 text-blue-400" />
                   </div>
                   <h4 className="text-xl font-bold">Protocol Documentation</h4>
                </div>
                <p className="text-slate-400 font-medium leading-relaxed">
                  Our full redistribution protocol is available for institutional review. 
                  Download the whitepaper to understand our technical compliance framework.
                </p>
                <button className="med-button-primary w-full bg-white text-slate-900 hover:bg-slate-100">
                  Download Protocol PDF
                </button>
             </div>

             <div className="pt-12 relative z-10">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                   <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-500">
                      <span>Network Integrity Score</span>
                      <span className="text-blue-400">99.8%</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "99.8%" }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-blue-600" 
                      />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Compliance Badge Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 grayscale opacity-50">
            <div className="flex flex-col items-center gap-4 text-center">
               <ShieldCheck className="w-12 h-12" />
               <span className="text-[10px] font-black uppercase tracking-widest">ISO 27001 Certified</span>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
               <CheckCircle2 className="w-12 h-12" />
               <span className="text-[10px] font-black uppercase tracking-widest">HIPAA Compliant</span>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
               <Activity className="w-12 h-12" />
               <span className="text-[10px] font-black uppercase tracking-widest">DSCSA Regulated</span>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
               <AlertCircle className="w-12 h-12" />
               <span className="text-[10px] font-black uppercase tracking-widest">GDPR Protected</span>
            </div>
         </div>
      </section>
    </main>
  );
}
