"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Activity, 
  Globe2, 
  CheckCircle2,
  AlertCircle,
  Gavel
} from "lucide-react";

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="pt-40 pb-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-md border border-white/10 text-xs font-bold uppercase tracking-widest text-blue-400">
              Regulatory Standards
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Global <span className="text-blue-500">Compliance</span> Framework.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              MediHelp operates within the strict parameters of international healthcare laws, 
              maintaining a unified grid of regulatory certifications across all operational regions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div className="bg-white border border-slate-200 rounded-3xl p-12 space-y-10 shadow-sm">
             <div className="space-y-4 border-b border-slate-100 pb-10">
                <h2 className="text-3xl font-bold text-slate-900">Institutional Certificates</h2>
                <p className="text-slate-500 font-medium">Verified by global health and security authorities.</p>
             </div>
             
             <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "ISO 27001", desc: "Information security management system certification ensuring data integrity.", icon: Lock },
                  { title: "GDPR Compliant", desc: "Full European data protection and privacy regulation adherence.", icon: ShieldCheck },
                  { title: "HIPAA Certified", desc: "Technical safeguards for protecting sensitive patient healthcare records.", icon: CheckCircle2 },
                  { title: "DSCSA Regulated", desc: "Compliance with the Drug Supply Chain Security Act (DSCSA) for unit tracking.", icon: FileText }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-12 space-y-10 shadow-sm">
             <div className="space-y-4 border-b border-slate-100 pb-10">
                <h2 className="text-3xl font-bold text-slate-900">Legal Vector</h2>
                <p className="text-slate-500 font-medium">Jurisdictional compliance and law enforcement protocols.</p>
             </div>
             <div className="space-y-6">
                {[
                  "Cross-border transfer protocols",
                  "Whistleblower protection system",
                  "Automated audit trail generation",
                  "Law enforcement data requests"
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                     <span className="text-sm font-bold text-slate-700">{item}</span>
                     <Gavel className="w-4 h-4 text-slate-300" />
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-blue-600 rounded-3xl p-10 text-white space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <Activity className="w-12 h-12 text-blue-200" />
              <h4 className="text-2xl font-bold tracking-tight">Real-time Compliance Monitoring</h4>
              <p className="text-sm text-blue-100 leading-relaxed font-medium">
                Our AI-driven compliance engine continuously scans the redistribution grid for therapeutic inconsistencies 
                and regulatory violations.
              </p>
              <div className="pt-6">
                 <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200">System Integrity</span>
                    <span className="text-[10px] font-bold text-white">99.9%</span>
                 </div>
                 <div className="h-1 bg-blue-500 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "99.9%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-white" 
                    />
                 </div>
              </div>
           </div>

           <div className="bg-white border border-slate-200 rounded-3xl p-10 space-y-6 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Global Law Map</h4>
              <div className="aspect-square bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center relative overflow-hidden">
                 <Globe2 className="w-20 h-20 text-slate-200" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 to-transparent" />
              </div>
              <button className="med-button-secondary w-full py-3 text-xs">
                 View Jurisdictional Matrix
              </button>
           </div>
        </div>
      </section>
    </main>
  );
}
