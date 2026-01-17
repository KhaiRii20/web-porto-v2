import type { Metadata } from "next";
import { Merriweather } from "next/font/google"; 
import "./globals.css";
import 'remixicon/fonts/remixicon.css'; // Import Icon Pack

const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Daffa Khairi | Portfolio",
  description: "Portfolio of Muhammad Daffa Khairi Addin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={merriweather.className}>{children}</body>
    </html>
  );
}