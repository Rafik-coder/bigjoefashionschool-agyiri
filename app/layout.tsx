import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Big Agyiri Fashion School",
  description: "The Number 1 Fashion School in Ghana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const unpaid = true;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {unpaid ? (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        ) : (
          <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="max-w-2xl mx-auto text-center p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Access Restricted
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  This content is currently unavailable. Please contact our
                  support team.
                </p>
                {/* <Button
                  asChild
                  className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-black font-accent font-medium rounded-full hover:bg-secondary/90 transition shadow-md"
                >
                  <Link href="/contact">Contact Support</Link>
                </Button> */}
              </div>
            </div>
          </>
        )}
      </body>
    </html>
  );
}
