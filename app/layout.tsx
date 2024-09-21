import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FixedAvatar from "@/components/fixedavatar";
import Layout from '../components/layout'
import { AlertProvider } from "@/components/alert/Alert";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Amethyst",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AlertProvider>
          {children}
        </AlertProvider>
        
      </body>
    </html>
  );
}
