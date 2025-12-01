import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { MouseFollower } from "@/components/MouseFollower";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jasmeet Singh - AI Solutions Developer Portfolio",
  description: "Portfolio of Jasmeet Singh, showcasing AI automation solutions, N8N workflows, LangChain integrations, and full-stack development projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MouseFollower />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
