import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // ✅ Import your custom CSS
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rugved Joshi | Portfolio',
  description: 'A vibrant, responsive developer portfolio.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-dark d-flex flex-column min-vh-100`}>
        <Navbar />
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
