import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import Nav from "@/components/ui/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hermitra - PCOS Awareness & Support",
  description:
    "Comprehensive PCOS awareness, support, and management platform for women",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken");
  const isLoggedIn = !!token?.value;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav isLoggedIn={isLoggedIn} />
        {children}
      </body>
    </html>
  );
}
