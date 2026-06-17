"use client";

import { useAppStore } from "@/store/appStore";
import { motion } from "framer-motion";
import { History, Package, Clock, CheckCircle2, ArrowRight, ExternalLink, Activity, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function DonationsHistoryPage() {
  const { medicines, currentUser } = useAppStore();

  const userMeds = medicines.filter(m => m.donorId === currentUser?.id);

  return (
    <div className="space-y-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Donation History</h2>
          <p className="text-slate-500 font-medium">Tracking the lifecycle of your pharmaceutical contributions.</p>
        </div>
        
        <div className="flex items-center gap-3">
           <div className="px-4 py-2 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Real-time Ledger Connected
           </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 p-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
           <div className="col-span-5">Medication & Batch</div>
           <div className="col-span-2 text-center">Protocol Status</div>
           <div className="col-span-2 text-center">Quantity</div>
           <div className="col-span-3 text-right">Verification Node</div>
        </div>

        <div className="divide-y divide-slate-100">
          {userMeds.length > 0 ? (
            userMeds.map((med) => (
              <div key={med.id} className="grid grid-cols-12 p-6 items-center hover:bg-slate-50/50 transition-colors group">
                 <div className="col-span-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg relative overflow-hidden border border-slate-200">
                       <Image src={med.image || "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200"} alt={med.name} fill className="object-cover" />
                    </div>
                    <div>
                       <h4 className="text-sm font-bold text-slate-900">{med.name}</h4>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Expiry: {med.expiry}</p>
                    </div>
                 </div>
                 
                 <div className="col-span-2 flex justify-center">
                    <div className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5",
                      med.status === "AVAILABLE" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
                    )}>
                       {med.status === "AVAILABLE" ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                       {med.status}
                    </div>
                 </div>

                 <div className="col-span-2 text-center text-sm font-bold text-slate-700">
                    {med.quantity}
                 </div>

                 <div className="col-span-3 text-right space-y-1">
                    <p className="text-xs font-bold text-slate-900">{med.location}</p>
                    <div className="flex items-center justify-end gap-1.5">
                       <ShieldCheck className="w-3 h-3 text-blue-500" />
                       <span className="text-[10px] font-bold text-blue-600 uppercase">Verified</span>
                    </div>
                 </div>
              </div>
            ))
          ) : (
            <div className="p-24 text-center space-y-6">
               <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto border border-slate-100">
                  <Package className="w-10 h-10 text-slate-200" />
               </div>
               <div className="space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">No Historical Records</h4>
                  <p className="text-sm text-slate-500 font-medium">Your pharmaceutical distribution history will appear here.</p>
               </div>
               <Link href="/dashboard/donate" className="med-button-primary mx-auto">
                  Initialize First Donation
               </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
