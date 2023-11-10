import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { CartContextProvider } from "@/contexts/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FSW Store",
  description: "Your absolute best ecommerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CartContextProvider>
        <html lang="en">
          <body className={`${inter.className}`}>{children}</body>
        </html>
      </CartContextProvider>
    </ClerkProvider>
  );
}
