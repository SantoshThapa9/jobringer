import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

import "./globals.css";

export const metadata: Metadata = {
  title: "Jobringer - Modern Job Board by Santosh Thapa",
  description:
    "Jobringer is a modern job board platform developed by Santosh Thapa using Next.js, TypeScript, and Tailwind CSS. Discover jobs, connect talent, and explore opportunities worldwide.",
  robots: "index, follow",
  metadataBase: new URL("https://jobringer-fawn.vercel.app/"),

  authors: [
    {
      name: "Santosh Thapa",
      url: "https://santosh-gamma.vercel.app/",
    },
  ],
  creator: "Santosh Thapa",
  openGraph: {
    title: "Jobringer - Modern Job Board by Santosh Thapa",
    description:
      "Explore Jobringer, a powerful job board platform built with modern web technologies by Santosh Thapa. Fast, responsive, and optimized for career connections.",
    url: "https://jobringer-fawn.vercel.app/",
    siteName: "Jobringer",

    images: [
      {
        url: "https://jobringer-fawn.vercel.app/logonew.svg",
        width: 1200,
        height: 630,
        alt: "Jobringer - Modern Job Board by Santosh Thapa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobringer - Modern Job Board by Santosh Thapa",
    description:
      "A modern job board built with Next.js and TypeScript by Santosh Thapa. Discover jobs, filter with ease, and connect globally.",
    creator: "@SantoshThapa689",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
