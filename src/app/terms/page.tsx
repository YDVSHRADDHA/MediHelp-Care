import { LegalLayout } from "@/components/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout 
      title="Terms of Service" 
      subtitle="Operational framework for institutional participation in the MediHelp grid."
    >
      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">1. Institutional Eligibility</h2>
          <p className="text-slate-600 leading-relaxed">
            Participation in the MediHelp redistribution grid is restricted to accredited healthcare providers, 
            pharmaceutical manufacturers, and verified NGOs. All entities must maintain active licensing 
            within their respective jurisdictions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">2. Verification Liability</h2>
          <p className="text-slate-600 leading-relaxed">
            Donors are responsible for the initial condition and storage of surplus medications up to the point 
            of institutional transfer. MediHelp's pharmacist-led verification protocol acts as a second-layer 
            safety gate but does not absolute donor liability for batch integrity.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">3. Redemption Protocol</h2>
          <p className="text-slate-600 leading-relaxed">
            Medications listed on the grid are intended for charitable redistribution and may not be 
            resold for profit. Violations of this protocol will result in immediate node termination 
            and reporting to regional regulatory authorities.
          </p>
        </section>

        <section className="p-8 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-500 text-sm">
          MediHelp Healthcare Systems Terms of Participation v4.0.
        </section>
      </div>
    </LegalLayout>
  );
}
