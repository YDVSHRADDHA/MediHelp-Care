"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  Menu, 
  X, 
  Search, 
  Globe, 
  LayoutDashboard, 
  ShieldCheck, 
  Bell,
  User,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useAppStore } from "@/store/appStore";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { currentUser, notifications, logout } = useAppStore();

  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Medication Search", href: "/discover", icon: Search },
    { name: "Global Impact", href: "/impact", icon: Globe },
    { name: "Our Partners", href: "/partners", icon: ShieldCheck },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm" : "bg-white/50 py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-blue-600 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform">
            <Heart className="text-white fill-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            MediHelp <span className="text-blue-600 font-medium">Healthcare</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-semibold transition-all flex items-center gap-2",
                pathname === link.href 
                  ? "bg-blue-50 text-blue-600" 
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              {link.icon && <link.icon className="w-4 h-4 opacity-70" />}
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/dashboard" className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white text-[8px] font-black text-white flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </Link>
          <div className="w-px h-6 bg-slate-200 mx-1" />
          
          {currentUser ? (
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden xl:block">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Authenticated</p>
                <p className="text-sm font-bold text-slate-900">{currentUser.name}</p>
              </div>
              <Link
                href="/dashboard"
                className="med-button-primary py-2 px-5 text-sm"
              >
                <LayoutDashboard className="w-4 h-4" />
                Command Center
              </Link>
            </div>
          ) : (
            <Link
              href="/signup"
              className="med-button-primary py-2 px-6 text-sm"
            >
              Initialize Access
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 font-semibold text-slate-700"
                >
                  {link.icon && <link.icon className="w-5 h-5 text-blue-600" />}
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="med-button-primary w-full"
              >
                Access Command Center
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
