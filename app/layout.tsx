import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FloatingActionButtons from "./components/floatButtonAction";
import Header from "./components/header";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  icons: {
    icon: '/images/25.jpg'
  },
  title: "Thành lập doanh nghiệp",
  description: "Thành lập doanh nghiệp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <FloatingActionButtons />
        <Footer />
      </body>
    </html>
  );
}
