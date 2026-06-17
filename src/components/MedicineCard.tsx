"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Pill, Calendar, MapPin, ShieldCheck, ArrowRight, Info, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { useAppStore } from "@/store/appStore";

interface MedicineCardProps {
  id: string;
  name: string;
  category: string;
  expiry: string;
  location: string;
  quantity: string;
  verified: boolean;
  image?: string;
  status: string;
  className?: string;
}

const MedicineCard = ({
  id,
  name,
  category,
  expiry,
  location,
  quantity,
  verified,
  image,
  status,
  className,
}: MedicineCardProps) => {
  const { reserveMedicine, currentUser, addNotification } = useAppStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleAccess = async () => {
    if (!currentUser) {
      addNotification("Please sign in to access medications.", "warning");
      return;
    }
    
    setIsProcessing(true);
    // Simulate network delay for production feel
    await new Promise(r => setTimeout(r, 1500));
    
    reserveMedicine(id, currentUser.id);
    addNotification(`${name} has been reserved for your pickup.`, "success");
    setIsProcessing(false);
    setShowConfirm(true);
  };

  return (
    <div className={cn("med-card group overflow-hidden flex flex-col relative", className)}>
      {/* Header/Image Section */}
      <div className="relative aspect-[16/10] bg-slate-50 border-b border-slate-100 overflow-hidden">
        {image ? (
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Pill className="w-12 h-12 text-slate-200" />
          </div>
        )}
        
        {/* Verification Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-md glass-med border border-white/20 shadow-sm z-10">
          {verified ? (
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              Pharmacist Verified
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-600 uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5" />
              Under Review
            </div>
          )}
        </div>

        {/* Status Overlay */}
        <AnimatePresence>
          {status !== "AVAILABLE" && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center z-20"
            >
              <div className="bg-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">{status}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Details Section */}
      <div className="p-6 flex-1 flex flex-col space-y-5">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{category}</span>
            <button className="text-slate-400 hover:text-slate-600 transition-colors">
              <Info className="w-4 h-4" />
            </button>
          </div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">
            {name}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Expiration</p>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
              <Calendar className="w-4 h-4 text-slate-400" />
              {expiry}
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Quantity</p>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
              <Pill className="w-4 h-4 text-slate-400" />
              {quantity}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
          <MapPin className="w-4 h-4 text-slate-300" />
          {location}
        </div>

        <div className="pt-2">
          {status === "AVAILABLE" ? (
            <button 
              onClick={handleAccess}
              disabled={isProcessing}
              className="med-button-primary w-full py-3 text-sm disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing Protocol...
                </>
              ) : (
                <>
                  Access Medicine
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          ) : (
            <button 
              disabled
              className="med-button-secondary w-full py-3 text-sm opacity-50 cursor-not-allowed"
            >
              Access Restricted
            </button>
          )}
        </div>
      </div>

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 bg-white z-30 p-8 flex flex-col items-center justify-center text-center space-y-6"
          >
             <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
             </div>
             <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900">Protocol Initialized</h4>
                <p className="text-xs text-slate-500 font-medium">Please head to {location} within 24 hours to complete the transfer.</p>
             </div>
             <button 
              onClick={() => setShowConfirm(false)}
              className="med-button-secondary w-full py-2 text-xs"
             >
                Close System Notice
             </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MedicineCard;
