import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spartyncapital.com"),
  title: {
    default:
      "Spartyn Capital | Strategic Advisory, Capital Structuring & Venture Development",
    template: "%s | Spartyn Capital",
  },
  description:
    "Spartyn Capital provides structured strategy, capital advisory, venture development, and execution support for founders, operators, and growth-stage opportunities.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Spartyn Capital",
    description:
      "Structured strategy, disciplined execution, and capital advisory for high-growth opportunities.",
    url: "https://spartyncapital.com",
    siteName: "Spartyn Capital",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Spartyn Capital",
  legalName: "Spartyn Capital LLC",
  url: "https://spartyncapital.com",
  description:
    "Spartyn Capital provides structured strategy, capital advisory, venture development, and execution support.",
  email: "advisory@spartyncapital.com",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}