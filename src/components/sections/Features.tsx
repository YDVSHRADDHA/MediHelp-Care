"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Search, 
  Truck, 
  Activity, 
  Database, 
  ArrowRight,
  ClipboardCheck,
  Globe2,
  Lock
} from "lucide-react";

const features = [
  {
    title: "Inventory Verification",
    description: "Every listing undergoes a multi-layer verification process by accredited pharmacists to ensure quality and safety standards.",
    icon: ClipboardCheck,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Secure Vector Distribution",
    description: "Our proprietary logistics grid ensures temperature-sensitive medications are transported through secure, tracked channels.",
    icon: Lock,
    color: "text-slate-900",
    bg: "bg-slate-100",
  },
  {
    title: "Real-time Supply Mapping",
    description: "Spatial search intelligence connects local surplus to immediate regional shortages, optimizing redistribution efficiency.",
    icon: Search,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Compliance Infrastructure",
    description: "Full regulatory adherence with automated batch tracking and electronic pedigree documentation for every unit redistributed.",
    icon: ShieldCheck,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "NGO Partner Network",
    description: "Connecting over 450 verified non-profit organizations to essential medicine supplies across 42 countries.",
    icon: Globe2,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Centralized Ledger",
    description: "Transparent, immutable record-keeping for all medication movements, ensuring accountability across the ecosystem.",
    icon: Database,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const Features = () => {
  return (
    <section className="section-spacing bg-white border-y border-slate-100" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              Infrastructure Standards
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2]">
              Professional Grade <br />
              Healthcare Redistribution.
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              MediHelp provides the technical framework to eliminate pharmaceutical waste through 
              rigorous verification, secure logistics, and intelligent supply-demand matching.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white border border-slate-100 rounded-xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group"
            >
              <div className={cn("w-14 h-14 rounded-lg flex items-center justify-center mb-8 shadow-sm", feature.bg)}>
                <feature.icon className={cn("w-7 h-7", feature.color)} />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold text-blue-600 mt-8 group-hover:gap-3 transition-all">
                System Documentation
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

export default Features;
