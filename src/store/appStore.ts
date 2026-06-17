import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Medicine {
  id: string;
  name: string;
  category: string;
  expiry: string;
  location: string;
  quantity: string;
  verified: boolean;
  image?: string;
  status: "AVAILABLE" | "PENDING_VERIFICATION" | "RESERVED" | "DONATED" | "SHIPPED";
  donorId: string;
  recipientId?: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  role: "DONOR" | "PHARMACIST" | "NGO" | "PATIENT";
  trustScore: number;
  avatar: string;
  location: string;
  impactMeds: number;
}

interface AppState {
  currentUser: User | null;
  medicines: Medicine[];
  notifications: Array<{ id: string; message: string; type: "info" | "success" | "warning"; read: boolean }>;
  
  // Auth Actions
  login: (user: User) => void;
  logout: () => void;
  
  // Medicine Actions
  addMedicine: (medicine: Omit<Medicine, "id" | "createdAt">) => void;
  reserveMedicine: (medicineId: string, userId: string) => void;
  updateStatus: (id: string, status: Medicine["status"]) => void;
  
  // Notification Actions
  addNotification: (message: string, type: AppState["notifications"][0]["type"]) => void;
  markNotificationRead: (id: string) => void;
}

const MOCK_MEDICINES: Medicine[] = [
  {
    id: "1",
    name: "Amoxicillin 500mg",
    category: "Antibiotics",
    expiry: "Oct 2026",
    location: "Brooklyn Medical Hub",
    quantity: "20 Caps",
    verified: true,
    status: "AVAILABLE",
    donorId: "donor1",
    createdAt: new Date().toISOString(),
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    name: "Lisinopril 10mg",
    category: "Blood Pressure",
    expiry: "Jan 2027",
    location: "Queens Regional Center",
    quantity: "30 Tabs",
    verified: true,
    status: "AVAILABLE",
    donorId: "donor2",
    createdAt: new Date().toISOString(),
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    name: "Metformin 850mg",
    category: "Diabetes",
    expiry: "Aug 2026",
    location: "Staten Island Pharmacy",
    quantity: "60 Tabs",
    verified: true,
    status: "AVAILABLE",
    donorId: "donor1",
    createdAt: new Date().toISOString(),
    image: "https://images.unsplash.com/photo-1550572017-ed20015ec724?auto=format&fit=crop&q=80&w=800"
  }
];

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentUser: {
        id: "user_1",
        name: "Dr. Sarah Jenkins",
        role: "DONOR",
        trustScore: 98,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        location: "New York, NY",
        impactMeds: 42
      },
      medicines: MOCK_MEDICINES,
      notifications: [],

      login: (user) => set({ currentUser: user }),
      logout: () => set({ currentUser: null }),

      addMedicine: (medicine) => set((state) => ({
        medicines: [
          { ...medicine, id: Math.random().toString(36).substring(7), createdAt: new Date().toISOString() },
          ...state.medicines
        ]
      })),

      reserveMedicine: (medicineId, userId) => set((state) => ({
        medicines: state.medicines.map(m => 
          m.id === medicineId ? { ...m, status: "RESERVED", recipientId: userId } : m
        )
      })),

      updateStatus: (id, status) => set((state) => ({
        medicines: state.medicines.map(m => m.id === id ? { ...m, status } : m)
      })),

      addNotification: (message, type) => set((state) => ({
        notifications: [
          { id: Math.random().toString(36).substring(7), message, type, read: false },
          ...state.notifications
        ]
      })),

      markNotificationRead: (id) => set((state) => ({
        notifications: state.notifications.map(n => n.id === id ? { ...n, read: true } : n)
      })),
    }),
    {
      name: "medihelp-storage",
    }
  )
);
