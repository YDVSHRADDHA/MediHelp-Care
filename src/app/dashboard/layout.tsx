"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  PackagePlus, 
  History, 
  MessageSquare, 
  Settings, 
  LogOut,
  Bell,
  Heart,
  Search,
  ShieldCheck,
  Globe2,
  User,
  ChevronRight,
  ClipboardList
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

const sidebarLinks = [
  { name: "Executive Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Inventory Listing", href: "/dashboard/donate", icon: PackagePlus },
  { name: "My Contributions", href: "/dashboard/donations", icon: History },
  { name: "Network Map", href: "/discover", icon: Globe2 },
  { name: "Compliance Log", href: "/dashboard/verification", icon: ClipboardList },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-[280px] bg-slate-900 hidden lg:flex flex-col relative z-20">
        <div className="p-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center shadow-lg">
              <Heart className="text-white fill-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none">MediHelp</span>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mt-1">Enterprise v4.0</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-4 mt-4 space-y-1">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-4 mb-4">Administration</p>
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-md transition-all duration-200 group",
                  isActive 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <div className="flex items-center gap-3">
                  <link.icon className={cn("w-4 h-4 transition-colors", isActive ? "text-white" : "text-slate-500 group-hover:text-slate-300")} />
                  <span className="text-sm font-semibold">{link.name}</span>
                </div>
                {isActive && (
                  <ChevronRight className="w-4 h-4 text-white/50" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 space-y-4">
           <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Impact XP</span>
                <span className="text-[10px] font-bold text-blue-400">LVL 24</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[70%] bg-blue-600 rounded-full" />
              </div>
           </div>

          <button className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-semibold text-slate-400 hover:bg-red-600/10 hover:text-red-500 w-full transition-all group">
            <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            System Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10 shadow-sm">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search global records..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-600 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
               <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-lg transition-all relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-white" />
               </button>
               <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-lg transition-all">
                  <Settings className="w-5 h-5" />
               </button>
            </div>
            
            <div className="h-6 w-px bg-slate-200 mx-2" />
            
            <div className="flex items-center gap-3 pl-2 group cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900">Dr. Sarah Jenkins</p>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest leading-none">Senior Pharmacist</p>
              </div>
              <div className="w-10 h-10 rounded-md bg-slate-100 border border-slate-200 shadow-sm overflow-hidden relative transition-transform group-hover:scale-105">
                <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Profile" fill className="object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50 p-8 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
