import { LegalLayout } from "@/components/LegalLayout";
import { Lock, ShieldCheck } from "lucide-react";

export default function SecurityPage() {
  return (
    <LegalLayout 
      title="Data Security" 
      subtitle="Enterprise-grade security infrastructure for the global redistribution grid."
    >
      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">1. Infrastructure Security</h2>
          <p className="text-slate-600 leading-relaxed">
            MediHelp is built on a resilient, multi-cloud architecture with automated failover and 
            redundancy. Our systems are housed in SOC 2 Type II and ISO 27001 certified data centers 
            featuring biometric access controls and 24/7 security personnel.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">2. Encryption Standards</h2>
          <p className="text-slate-600 leading-relaxed">
            All data is encrypted at rest using AES-256 and in transit using TLS 1.3. We utilize 
            Hardware Security Modules (HSM) for managing cryptographic keys, ensuring that even 
            MediHelp administrators do not have access to raw sensitive data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">3. Continuous Monitoring</h2>
          <p className="text-slate-600 leading-relaxed">
            Our security team employs real-time threat detection, automated vulnerability scanning, 
            and quarterly third-party penetration testing. We maintain a robust Bug Bounty program 
            to ensure our perimeter remains impenetrable.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 pt-6">
           <div className="p-8 bg-slate-900 text-white rounded-3xl space-y-4 shadow-2xl">
              <Lock className="w-10 h-10 text-blue-500" />
              <h4 className="text-lg font-bold">Zero-Trust Access</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Multi-factor authentication (MFA) and role-based access control (RBAC) are enforced for every node on the grid.</p>
           </div>
           <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl space-y-4">
              <ShieldCheck className="w-10 h-10 text-blue-600" />
              <h4 className="text-lg font-bold text-slate-900">Incident Response</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Our automated incident response framework ensures mitigation of anomalies within milliseconds of detection.</p>
           </div>
        </div>
      </div>
    </LegalLayout>
  );
}
