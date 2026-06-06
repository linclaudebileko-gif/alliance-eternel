import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alliance Éternelle – Fortifier les couples, préserver les alliances",
  description:
    "Plateforme chrétienne de préservation et de restauration du mariage. Accompagnement quotidien, coach conjugal, dévotion et bilan de santé du couple.",
  keywords:
    "mariage chrétien, couple, conseil conjugal, restauration, foi, famille",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col gradient-bg">{children}</body>
    </html>
  );
}
