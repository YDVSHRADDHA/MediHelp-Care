"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import MedicineCard from "@/components/MedicineCard";
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  Map as MapIcon, 
  Grid, 
  List, 
  Activity, 
  Globe2, 
  ShieldCheck, 
  X 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store/appStore";
import { cn } from "@/lib/utils";

// Removed duplicate/typo imports

export default function DiscoverPage() {
  const { medicines } = useAppStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = ["All", "Antibiotics", "Diabetes", "Blood Pressure", "Asthma", "Pain Relief", "Cardiology"];

  const filteredMedicines = useMemo(() => {
    return medicines.filter((med) => {
      const matchesSearch = med.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           med.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || med.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [medicines, searchQuery, activeCategory]);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Professional Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-200 pb-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded">
                <Globe2 className="w-3.5 h-3.5" />
                Live Medication Inventory Hub
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Pharmaceutical <span className="text-blue-600">Redistribution</span> Index
              </h1>
              <p className="text-lg text-slate-500 max-w-2xl font-medium">
                Real-time visibility into surplus verified medications within the global redistribution network.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
               <div className="bg-white border border-slate-200 p-1 rounded-lg flex items-center shadow-sm">
                  <button 
                    onClick={() => setViewMode("grid")}
                    className={cn("p-2.5 rounded-md transition-all", viewMode === "grid" ? "bg-slate-100 text-blue-600" : "text-slate-400 hover:text-slate-600")}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setViewMode("list")}
                    className={cn("p-2.5 rounded-md transition-all", viewMode === "list" ? "bg-slate-100 text-blue-600" : "text-slate-400 hover:text-slate-600")}
                  >
                    <List className="w-5 h-5" />
                  </button>
               </div>
               <button className="med-button-primary py-2.5 px-6">
                  <MapIcon className="w-4 h-4" />
                  Network Vector Map
               </button>
            </div>
          </div>

          {/* Filtering & Search Bar */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search medication name, batch ID, or therapeutic category..."
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 transition-all text-sm font-medium outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto no-scrollbar pb-1 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all border",
                    activeCategory === cat 
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm" 
                      : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="h-8 w-px bg-slate-200 hidden lg:block mx-2" />
            
            <button className="flex items-center gap-2 px-4 py-3 bg-slate-50 text-slate-700 rounded-lg text-xs font-bold border border-slate-200 hover:bg-slate-100 transition-all w-full lg:w-auto justify-center">
              <SlidersHorizontal className="w-4 h-4" />
              Advanced Protocols
            </button>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-3">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Vector Status:</span>
               <div className="flex items-center gap-2 px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[10px] font-bold">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  {filteredMedicines.length} Units Available
               </div>
             </div>
             <p className="text-xs font-bold text-slate-500">Showing {filteredMedicines.length} of {medicines.length} records</p>
          </div>

          {/* Dynamic Inventory Grid */}
          <AnimatePresence mode="popLayout">
            {filteredMedicines.length > 0 ? (
              <motion.div 
                layout
                className={cn(
                  "grid gap-8",
                  viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
                )}
              >
                {filteredMedicines.map((med) => (
                  <MedicineCard 
                    key={med.id} 
                    {...med}
                    className={viewMode === "list" ? "flex-row h-auto items-center" : ""}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-32 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-white/50"
              >
                 <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-8 h-8 text-slate-300" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900">No Inventory Records Found</h3>
                 <p className="text-slate-500 font-medium max-w-sm mx-auto mt-2">
                    Adjust your Therapeutic category or search parameters to view more results.
                 </p>
                 <button 
                  onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                  className="med-button-secondary mx-auto mt-8"
                 >
                    Reset System Parameters
                 </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* System Pagination */}
          {filteredMedicines.length > 0 && (
            <div className="mt-16 flex flex-col items-center">
              <button className="med-button-secondary py-3 px-10">
                <Activity className="w-4 h-4 text-blue-600" />
                Sync More Ledger Data
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
