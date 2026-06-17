"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Package, 
  Heart, 
  Globe2, 
  ShieldCheck,
  BarChart3,
  Activity,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Medications Redistributed", value: "428,940", sub: "+12.4% vs last Q", icon: Package },
  { label: "Lives Impacted Globally", value: "12,450", sub: "Verified healthcare cases", icon: Heart },
  { label: "Partner Healthcare Orgs", value: "452", sub: "In 42 countries", icon: Globe2 },
  { label: "Value Redistributed", value: "$1.2M", sub: "Estimated MSRP saved", icon: TrendingUp },
];

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-md border border-white/10 text-xs font-bold uppercase tracking-widest text-blue-400">
              <Activity className="w-4 h-4" />
              Impact Report FY2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Quantifying Global <br />
              <span className="text-blue-500">Resource</span> Optimization.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              Our framework provides institutional transparency into pharmaceutical redistribution, 
              tracking every unit from surplus identification to final patient dispensation.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white border border-slate-200 rounded-xl shadow-2xl space-y-6"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shadow-inner">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">{stat.label}</p>
                <h3 className="text-4xl font-bold text-slate-900 tracking-tight">{stat.value}</h3>
                <p className="text-xs font-bold text-emerald-600">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Analytical Insights */}
      <section className="section-spacing bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Supply Chain Velocity</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                By optimizing local vectors, we have reduced the average transit time for critical medications by 64%. 
                Our network ensures that medications reach their destination well before expiration protocols.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { label: "Antibiotics Redistribution Efficiency", val: "94%" },
                { label: "Chronic Care Consistency", val: "88%" },
                { label: "NGO Fulfillment Rate", val: "99.2%" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold text-slate-700">
                    <span>{item.label}</span>
                    <span>{item.val}</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.val }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-blue-600 rounded-full" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-video bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden p-10">
             <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                   <BarChart3 className="w-5 h-5 text-blue-600" />
                   <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">Regional Growth Analytics</span>
                </div>
                <div className="flex gap-2">
                   <div className="px-2 py-1 bg-blue-50 text-[10px] font-bold text-blue-600 rounded">REVENUE</div>
                   <div className="px-2 py-1 bg-slate-100 text-[10px] font-bold text-slate-500 rounded">UNITS</div>
                </div>
             </div>
             
             {/* Simulated Chart Bars */}
             <div className="flex items-end justify-between h-48 gap-4 px-4">
                {[40, 60, 45, 80, 55, 90, 75, 95].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                    className="w-full bg-blue-600/10 border-t-2 border-blue-600 rounded-t-sm group relative"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {h}%
                    </div>
                  </motion.div>
                ))}
             </div>
             
             <div className="flex justify-between pt-6 px-4">
                {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'].map((m) => (
                  <span key={m} className="text-[10px] font-bold text-slate-400">{m}</span>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
             <h2 className="text-4xl font-bold text-slate-900">Institutional Partnerships</h2>
             <p className="text-slate-500 font-medium leading-relaxed">
               Collaborating with global health authorities and pharmaceutical leaders to standardize surplus redistribution.
             </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
             {[
               { title: "Public Health Hub", location: "Nairobi, KE", desc: "Redistributed 12k units of pediatric antibiotics to community clinics.", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" },
               { title: "Emergency Response", location: "Warsaw, PL", desc: "Secured supply chains for urgent cardiological medications during regional crisis.", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" },
               { title: "Surplus Reduction", location: "New Jersey, US", desc: "Partnered with retail chains to divert 45k units of near-expiry chronic care meds.", img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800" }
             ].map((item, i) => (
               <div key={i} className="space-y-6 group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-100 shadow-lg">
                     <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur rounded text-[10px] font-black uppercase text-blue-600">
                        {item.location}
                     </div>
                  </div>
                  <div className="space-y-2">
                     <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                     <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                  <button className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest hover:gap-3 transition-all">
                     View Case Study
                     <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6">
         <div className="max-w-7xl mx-auto bg-blue-600 rounded-2xl p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-10">
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Scalable Health Optimization.</h2>
               <p className="text-xl text-blue-100 font-medium">
                 Join our partner network to access institutional redistribution protocols and impact analytics.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/signup" className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 font-bold rounded-lg shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                     Institutional Onboarding
                     <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/partners" className="w-full sm:w-auto px-10 py-5 bg-blue-700 text-white font-bold rounded-lg border border-blue-500 hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
                     <ShieldCheck className="w-5 h-5" />
                     Verified Partners
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
