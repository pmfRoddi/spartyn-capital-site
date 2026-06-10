import LegalPage from "@/components/LegalPage";

export default function ContactPage() {
  return (
    <LegalPage eyebrow="Contact" title="Contact Spartyn Capital">
      <p>
        For business inquiries, advisory requests, partnerships, support, or
        app-related questions, contact Spartyn Capital directly.
      </p>

      <h2 className="text-2xl font-bold text-white">Email</h2>
      <p>advisory@spartyncapital.com</p>

      <h2 className="text-2xl font-bold text-white">Business Inquiries</h2>
      <p>
        Please include your name, company, project, and a brief summary of what
        you would like to discuss.
      </p>

      <h2 className="text-2xl font-bold text-white">Response</h2>
      <p>
        We review messages and respond as soon as reasonably possible.
      </p>
    </LegalPage>
  );
}