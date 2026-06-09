import LegalPage from "@/components/LegalPage";

export default function DataDeletionPage() {
  return (
    <LegalPage eyebrow="Privacy" title="Data Deletion Request">
      <p>
        You may request deletion of personal information associated with Spartyn
        Capital, Praxis, or any related application or service.
      </p>

      <h2 className="text-2xl font-bold text-white">How to Request Deletion</h2>
      <p>
        Email paul@spartyncapital.com with the subject line “Data Deletion
        Request.” Include the email address or account information associated
        with your request.
      </p>

      <h2 className="text-2xl font-bold text-white">Verification</h2>
      <p>
        We may ask for reasonable verification before deleting data to protect
        users and prevent unauthorized deletion requests.
      </p>

      <h2 className="text-2xl font-bold text-white">Processing</h2>
      <p>
        Once verified, we will delete or de-identify eligible personal data
        unless retention is required for legal, security, fraud prevention, or
        business compliance reasons.
      </p>
    </LegalPage>
  );
}