import LegalPage from "@/components/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service">
      <p>
        These Terms of Service govern your use of Spartyn Capital websites,
        applications, content, and related services.
      </p>

      <h2 className="text-2xl font-bold text-white">Use of Services</h2>
      <p>
        You agree to use our services only for lawful purposes and not to misuse,
        disrupt, reverse engineer, or interfere with our platforms, websites, or
        systems.
      </p>

      <h2 className="text-2xl font-bold text-white">No Guarantee</h2>
      <p>
        Spartyn Capital does not guarantee funding, investment, business
        results, introductions, approvals, or outcomes from use of our services.
      </p>

      <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
      <p>
        All website content, branding, copy, graphics, and technology concepts
        are owned by Spartyn Capital or its respective licensors unless otherwise
        stated.
      </p>

      <h2 className="text-2xl font-bold text-white">Contact</h2>
      <p>
        For terms-related questions, contact: paul@spartyncapital.com
      </p>
    </LegalPage>
  );
}