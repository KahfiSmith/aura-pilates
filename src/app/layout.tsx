import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AURA Movement Studio: Contemporary Reformer Pilates Surabaya",
  description:
    "Contemporary pilates movement studio di Surabaya Barat dengan peralatan Balanced Body Allegro 2, instruktur bersertifikasi internasional STOTT, dan fokus pada presisi gerak fungsional.",
  keywords: [
    "pilates surabaya",
    "reformer pilates surabaya",
    "aura movement studio",
    "stott pilates surabaya",
    "pilates bukit darmo golf",
    "reformer class surabaya barat",
    "athletic pilates surabaya",
    "skoliosis pilates surabaya",
  ],
  authors: [{ name: "AURA Movement Studio" }],
  openGraph: {
    title: "AURA Movement Studio: Contemporary Reformer Pilates Surabaya",
    description:
      "Contemporary pilates movement studio di Surabaya Barat dengan peralatan Balanced Body Allegro 2, instruktur bersertifikasi STOTT, dan fokus pada presisi gerak fungsional.",
    url: "https://aurapilates.id",
    siteName: "AURA Movement Studio",
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
      <body className="antialiased min-h-screen flex flex-col bg-[#F8F8F7] text-[#121312]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
