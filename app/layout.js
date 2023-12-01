import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import { motion } from "framer-motion";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UGD Virtual University',
  description: 'Generated by create next app',
}
export default function RootLayout({ children,params }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}