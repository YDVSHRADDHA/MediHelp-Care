"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera, 
  Upload, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft,
  Pill,
  Calendar,
  AlertCircle,
  Loader2,
  Scan,
  Database,
  ShieldCheck,
  Package,
  Activity,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/appStore";
import { useRouter } from "next/navigation";

const steps = ["Neural Scan", "Protocol Verification", "Final Listing"];

export default function DonatePage() {
  const router = useRouter();
  const { addMedicine, addNotification, currentUser } = useAppStore();
  const [step, setStep] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "Amoxicillin 500mg",
    expiry: "Oct 2026",
    quantity: "20 Capsules",
    condition: "SEALED",
    location: "Brooklyn Medical Hub",
    category: "Antibiotics"
  });

  const handleUpload = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setStep(1);
      addNotification("Neural scan complete. Batch data extracted.", "info");
    }, 2500);
  };

  const handleSubmit = async () => {
    if (!currentUser) return;
    
    setIsScanning(true);
    await new Promise(r => setTimeout(r, 1000));
    
    addMedicine({
      name: formData.name,
      category: formData.category,
      expiry: formData.expiry,
      location: formData.location,
      quantity: formData.quantity,
      verified: true, // Auto-verified for demo/prototype flow
      status: "AVAILABLE",
      donorId: currentUser.id,
      image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800"
    });

    addNotification("Inventory protocol initialized. Listing is now live.", "success");
    setStep(2);
    setIsScanning(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* 2026 Stepper */}
      <div className="flex items-center justify-center gap-4">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className={cn(
              "px-6 py-3 rounded-xl flex items-center gap-3 transition-all duration-500 border",
              step === i 
                ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20 border-blue-600" 
                : step > i 
                  ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                  : "bg-white text-slate-400 border-slate-100"
            )}>
              {step > i ? <CheckCircle2 className="w-5 h-5" /> : <span className="text-sm font-bold">{i + 1}</span>}
              <span className="text-xs font-bold uppercase tracking-widest">{s}</span>
            </div>
            {i !== steps.length - 1 && (
              <ChevronRight className="w-4 h-4 text-slate-200" />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid lg:grid-cols-2 gap-10 items-stretch"
          >
            <div className="bg-white rounded-2xl border border-slate-200 p-12 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                 <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Scan className="w-8 h-8 text-blue-600" />
                 </div>
                 <h3 className="text-4xl font-bold text-slate-900 tracking-tight leading-none">
                    Pharmaceutical <br />
                    <span className="text-blue-600">Scan Protocol.</span>
                 </h3>
                 <p className="text-lg text-slate-500 font-medium leading-relaxed">
                    Our Vision Intelligence extracts pharmaceutical data, shelf-life metrics, and safety markers from your medication packaging.
                 </p>
              </div>

              <div className="space-y-4 pt-12">
                 <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-100">
                    <Database className="w-4 h-4" />
                    Global Drug Database Connected
                 </div>
                 <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-100">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Pharmacist Verification Mode: ACTIVE
                 </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-12 flex flex-col items-center justify-center relative overflow-hidden group">
               {isScanning && (
                 <motion.div 
                    initial={{ top: 0 }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-1 bg-blue-500/50 blur-md z-20"
                 />
               )}
               
               <div className="relative z-10 text-center space-y-8 w-full">
                  <div className="w-24 h-24 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-500">
                     {isScanning ? (
                        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                     ) : (
                        <Camera className="w-10 h-10 text-white" />
                     )}
                  </div>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={handleUpload}
                      disabled={isScanning}
                      className="med-button-primary w-full py-5 text-lg shadow-2xl"
                    >
                      {isScanning ? "Processing Framework..." : "Launch Camera Protocol"}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="med-button-secondary w-full py-5 bg-white/5 border-white/10 text-white hover:bg-white/10 text-lg transition-all">
                      Browse Local Files
                    </button>
                  </div>
               </div>
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-2xl border border-slate-200 p-12 shadow-sm"
          >
            <div className="space-y-10">
              <div className="flex items-center justify-between border-b border-slate-100 pb-8">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight">System Verification</h3>
                  <p className="text-lg text-slate-500 font-medium mt-1">Review the extracted data for absolute accuracy.</p>
                </div>
                <div className="px-5 py-2.5 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-bold border border-emerald-100 flex items-center gap-3">
                  <Activity className="w-4 h-4" />
                  98.4% Scan Confidence
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Medication Name</label>
                  <div className="relative">
                    <Pill className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-600" />
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="med-input w-full pl-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Expiration Protocol</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500" />
                    <input 
                      type="text" 
                      value={formData.expiry}
                      onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                      className="med-input w-full pl-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Quantity Count</label>
                  <input 
                    type="text" 
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    className="med-input w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Transfer Location</label>
                  <input 
                    type="text" 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="med-input w-full"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6 pt-10">
                <button 
                  onClick={() => setStep(0)}
                  className="med-button-secondary py-5 px-10"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Restart Scan
                </button>
                <button 
                  onClick={handleSubmit}
                  disabled={isScanning}
                  className="med-button-primary flex-1 py-5 text-lg shadow-xl shadow-blue-600/20"
                >
                  {isScanning ? <Loader2 className="w-6 h-6 animate-spin" /> : "Finalize Distribution"}
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl border border-slate-200 p-16 shadow-2xl text-center relative overflow-hidden"
          >
            <div className="relative z-10 max-w-xl mx-auto space-y-10">
              <div className="w-24 h-24 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="text-5xl font-bold tracking-tight text-slate-900 leading-none">
                   Listing <br />
                   <span className="text-emerald-500">Active.</span>
                </h3>
                <p className="text-xl text-slate-500 font-medium">
                  Your donation has been verified and added to the Global Inventory Hub. Thank you for your contribution.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => router.push("/dashboard")}
                  className="med-button-primary w-full py-5 text-lg shadow-2xl"
                >
                  View Inventory Logs
                </button>
                <button 
                  onClick={() => setStep(0)}
                  className="med-button-secondary w-full py-5 text-lg"
                >
                  List Another Batch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
