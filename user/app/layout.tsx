import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import ClientProviders from "@/components/clientProvider/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mubasil's Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <ClientProviders>
          <StarsCanvas />
          <Navbar />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>

  );
}
