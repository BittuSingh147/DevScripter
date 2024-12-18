import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "DevScripter",
  description: "Innovative Code Editor Platform",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "DevScripter",
    description: "Code Editor for Modern Developers",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html 
        lang="en" 
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <body
          className={`
            antialiased 
            min-h-screen 
            flex 
            flex-col 
            bg-gradient-to-br 
            from-gray-900 
            via-gray-950 
            to-black 
            text-gray-100 
            selection:bg-blue-500/30 
            selection:text-white
            scrollbar-thin 
            scrollbar-track-gray-900 
            scrollbar-thumb-gray-700/50
          `}
        >
          {/* Subtle animated background overlay */}
          <div 
            className="
              fixed 
              inset-0 
              pointer-events-none 
              opacity-20 
              bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
              from-blue-900/10 
              via-transparent 
              to-transparent 
              z-[-1]
            "
          />

          <ConvexClientProvider>
            <div className="flex-grow">
              {children}
            </div>
          </ConvexClientProvider>
          
          <Footer/>
          <Toaster/>
        </body>
      </html>
    </ClerkProvider>
  );
}

//piston api
//https://emkc.org/api/v2/piston/runtimes