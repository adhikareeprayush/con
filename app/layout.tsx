import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Resuable/Nav";

export const metadata: Metadata = {
  title: "Convolution Labs",
  description: "Stay ahead of the curve with our forward-thinking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="antialiased">
        <div className="background-noise"></div>
        <Nav />
        {children}
      </body>
    </html>
  );
}
