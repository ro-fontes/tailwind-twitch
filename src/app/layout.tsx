"use client";
import { StreamersProvider } from "@/context/Streamers";
import { queryClient } from "@/services/queryClient";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryClientProvider } from "react-query";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// const Robbert = localFont({
//   src: [
//     { path: "../fonts/Roobert-Regular.otf", style: "regular" },
//     { path: "../fonts/Roobert-Bold.otf", style: "bold" },
//     { path: "../fonts/Roobert-SemiBold.otf", style: "semiBold" },
//     { path: "../fonts/Roobert-Medium.otf", style: "medium" },
//   ],
//   variable: "--font-Robbert-Regular",
// });

export const metadata: Metadata = {
  title: "Twitch",
  description: "See your Live-Stream here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <StreamersProvider>
          <body className={`${inter.variable} text-zinc-50 font-inter`}>
            {children}
          </body>
        </StreamersProvider>
      </QueryClientProvider>
    </html>
  );
}
