import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "BiPChallenge Leaderboard",
  description: "Track your progress and compete in the BiPChallenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable}`}>
      <body className={`${archivo.className}`}>{children}</body>
    </html>
  );
}
