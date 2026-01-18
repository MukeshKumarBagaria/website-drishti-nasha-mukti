import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import AOSInit from "@/components/AOSInit";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drishti Nasha Mukti Evam Manochikitsa Kendra | Addiction Recovery Center",
  description: "Ummeed ki Nazar, Nashamukt Safar. Premier rehabilitation center for alcohol and drug de-addiction, mental health care, and holistic recovery in Bhopal. 24/7 support available.",
  keywords: "nasha mukti kendra, addiction recovery, alcohol de-addiction, drug rehabilitation, mental health, counseling, Delhi, India",
  openGraph: {
    title: "Drishti Nasha Mukti Evam Manochikitsa Kendra",
    description: "Begin your journey to a Nasha Mukt life with compassionate, evidence-based treatment.",
    type: "website",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSInit />
        <div className="fixed-header-wrapper">
          <TopBar />
          <Navbar />
        </div>
        {children}
        <FloatingCTA />
        <Footer />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6QNC2C3DWB" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6QNC2C3DWB');
          `}
        </Script>
      </body>
    </html>
  );
}
