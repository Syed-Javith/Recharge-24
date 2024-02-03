import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Home/Nav/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Sonner";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Recharge-2k24",
  description: "Presented by REC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"/>
      </head>
      <body
        className={cn(
          "min-h-screen bg-[#101520] font-sans antialiased",
          GeistSans.variable
        )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
        >
          <Navbar />
          <Providers>{children}</Providers>
          <Toaster richColors/>
        </ThemeProvider>
      </body>
    </html>
  );
}
