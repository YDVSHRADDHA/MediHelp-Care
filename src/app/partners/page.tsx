"use client";

import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Search, 
  Globe2, 
  Building2, 
  ArrowRight,
  ExternalLink,
  MapPin,
  Users,
  CheckCircle2,
  Lock,
  X,
  Filter,
  Activity
} from "lucide-react";
import Image from "next/image";
import { useState, useMemo } from "react";
import Link from "next/link";

const partners = [
  {
    id: "p1",
    name: "Global Relief Initiative",
    type: "NGO",
    location: "Geneva, CH",
    focus: "Crisis Response",
    impact: "12k Meds / Mo",
    verified: true,
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p2",
    name: "Beacon Health Network",
    type: "Medical Provider",
    location: "New York, US",
    focus: "Primary Care",
    impact: "45k Patients",
    verified: true,
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p3",
    name: "PharmaCare Alliance",
    type: "Supply Chain",
    location: "Mumbai, IN",
    focus: "Logistics",
    impact: "500+ Hubs",
    verified: true,
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p4",
    name: "St. Jude Clinics",
    type: "Charitable Hospital",
    location: "Nairobi, KE",
    focus: "Pediatrics",
    impact: "8.5k Treatments",
    verified: true,
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p5",
    name: "Cross Health Trust",
    type: "NGO",
    location: "London, UK",
    focus: "Community Health",
    impact: "30k Units / Yr",
    verified: true,
    img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800"
  },
];

