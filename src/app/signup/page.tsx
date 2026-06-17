"use client";

import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  ShieldCheck, 
  Mail, 
  Lock, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Globe2,
  Activity,
  FileText,
  User
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const steps = ["Institutional Identity", "Verification Nodes", "Grid Access"];

export default function SignupPage() {
  const [step, setStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleNext = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(step + 1);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-stretch">
          {/* Left Side: Context & Branding */}
          <div className="hidden lg:flex flex-col justify-between py-12">
            <div className="space-y-8">
               <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-600/20">
                  <Building2 className="w-8 h-8 text-white" />
               </div>
               <div className="space-y-4">
                  <h1 className="text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                    Onboard Your <br />
                    <span className="text-blue-600">Institution</span> to the Grid.
                  </h1>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed">
                    Join the global infrastructure for pharmaceutical redistribution. Access a verified inventory of surplus life-saving medications.
                  </p>
               </div>
            </div>

            <div className="space-y-8">
               {[
                 { title: "Institutional Credentialing", desc: "Rigorous vetting of facility licenses and professional certifications.", icon: ShieldCheck },
                 { title: "Unified Distribution Map", desc: "Access the global vector of therapeutic surplus in real-time.", icon: Globe2 },
                 { title: "ISO 27001 Security", desc: "Enterprise-grade data protection for your institutional records.", icon: Lock }
               ].map((item, i) => (
                 <div key={i} className="flex gap-5">
                    <div className="w-10 h-10 bg-slate-50 text-blue-600 rounded-lg flex items-center justify-center border border-slate-100 flex-shrink-0">
                       <item.icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                       <h4 className="font-bold text-slate-900">{item.title}</h4>
                       <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Right Side: Step-by-Step Form */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm relative overflow-hidden">
             {/* Progress Stepper */}
             <div className="flex items-center gap-4 mb-12">
                {steps.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 flex-1">
                     <div className={cn(
                       "h-1.5 flex-1 rounded-full transition-all duration-700",
                       step >= i ? "bg-blue-600" : "bg-slate-200"
                     )} />
                  </div>
                ))}
             </div>

             <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                     <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900">Institutional Identity</h3>
                        <p className="text-sm text-slate-500 font-medium">Please provide your official healthcare entity details.</p>
                     </div>

                     <div className="space-y-5">
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Legal Entity Name</label>
                           <input type="text" placeholder="e.g. Global Health Hub" className="med-input w-full" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Institutional Email</label>
                           <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <input type="email" placeholder="admin@institution.org" className="med-input w-full pl-12" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Jurisdiction / Country</label>
                           <input type="text" placeholder="Select Country" className="med-input w-full" />
                        </div>
                     </div>

                     <button 
                      onClick={handleNext}
                      disabled={isProcessing}
                      className="med-button-primary w-full py-4 text-lg shadow-xl shadow-blue-600/20"
                     >
                        {isProcessing ? "Validating Entity..." : "Continue to Verification"}
                        <ArrowRight className="w-5 h-5" />
                     </button>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                     <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900">Verification Nodes</h3>
                        <p className="text-sm text-slate-500 font-medium">Upload licensing documentation for grid validation.</p>
                     </div>

                     <div className="grid gap-6">
                        <div className="p-8 border-2 border-dashed border-slate-200 rounded-2xl bg-white flex flex-col items-center justify-center text-center space-y-4 hover:border-blue-400 transition-all cursor-pointer">
                           <FileText className="w-10 h-10 text-slate-300" />
                           <div>
                              <p className="text-sm font-bold text-slate-900">Medical Facility License</p>
                              <p className="text-xs text-slate-400 mt-1">PDF or PNG up to 10MB</p>
                           </div>
                        </div>
                        <div className="p-6 bg-white border border-slate-200 rounded-2xl flex items-center justify-between">
                           <div className="flex items-center gap-4">
                              <User className="w-5 h-5 text-blue-600" />
                              <span className="text-sm font-bold text-slate-700">Director Pharmacist Credential</span>
                           </div>
                           <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        </div>
                     </div>

                     <div className="flex gap-4">
                        <button onClick={() => setStep(0)} className="med-button-secondary py-4 px-8">
                           <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={handleNext}
                          disabled={isProcessing}
                          className="med-button-primary flex-1 py-4 text-lg"
                        >
                           {isProcessing ? "Processing Docs..." : "Finalize Grid Access"}
                        </button>
                     </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-10 py-10"
                  >
                     <div className="w-24 h-24 bg-emerald-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30">
                        <CheckCircle2 className="w-12 h-12 text-white" />
                     </div>
                     <div className="space-y-4">
                        <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Onboarding <br /> <span className="text-emerald-500">Successful.</span></h3>
                        <p className="text-slate-500 font-medium">Your institution is now pending a node audit. Our global team will contact you within 24 hours.</p>
                     </div>
                     <Link href="/dashboard" className="med-button-primary w-full py-5 text-lg shadow-xl shadow-blue-600/20">
                        Access Command Center
                     </Link>
                  </motion.div>
                )}
             </AnimatePresence>

             {/* Footer Info */}
             {step < 2 && (
               <div className="mt-12 pt-8 border-t border-slate-200 text-center">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Redistribution Network v4.0</p>
                  <div className="flex items-center justify-center gap-2 mt-4 text-[10px] font-bold text-blue-600">
                     <ShieldCheck className="w-3 h-3" />
                     SECURE ENCRYPTED ENROLLMENT
                  </div>
               </div>
             )}
          </div>
        </div>
      </div>
    </main>
  );
}
