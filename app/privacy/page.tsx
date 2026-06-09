import LegalPage from "@/components/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy">
      <p>
        Spartyn Capital respects your privacy. This Privacy Policy explains how
        we may collect, use, and protect information submitted through our
        websites, applications, contact forms, and related services.
      </p>

      <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
      <p>
        We may collect basic contact information such as name, email address,
        company name, phone number, and message details when you contact us or
        request information.
      </p>

      <h2 className="text-2xl font-bold text-white">How We Use Information</h2>
      <p>
        We use submitted information to respond to inquiries, evaluate
        opportunities, provide support, improve our services, and communicate
        with users, partners, founders, and companies.
      </p>

      <h2 className="text-2xl font-bold text-white">Data Sharing</h2>
      <p>
        We do not sell personal information. We may share information with
        trusted service providers, advisors, or partners only when reasonably
        necessary to operate the business or respond to a request.
      </p>

      <h2 className="text-2xl font-bold text-white">Contact</h2>
      <p>
        For privacy questions, contact: paul@spartyncapital.com
      </p>
    </LegalPage>
  );
}