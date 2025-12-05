// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LiquidBackground from '../components/LiquidBackground';

export const metadata = {
  title: 'Rugved | Liquid Glass Portfolio',
  description: 'Portfolio with liquid glass theme, projects, fun, connect, newsletter & support.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark-void text-light">
        <LiquidBackground />
        <Navbar />
        <main className="app-main container py-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