export default function PartnersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFocus, setActiveFocus] = useState("All");
  const [activeRegion, setActiveRegion] = useState("All");
  const [selectedPartner, setSelectedPartner] = useState<typeof partners[0] | null>(null);

  const focusAreas = ["All", "Crisis Response", "Primary Care", "Logistics", "Pediatrics", "Community Health"];
  const regions = ["All", "Geneva, CH", "New York, US", "Mumbai, IN", "Nairobi, KE", "London, UK"];

  const filteredPartners = useMemo(() => {
    return partners.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.focus.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFocus = activeFocus === "All" || p.focus === activeFocus;
      const matchesRegion = activeRegion === "All" || p.location === activeRegion;
      return matchesSearch && matchesFocus && matchesRegion;
    });
  }, [searchQuery, activeFocus, activeRegion]);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Professional Header */}
      <section className="pt-40 pb-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
           <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Partner Network
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  Global <span className="text-blue-600">Institutional</span> Partners.
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl font-medium">
                  We collaborate with over 450 vetted NGOs, medical providers, and pharmaceutical 
                  leaders to standardize the redistribution of surplus life-saving medications.
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                 <div className="flex flex-col text-right">
                    <span className="text-3xl font-bold text-slate-900">450+</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Nodes</span>
                 </div>
                 <div className="w-px h-10 bg-slate-200 mx-2" />
                 <Link href="/signup" className="med-button-primary">
                    <Building2 className="w-4 h-4" />
                    Apply for Partnership
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        {/* Search & Filter */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col gap-6">
           <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by organization name or focus area..."
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
           </div>
           
           <div className="flex flex-wrap items-center gap-6">
              <div className="space-y-2 flex-1 min-w-[200px]">
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Therapeutic Focus</p>
                 <select 
                  className="med-input w-full py-2.5 text-xs"
                  value={activeFocus}
                  onChange={(e) => setActiveFocus(e.target.value)}
                 >
                    {focusAreas.map(f => <option key={f} value={f}>{f}</option>)}
                 </select>
              </div>
              <div className="space-y-2 flex-1 min-w-[200px]">
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Global Region</p>
                 <select 
                  className="med-input w-full py-2.5 text-xs"
                  value={activeRegion}
                  onChange={(e) => setActiveRegion(e.target.value)}
                 >
                    {regions.map(r => <option key={r} value={r}>{r}</option>)}
                 </select>
              </div>
              <button 
                onClick={() => { setSearchQuery(""); setActiveFocus("All"); setActiveRegion("All"); }}
                className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors"
              >
                 <X className="w-4 h-4" />
                 Reset
              </button>
           </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <AnimatePresence mode="popLayout">
            {filteredPartners.map((partner, i) => (
              <motion.div
                key={partner.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                onClick={() => setSelectedPartner(partner)}
              >
                <div className="relative aspect-video">
                   <Image src={partner.img} alt={partner.name} fill className="object-cover transition-transform group-hover:scale-105" />
                   <div className="absolute top-4 right-4 px-3 py-1.5 bg-blue-600/90 backdrop-blur rounded-md text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified Tier 1
                   </div>
                </div>
                
                <div className="p-6 space-y-6">
                   <div className="space-y-1">
                     <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{partner.type}</p>
                     <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{partner.name}</h3>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-6 py-4 border-y border-slate-100">
                     <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Focus</p>
                        <p className="text-sm font-bold text-slate-700">{partner.focus}</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Vector</p>
                        <p className="text-sm font-bold text-slate-700">{partner.location}</p>
                     </div>
                   </div>

                   <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                         <Users className="w-4 h-4 text-slate-400" />
                         <span className="text-xs font-bold text-slate-600">{partner.impact} Impact</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                   </div>

                   <button className="med-button-secondary w-full py-2.5 text-xs">
                      View Partner Profile
                      <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
              </motion.div>
            ))}
           </AnimatePresence>
        </div>
      </section>

      {/* Partner Detail Modal */}
      <AnimatePresence>
         {selectedPartner && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-6"
              onClick={() => setSelectedPartner(null)}
            >
               <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row"
                onClick={e => e.stopPropagation()}
               >
                  <div className="md:w-2/5 relative min-h-[300px]">
                     <Image src={selectedPartner.img} alt={selectedPartner.name} fill className="object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                        <div className="space-y-2">
                           <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Verified Institution</p>
                           <h3 className="text-2xl font-bold text-white">{selectedPartner.name}</h3>
                        </div>
                     </div>
                  </div>
                  <div className="md:w-3/5 p-10 space-y-8 overflow-y-auto">
                     <div className="flex justify-between items-start">
                        <div className="space-y-1">
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Primary Node Focus</p>
                           <h4 className="text-lg font-bold text-slate-900">{selectedPartner.focus}</h4>
                        </div>
                        <button onClick={() => setSelectedPartner(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                           <X className="w-6 h-6 text-slate-400" />
                        </button>
                     </div>

                     <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                           <div className="space-y-1">
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Location</p>
                              <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                 <MapPin className="w-4 h-4 text-blue-600" />
                                 {selectedPartner.location}
                              </div>
                           </div>
                           <div className="space-y-1">
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified Since</p>
                              <p className="text-sm font-bold text-slate-700">Jan 2024</p>
                           </div>
                        </div>
                        <div className="space-y-4">
                           <div className="space-y-1">
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Impact Velocity</p>
                              <div className="flex items-center gap-2 text-sm font-bold text-emerald-600">
                                 <Activity className="w-4 h-4" />
                                 {selectedPartner.impact}
                              </div>
                           </div>
                           <div className="space-y-1">
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Compliance Status</p>
                              <div className="flex items-center gap-2 text-sm font-bold text-blue-600">
                                 <ShieldCheck className="w-4 h-4" />
                                 Tier 1 Global
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="space-y-4 pt-6 border-t border-slate-100">
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">
                           {selectedPartner.name} is a high-capacity redistribution node specializing in {selectedPartner.focus.toLowerCase()} across {selectedPartner.location}. They maintain rigorous storage protocols and pharmacist-led verification cycles.
                        </p>
                        <div className="flex gap-4">
                           <button className="med-button-primary flex-1">Initiate Collaboration</button>
                           <button className="med-button-secondary">Compliance Log</button>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>

      {/* Compliance Section */}
      <section className="section-spacing bg-white border-y border-slate-200">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-8">
               <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Institutional Vetting Protocol</h2>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium">
                    Every institutional partner undergoes a rigorous 5-stage vetting process ensuring 
                    full compliance with international healthcare distribution standards and 
                    local regulatory frameworks.
                  </p>
               </div>
               
               <div className="space-y-4">
                  {[
                    "Credential & Licensing Validation",
                    "Storage & Cold Chain Facility Audit",
                    "Electronic Pedigree (ePedigree) Integration",
                    "Quarterly Compliance Performance Reviews"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                       </div>
                       <span className="text-sm font-bold text-slate-700">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
               <div className="bg-slate-900 rounded-xl p-8 space-y-6 text-white shadow-2xl">
                  <Lock className="w-10 h-10 text-blue-500" />
                  <h4 className="text-lg font-bold">Secure Access</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    Restricted access to the Global Inventory Index for authorized healthcare entities only.
                  </p>
               </div>
               <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-6 shadow-xl">
                  <Globe2 className="w-10 h-10 text-blue-600" />
                  <h4 className="text-lg font-bold text-slate-900">Unified Grid</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Standardized data protocols for seamless cross-border medication redistribution.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
