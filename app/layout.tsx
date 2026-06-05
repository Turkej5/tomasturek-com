import type { Metadata } from "next";
import { Bangers, Inter } from "next/font/google";
import { CookieConsent } from "@/components/site/cookie-consent";
import "./globals.css";

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tomasturek.com"),
  title: {
    default: "Tomáš Turek — Head of Digital, marketing specialista, vibecoder",
    template: "%s | Tomáš Turek",
  },
  description:
    "Tomáš Turek — Head of Digital v Sherpas, PPC a marketingový specialista, vibecoder a tvůrce cestovatelských webů.",
  openGraph: {
    title: "Tomáš Turek",
    description:
      "Head of Digital, marketingový specialista, vibecoder a cestovatel.",
    url: "https://www.tomasturek.com",
    siteName: "Tomáš Turek",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomáš Turek",
    description: "Head of Digital, marketingový specialista, vibecoder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${bangers.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fff3c4] text-black font-[family-name:var(--font-inter)]">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
