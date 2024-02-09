import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Home/Nav/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getAuthSession } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Recharge-2k24",
  description: "Presented by REC",
  icons:["/R24.png"]
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getAuthSession();

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-[#030711] font-sans antialiased ",
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
