import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SteadAI",
  description: "작은 습관도 오래가게, 꾸준함을 함께 지켜주는 앱 | Make small habits last, stay consistent with our app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen bg-gray-50 text-gray-900"
      >
        <header>
          <Navbar />
        </header>
        <main className="max-w-md mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
