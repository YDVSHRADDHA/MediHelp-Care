"use client";

import { motion } from "framer-motion";
import { 
  Heart, 
  Package, 
  TrendingUp, 
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  ArrowRight,
  ShieldCheck,
  Globe2,
  PackageCheck
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useAppStore } from "@/store/appStore";

export default function DashboardPage() {
  const { medicines, currentUser } = useAppStore();

  const userMeds = medicines.filter(m => m.donorId === currentUser?.id);
  const availableCount = userMeds.filter(m => m.status === "AVAILABLE").length;
  const reservedCount = userMeds.filter(m => m.status === "RESERVED").length;

  const stats = [
    { label: "Total Contributions", value: userMeds.length.toString(), icon: Package, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Impacted Patients", value: currentUser?.impactMeds.toString() || "0", icon: Heart, color: "text-red-600", bg: "bg-red-50" },
    { label: "Active Protocol", value: availableCount.toString(), icon: PackageCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Pending Claims", value: reservedCount.toString(), icon: Clock, color: "text-indigo-600", bg: "bg-indigo-50" },
  ];

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Executive Dashboard</h2>
          <p className="text-slate-500 font-medium">Welcome back, {currentUser?.name}. Real-time inventory overview.</p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="med-button-secondary py-2.5 px-5 text-sm">
              Export Compliance Log
           </button>
           <Link
            href="/dashboard/donate"
            className="med-button-primary py-2.5 px-6 text-sm"
          >
            <Plus className="w-4 h-4" />
            Initialize Distribution
          </Link>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", stat.bg)}>
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                <TrendingUp className="w-3 h-3" />
                +12%
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Your Active Inventory */}
        <div className="xl:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Your Active Distribution Vector</h3>
            <button className="text-xs font-bold text-blue-600 hover:underline">View All Records</button>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-100 overflow-hidden shadow-sm">
            {userMeds.length > 0 ? (
              userMeds.slice(0, 5).map((med) => (
                <div 
                  key={med.id} 
                  className="p-5 flex items-center gap-6 hover:bg-slate-50 transition-colors cursor-pointer group"
                >
                  <div className={cn(
                    "w-10 h-10 rounded-md flex items-center justify-center bg-slate-50 border border-slate-100 transition-all",
                    med.status === "AVAILABLE" ? "text-emerald-600" : "text-blue-600"
                  )}>
                    {med.status === "AVAILABLE" ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-900">{med.name}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">EXP: {med.expiry}</p>
                      <div className="w-1 h-1 bg-slate-300 rounded-full" />
                      <p className={cn(
                        "text-[10px] font-bold uppercase",
                        med.status === "AVAILABLE" ? "text-emerald-600" : "text-blue-600"
                      )}>{med.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded">
                      {med.quantity}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))
            ) : (
              <div className="p-20 text-center space-y-4">
                <Package className="w-12 h-12 text-slate-200 mx-auto" />
                <p className="text-sm font-bold text-slate-500">No active inventory records found.</p>
                <Link href="/dashboard/donate" className="med-button-primary mx-auto">Initialize Listing</Link>
              </div>
            )}
          </div>
        </div>

        {/* Global Impact Context */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Regional Supply Insight</h3>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6 shadow-sm">
            <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-slate-100">
               <Image 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                 alt="Analytics"
                 fill
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-blue-900/10" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-xs font-bold text-slate-700">Cardiology Surplus</span>
                </div>
                <span className="text-xs font-bold text-slate-900">64%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                  <span className="text-xs font-bold text-slate-700">Antibiotics Needed</span>
                </div>
                <span className="text-xs font-bold text-slate-900">22%</span>
              </div>
            </div>

            <Link href="/impact" className="med-button-secondary w-full py-2.5 text-xs">
              Full Network Analysis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
