import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import TerminalEgg from "@/components/TerminalEgg";

export const metadata: Metadata = {
  title: "Cameron Mordoff — Systems Administrator",
  description: "Senior Systems Administrator with 7+ years of experience in endpoint management, automation, and infrastructure. Specializing in Microsoft Intune, Jamf, PowerShell, and Azure.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Cameron Mordoff — Systems Administrator",
    description: "Senior Systems Administrator with 7+ years of experience in endpoint management, automation, and infrastructure.",
    url: "https://cameron.mordoff.com",
    siteName: "Cameron Mordoff",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cameron Mordoff — Systems Administrator",
    description: "Senior Systems Administrator with 7+ years of experience in endpoint management, automation, and infrastructure.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply saved theme before first paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var saved=localStorage.getItem('theme');var t=saved?saved:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');if(t==='dark')document.documentElement.classList.add('dark');})()`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="pt-16 flex-1">{children}</main>
          <Footer />
          <TerminalEgg />
        </ThemeProvider>
      </body>
    </html>
  );
}
