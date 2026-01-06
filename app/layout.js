// app/layout.js

import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LiquidBackground from "../components/LiquidBackground";

export const metadata = {
  title: "Rugved | Liquid Glass Portfolio",
  description:
    "Portfolio with a liquid glass theme, projects, fun, connect, newsletter & support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark-void text-light">
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Background + Layout */}
        <LiquidBackground />
        <Navbar />

        <main className="app-main container py-5">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
