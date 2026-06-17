"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  Globe2, 
  Activity, 
  ShieldCheck, 
  MapPin, 
  Users, 
  Zap,
  ArrowRight,
  Maximize2
} from "lucide-react";
import Image from "next/image";

const regions = [
  { name: "North America Hub", nodes: "142", status: "Operational", color: "bg-blue-500" },
  { name: "European Grid", nodes: "85", status: "Operational", color: "bg-emerald-500" },
  { name: "East African Vector", nodes: "42", status: "Expanding", color: "bg-amber-500" },
  { name: "Southeast Asia Node", nodes: "28", status: "Operational", color: "bg-blue-500" },
];

export default function MapPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      
      <div className="pt-32 h-screen flex flex-col">
        {/* Map Header */}
        <div className="px-8 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-md border border-blue-600/30">
              <Activity className="w-4 h-4" />
              Live Network Vector Map v4.0
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Global <span className="text-blue-500">Inventory</span> Distribution.</h1>
          </div>

          <div className="flex items-center gap-6">
             <div className="flex flex-col text-right">
                <span className="text-2xl font-bold">452</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Active Institutional Nodes</span>
             </div>
             <div className="w-px h-10 bg-white/10 mx-2" />
             <div className="flex flex-col text-right">
                <span className="text-2xl font-bold text-emerald-500">99.8%</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Protocol Integrity</span>
             </div>
          </div>
        </div>

        {/* Map Visualization Area */}
        <div className="flex-1 relative overflow-hidden bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#0f172a_100%)]">
           {/* Decorative Grid */}
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(90deg,rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:40px_40px]" />

           {/* Simulated Map Visual */}
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-5xl aspect-video grayscale opacity-20">
                 <Image 
                   src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1500" 
                   alt="World Map" 
                   fill 
                   className="object-contain" 
                 />
              </div>

              {/* Pulsing Nodes */}
              <div className="absolute top-[30%] left-[25%]">
                 <div className="relative">
                    <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse" />
                    <div className="absolute top-6 left-6 p-4 glass-med rounded-xl border border-white/10 w-48 space-y-2">
                       <p className="text-[10px] font-bold text-blue-400 uppercase">NY HUB #04</p>
                       <p className="text-sm font-bold">12,400 Units</p>
                    </div>
                 </div>
              </div>

              <div className="absolute bottom-[40%] right-[30%]">
                 <div className="relative">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-pulse" />
                 </div>
              </div>

              <div className="absolute top-[45%] right-[20%]">
                 <div className="relative">
                    <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse" />
                 </div>
              </div>
           </div>

           {/* Sidebar Controls */}
           <div className="absolute bottom-10 left-10 space-y-4 max-w-xs w-full">
              {regions.map((region, i) => (
                <div key={i} className="p-4 bg-slate-900/80 backdrop-blur border border-white/10 rounded-xl flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className={cn("w-2 h-2 rounded-full", region.color)} />
                      <span className="text-sm font-bold">{region.name}</span>
                   </div>
                   <div className="text-right">
                      <p className="text-xs font-bold">{region.nodes} Nodes</p>
                      <p className="text-[8px] font-bold text-slate-500 uppercase">{region.status}</p>
                   </div>
                </div>
              ))}
           </div>

           {/* Action Overlay */}
           <div className="absolute bottom-10 right-10 flex gap-4">
              <button className="p-4 bg-white text-slate-900 rounded-full shadow-2xl hover:scale-110 transition-all">
                 <Maximize2 className="w-6 h-6" />
              </button>
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-2xl flex items-center gap-2 hover:bg-blue-700 transition-all">
                 <ShieldCheck className="w-5 h-5" />
                 Join the Grid
              </button>
           </div>
        </div>
      </div>
    </main>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
