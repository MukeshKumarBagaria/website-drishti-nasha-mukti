import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drishti Nasha Mukti Evam Manochikitsa Kendra | Addiction Recovery Center",
  description: "Ummeed ki Nazar, Nashamukt Safar. Premier rehabilitation center for alcohol and drug de-addiction, mental health care, and holistic recovery in India. 24/7 support available.",
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
        {children}
      </body>
    </html>
  );
}
