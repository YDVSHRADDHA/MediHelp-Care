"use client";

import { useAppStore } from "@/store/appStore";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Search, 
  FileCheck, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  ClipboardList,
  Activity,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function VerificationQueuePage() {
  const { medicines, updateStatus, addNotification } = useAppStore();
  const [verifyingId, setVerifyingId] = useState<string | null>(null);

  // For this mock, we'll show all medicines but assume some need "re-verification" or are new
  const queue = medicines.slice(0, 5);

  const handleVerify = async (id: string, name: string) => {
    setVerifyingId(id);
    // Simulate rigorous pharmaceutical verification protocol
    await new Promise(r => setTimeout(r, 2000));
    
    updateStatus(id, "AVAILABLE");
    addNotification(`Protocol verified for ${name}. Batch is now live.`, "success");
    setVerifyingId(null);
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Compliance Queue</h2>
          <p className="text-slate-500 font-medium">Pharmacist-led verification protocol for incoming inventory.</p>
        </div>
        
        <div className="flex items-center gap-3">
           <div className="px-4 py-2 bg-slate-900 text-blue-400 text-xs font-bold rounded-lg border border-white/10 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Pharmacist Node: ACTIVE
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
               <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  <ClipboardList className="w-4 h-4 text-blue-600" />
                  Pending Protocol Review
               </h3>
               <span className="text-[10px] font-bold text-slate-400">{queue.length} Tasks Remaining</span>
            </div>

            <div className="divide-y divide-slate-100">
              {queue.map((item) => (
                <div key={item.id} className="p-8 flex flex-col sm:flex-row items-center gap-8 group">
                   <div className="w-24 h-24 rounded-xl relative overflow-hidden border border-slate-200 flex-shrink-0">
                      <Image src={item.image || "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200"} alt={item.name} fill className="object-cover" />
                   </div>
                   
                   <div className="flex-1 space-y-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                           <h4 className="text-xl font-bold text-slate-900">{item.name}</h4>
                           <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded">BATCH #{item.id.toUpperCase()}</span>
                        </div>
                        <p className="text-sm text-slate-500 font-medium">Redistributed via {item.location}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                         <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-md">
                            <AlertCircle className="w-3.5 h-3.5" />
                            Expiry Check Required
                         </div>
                         <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-md">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Tamper-Seal Review
                         </div>
                      </div>
                   </div>

                   <button 
                    onClick={() => handleVerify(item.id, item.name)}
                    disabled={verifyingId === item.id}
                    className={cn(
                      "med-button-primary py-4 px-8 text-sm group-hover:shadow-blue-600/20",
                      verifyingId === item.id ? "opacity-50" : ""
                    )}
                   >
                      {verifyingId === item.id ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        <>
                          Initialize Protocol
                          <FileCheck className="w-4 h-4" />
                        </>
                      )}
                   </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-slate-900 rounded-2xl p-8 text-white space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <ShieldCheck className="w-12 h-12 text-blue-400" />
              <div className="space-y-2">
                <h4 className="text-xl font-bold tracking-tight">Compliance Standards</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  Your verification confirms the medication adheres to FDA Title II (DSCSA) 
                  guidelines for redistribution.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                 <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-500 uppercase tracking-widest">Trust Ranking</span>
                    <span className="text-blue-400">#04 Global Node</span>
                 </div>
              </div>
           </div>

           <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Protocol Stats</h4>
              <div className="space-y-4">
                 <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-500">Meds Verified (24h)</span>
                    <span className="font-bold text-slate-900">142 Units</span>
                 </div>
                 <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-500">Avg Protocol Speed</span>
                    <span className="font-bold text-slate-900">1.8s</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
