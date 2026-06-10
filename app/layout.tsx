import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medical Lien Management Inc | Lien Collections in California",
  description: "MLM Inc is a healthcare billing company in Corona, CA with expertise in worker comp billing, helping providers with medical lien recovery & resolution services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
