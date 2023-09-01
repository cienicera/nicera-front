import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

import Image from "next/image";
import Navigation from "./component/navbar";

export const metadata: Metadata = {
  title: "Nicera labs",
  description: "Audience-Interactive Artistic Performances",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" overflow-y-scroll overflow-x-hidden">
        <header>
          <Navigation />

        </header>
          <div className={inter.className}>{children}</div>
      </body>
    </html>
  );
}
