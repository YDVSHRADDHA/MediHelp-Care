import { LegalLayout } from "@/components/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout 
      title="Privacy Policy" 
      subtitle="Institutional data protection and patient privacy protocols."
    >
      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">1. Data Collection Protocol</h2>
          <p className="text-slate-600 leading-relaxed">
            MediHelp collects institutional data required for the verification and redistribution of pharmaceutical surplus. 
            This includes facility licensing, pharmacist credentials, and batch-specific medication data. 
            Patient data is only collected when explicitly required for the final dispensation protocol.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">2. Technical Safeguards</h2>
          <p className="text-slate-600 leading-relaxed">
            We utilize industry-standard encryption protocols (AES-256) for all data at rest and in transit. 
            Our infrastructure is hosted in SOC 2 Type II certified data centers with 24/7 monitoring and redundancy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">3. Institutional Disclosure</h2>
          <p className="text-slate-600 leading-relaxed">
            MediHelp does not sell or lease institutional data to third parties. Data is only shared with 
            verified regulatory bodies and partner nodes within the redistribution grid as required by 
            healthcare distribution laws.
          </p>
        </section>

        <section className="p-8 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-500 text-sm">
          Last Updated: May 12, 2026. Version 4.2.1-PRO.
        </section>
      </div>
    </LegalLayout>
  );
}
