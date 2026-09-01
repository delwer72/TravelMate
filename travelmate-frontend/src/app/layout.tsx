import type { Metadata } from "next";
import { Poppins, Volkhov } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/lib/auth-context";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-volkhov",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Travel-goo – Travel Planning & Review Platform",
  description: "Book your trip in minutes, get full control for much longer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${volkhov.variable}`}>
      <body className="flex flex-col min-h-screen font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* AuthProvider makes useAuth() available throughout the entire app */}
          <AuthProvider>
            {/* Navbar component */}
            <Navbar />

            {/* Main content */}
            <main className="flex-grow w-full">
              {children}
            </main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}