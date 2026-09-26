import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AURA Pilates Studio: Boutique Reformer & Movement Club Surabaya",
  description:
    "Boutique reformer pilates studio di Surabaya Barat dengan peralatan Balanced Body Allegro 2, instruktur bersertifikasi internasional STOTT, dan suasana tenang berstandar premium.",
  keywords: [
    "pilates surabaya",
    "reformer pilates surabaya",
    "aura pilates studio",
    "stott pilates surabaya",
    "pilates bukit darmo golf",
    "reformer class surabaya barat",
    "pilates prenatal surabaya",
    "skoliosis pilates surabaya",
  ],
  authors: [{ name: "AURA Pilates Studio" }],
  openGraph: {
    title: "AURA Pilates Studio: Boutique Reformer & Movement Club Surabaya",
    description:
      "Boutique reformer pilates studio di Surabaya Barat dengan peralatan Balanced Body Allegro 2, instruktur bersertifikasi STOTT, dan suasana tenang berstandar premium.",
    url: "https://aurapilates.id",
    siteName: "AURA Pilates Studio",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <JsonLd />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A2821]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
