import type { Metadata } from "next";

import { Ubuntu_Sans } from "next/font/google";
import "./globals.css"; // your css file

// Configure the font
const ubuntu = Ubuntu_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu", // This creates a CSS variable
});

import Navbar from "./navbar";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Home | Chuks Kitchen",
  description:
    "Chuks Kitchen: Elevating your dining experience. Explore a curated menu of chef-crafted delicacies made with the finest ingredients. Quality you can taste, service you can trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
