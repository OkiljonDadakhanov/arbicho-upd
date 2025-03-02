import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/footer";



export const metadata: Metadata = {
  title:
    "Abu Rayhan Biruni International Chemistry Olympiad | Global Science Competition",
  description:
    "Compete in the Abu Rayhan Biruni International Chemistry Olympiad, a prestigious global competition for young chemists. Test your skills, gain recognition, and connect with future scientists.",
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
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
