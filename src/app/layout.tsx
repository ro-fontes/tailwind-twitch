import { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-neutral-900 text-zinc-50">{children}</body>
    </html>
  );
}
