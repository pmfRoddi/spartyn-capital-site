import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spartyncapital.com"),
  title: {
    default: "Spartyn Capital",
    template: "%s | Spartyn Capital",
  },
  description:
    "Strategic advisory, capital access, venture development, and technology incubation through Praxis.",
  keywords: [
    "Spartyn Capital",
    "Praxis",
    "capital strategy",
    "strategic advisory",
    "venture studio",
    "technology incubator",
    "AI",
    "emerging technology",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Spartyn Capital",
    description: "Capital. Strategy. Access.",
    url: "https://spartyncapital.com",
    siteName: "Spartyn Capital",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}