import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import SuccessStories from "@/components/sections/SuccessStories";
import { ArrowRight, ShieldCheck, Heart, Zap, Activity } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <Features />
      <SuccessStories />

      {/* Professional Call to Action */}
      <section className="section-spacing bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-16 md:p-24 text-center">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] -z-0" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Institutional Onboarding Open
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                Optimize Global <br />
                <span className="text-blue-500">Healthcare</span> Access.
              </h2>
              
              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
                Join our framework to integrate institutional surplus into a secure, 
                pharmacist-verified redistribution ecosystem.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Link
                  href="/signup"
                  className="med-button-primary w-full sm:w-auto px-10 py-4 text-lg shadow-xl shadow-blue-600/20"
                >
                  Register Institution
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/impact"
                  className="med-button-secondary w-full sm:w-auto px-10 py-4 text-lg bg-transparent text-white border-white/20 hover:bg-white/5"
                >
                  View Performance Metrics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Heart className="text-white fill-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">MediHelp</span>
            </Link>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Global infrastructure for pharmaceutical redistribution, focusing on safety, compliance, and waste reduction.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-slate-400">Inventory Network</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-600">
              <li><Link href="/discover" className="hover:text-blue-600 transition-all">Search Inventory</Link></li>
              <li><Link href="/dashboard/donate" className="hover:text-blue-600 transition-all">Submit Surplus</Link></li>
              <li><Link href="/protocol" className="hover:text-blue-600 transition-all">Verification Protocol</Link></li>
              <li><Link href="/impact" className="hover:text-blue-600 transition-all">Network Analytics</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-slate-400">Institutional</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-600">
              <li><Link href="/about" className="hover:text-blue-600 transition-all">Our Framework</Link></li>
              <li><Link href="/partners" className="hover:text-blue-600 transition-all">Partner Directory</Link></li>
              <li><Link href="/compliance" className="hover:text-blue-600 transition-all">Global Compliance</Link></li>
              <li><Link href="/press" className="hover:text-blue-600 transition-all">Media Relations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-slate-400">Legal & Privacy</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-600">
              <li><Link href="/privacy" className="hover:text-blue-600 transition-all">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600 transition-all">Terms of Service</Link></li>
              <li><Link href="/hipaa" className="hover:text-blue-600 transition-all">HIPAA Compliance</Link></li>
              <li><Link href="/security" className="hover:text-blue-600 transition-all">Data Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-slate-400">© 2026 MediHelp Healthcare Systems. All Redistribution Protocols Active.</p>
          <div className="flex items-center gap-4 px-4 py-2 bg-slate-50 border border-slate-100 rounded-md">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Network Operational</span>
             </div>
             <div className="w-px h-3 bg-slate-300" />
             <span className="text-[10px] font-bold text-slate-400 uppercase">ISO 27001 Certified</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
