import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Find Local Trusted Tradespeople & Masons in UK | Myproject.ai",
  description: "Connect with certified local tradespeople in minutes. Post your construction, home improvement, or stone offcut project for free and receive competitive bids on MAI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
