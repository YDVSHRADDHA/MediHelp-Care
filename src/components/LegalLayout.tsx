"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const LegalLayout = ({ title, subtitle, children }: LegalLayoutProps) => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
             <h1 className="text-4xl font-bold text-slate-900 tracking-tight">{title}</h1>
             <p className="text-lg text-slate-500 font-medium">{subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-4 gap-16">
         {/* Sidebar Navigation */}
         <aside className="hidden lg:block space-y-8">
            <div className="space-y-2">
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4">Legal Directory</p>
               {[
                 { name: "Privacy Policy", href: "/privacy" },
                 { name: "Terms of Service", href: "/terms" },
                 { name: "HIPAA Compliance", href: "/hipaa" },
                 { name: "Data Security", href: "/security" }
               ].map((link) => (
                 <Link 
                  key={link.name} 
                  href={link.href}
                  className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all"
                 >
                    {link.name}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </Link>
               ))}
            </div>
            
            <div className="p-6 bg-blue-600 rounded-2xl text-white space-y-4 shadow-xl">
               <ShieldCheck className="w-8 h-8" />
               <h4 className="font-bold">Trust Node</h4>
               <p className="text-xs text-blue-100 leading-relaxed">
                 All redistribution protocols are audited quarterly for compliance.
               </p>
            </div>
         </aside>

         {/* Content Area */}
         <div className="lg:col-span-3 prose prose-slate max-w-none">
            <div className="bg-white border border-slate-100 rounded-3xl p-10 md:p-16 space-y-12 shadow-sm">
               {children}
            </div>
         </div>
      </section>
    </main>
  );
};
