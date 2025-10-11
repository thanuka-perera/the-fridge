import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FridgeProvider } from "@/context";
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Fridge Application",
  description: "Created by Thanuka Perera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <FridgeProvider>
          {children}
          <Toaster position="top-right" richColors={true}/>
        </FridgeProvider>
      </body>
    </html>
  );
}
