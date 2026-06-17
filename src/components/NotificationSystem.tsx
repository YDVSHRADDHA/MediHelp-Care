"use client";

import { useAppStore } from "@/store/appStore";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X, Info, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const NotificationSystem = () => {
  const { notifications, markNotificationRead } = useAppStore();

  const unread = notifications.filter(n => !n.read);

  if (unread.length === 0) return null;

  return (
    <div className="fixed bottom-10 right-10 z-[1000] flex flex-col gap-3 max-w-sm w-full">
      <AnimatePresence>
        {unread.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="p-5 bg-slate-900 text-white rounded-xl shadow-2xl border border-white/10 flex items-start gap-4 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-600" />
            <div className="mt-0.5">
              {n.type === "success" && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
              {n.type === "warning" && <AlertCircle className="w-5 h-5 text-amber-400" />}
              {n.type === "info" && <Info className="w-5 h-5 text-blue-400" />}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold leading-relaxed">{n.message}</p>
            </div>
            <button 
              onClick={() => markNotificationRead(n.id)}
              className="text-white/40 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
