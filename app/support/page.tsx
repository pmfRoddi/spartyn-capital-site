import LegalPage from "@/components/LegalPage";

export default function SupportPage() {
  return (
    <LegalPage eyebrow="Support" title="Support">
      <p>
        For support related to Spartyn Capital, Praxis, or any associated app,
        website, or product, contact us directly.
      </p>

      <h2 className="text-2xl font-bold text-white">Support Email</h2>
      <p>paul@spartyncapital.com</p>

      <h2 className="text-2xl font-bold text-white">What to Include</h2>
      <p>
        Please include your name, email address, the product or service you are
        contacting us about, and a short description of the issue or request.
      </p>

      <h2 className="text-2xl font-bold text-white">Response Time</h2>
      <p>
        We aim to respond to support and business inquiries as soon as reasonably
        possible.
      </p>
    </LegalPage>
  );
}