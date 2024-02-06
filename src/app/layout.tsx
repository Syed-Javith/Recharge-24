import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Home/Nav/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import Head from "next/head";
import { getAuthSession } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Recharge-2k24",
  description: "Presented by REC",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getAuthSession();

  return (
    <html lang="en">

      <Head>
        <script type="text/javascript" src="/static/Landing.js"></script>
      </Head>
      <body
        className={cn(
          // "min-h-screen bg-[#0c0c2d] font-sans antialiased",
          "min-h-screen bg-[#101520] font-sans antialiased",
          GeistSans.variable
        )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
        >
          <Navbar session={session}/>
          <Providers>{children}</Providers>
          <Toaster richColors/>
        </ThemeProvider>

      </body>
    </html>
  );
}
