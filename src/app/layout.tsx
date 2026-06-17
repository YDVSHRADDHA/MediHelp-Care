import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediHelp | Community-Driven Healthcare Redistribution",
  description: "Reducing medicine waste and improving access through responsible donation and redistribution.",
};

import { NotificationSystem } from "@/components/NotificationSystem";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen mesh-gradient font-sans antialiased text-slate-900">
        {children}
        <NotificationSystem />
      </body>
    </html>
  );
}
