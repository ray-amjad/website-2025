import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rayamjad.com"),
  title: "Ray Amjad",
  description: "Personal website of Ray Amjad",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <div className="flex-1">
          {children}
        </div>
        <footer className="fixed bottom-0 left-0 right-0 text-center py-2 text-xs text-gray-500 dark:text-gray-400">
          <a
            href="/company"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            RAY AMJAD LTD (14506459)
          </a>
        </footer>
      </body>
    </html>
  );
}
