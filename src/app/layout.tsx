"use client";
import { StreamersProvider } from "@/context/Streamers";
import { queryClient } from "@/services/queryClient";
import { Metadata } from "next";
import { QueryClientProvider } from "react-query";
import localFont from "next/font/local";
import "./globals.css";

const Robbert = localFont({
  src: [
    { path: "../fonts/Roobert-Regular.otf", style: "regular", weight: "500" },
    { path: "../fonts/Roobert-Bold.otf", style: "bold", weight: "700" },
  ],
  variable: "--font-Robbert-Regular",
});

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
          <body
            className={`${Robbert.variable} bg-neutral-900 text-zinc-50 font-robbert`}
          >
            {children}
          </body>
        </StreamersProvider>
      </QueryClientProvider>
    </html>
  );
}
