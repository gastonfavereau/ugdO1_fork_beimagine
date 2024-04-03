import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import WhatsAppIcon from "@/components/navbar/whatsIcon";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "UGD Virtual",
  description: "Virtual University for Undergraduates and Graduates",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};
export default function RootLayout({ children, params }) {
  return (
    <html lang="en" params={params}>
      <body className={inter.className}>
        <Navbar params={params.locales} />
        {children}
        <WhatsAppIcon />
        <Footer />
      </body>
    </html>
  );
}
