import type { Metadata } from "next";
import { Fraunces, Cormorant_Garamond, Nunito } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aline Cuida - Orientação Pediátrica",
  description: "Serviço de orientação pediátrica via WhatsApp com a Dra. Aline Rodrigues. Você não está sozinha nisso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${cormorant.variable} ${nunito.variable} antialiased selection:bg-accent-coral/30`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
