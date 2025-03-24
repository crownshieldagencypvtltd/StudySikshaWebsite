import type React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Shiksha Yogya | The Right Education for a Worthy Future",
  description:
    "Your trusted partner for overseas education - Study in UK, USA, Canada, Australia, Europe and more.",
  generator: "deveyes.com",
  keywords: [
    "education consultancy",
    "study abroad",
    "career counseling",
    "college admissions",
    "scholarships",
    "internships",
    "job assistance",
    "free consultation",
  ],
  authors: [{ name: "Shiksha Yogya Pvt Ltd.", url: "https://www.shikshayogya.com" }],
  openGraph: {
    title: "Shiksha Yogya | The Right Education for a Worthy Future",
    description:
      "Your trusted partner for overseas education providing expert guidance for studying abroad in prestigious universities worldwide.",
    url: "https://www.shikshayogya.com",
    siteName: "Shiksha Yogya",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Shiksha Yogya Pvt Ltd." />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${poppins.variable} font-sans bg-white text-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}