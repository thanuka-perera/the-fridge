import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fridge Application',
  description: 'Created by Thanuka Perera',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} antialiased bg-[#F4FAFF] m-0 p-0 min-h-screen `}
      >
        <div className="fixed inset-0 w-full h-full flex flex-col -z-10">
          <div className="h-[48%] bg-white w-full" />
          <div className="h-[52%] bg-[#F4FAFF] w-full" />
        </div>

        <div className="relative min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {children}
        </div>

        <Toaster position='top-right' richColors={true} />
        
      </body>
    </html>
  );
}
