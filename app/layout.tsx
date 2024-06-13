import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poly, Syne, DM_Sans, Archivo } from "next/font/google";

const poly = Poly({ subsets: ["latin"], weight: ["400"] });
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
