import { LegalLayout } from "@/components/LegalLayout";
import { ShieldCheck } from "lucide-react";

export default function HIPAAPage() {
  return (
    <LegalLayout 
      title="HIPAA Compliance" 
      subtitle="Ensuring the security and privacy of Protected Health Information (PHI)."
    >
      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">1. Administrative Safeguards</h2>
          <p className="text-slate-600 leading-relaxed">
            MediHelp has implemented comprehensive administrative policies to manage the selection, 
            development, and implementation of security measures to protect PHI and to manage the 
            conduct of its workforce in relation to the protection of that information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">2. Physical Safeguards</h2>
          <p className="text-slate-600 leading-relaxed">
            Our physical infrastructure is protected by rigorous access controls, workstation security 
            protocols, and device/media controls to prevent unauthorized physical access to 
            electronic information systems and the facilities in which they are housed.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">3. Technical Safeguards</h2>
          <p className="text-slate-600 leading-relaxed">
            All electronic PHI (ePHI) is protected via sophisticated access controls, audit controls, 
            integrity controls, and transmission security. We ensure that ePHI is not improperly 
            altered or destroyed and that it is encrypted during transmission.
          </p>
        </section>

        <div className="p-10 bg-blue-50 border border-blue-100 rounded-3xl flex items-center gap-6">
           <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <ShieldCheck className="w-8 h-8" />
           </div>
           <div>
              <h4 className="text-lg font-bold text-slate-900">Certified BAA Available</h4>
              <p className="text-sm text-slate-600">Institutional partners can request our standard Business Associate Agreement (BAA) for their compliance records.</p>
           </div>
        </div>
      </div>
    </LegalLayout>
  );
}
