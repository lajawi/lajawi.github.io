import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { ImageProvider } from "@/app/contexts/image-context";
import { FullscreenImage } from "@/app/components/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s • Laurin Winter",
    default: "Laurin Winter"
  },
  description: "Laurin Winter's personal website",
  robots: {
    noarchive: true,
  },
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_BASE_URL)),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-svh">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-full`}
      >
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-4 min-h-3/4">
          <ImageProvider>
            {children}
            <FullscreenImage />
          </ImageProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
