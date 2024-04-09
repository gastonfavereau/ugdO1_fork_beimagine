
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import WhatsAppIcon from "@/components/navbar/whatsIcon";
import Script from "next/script";
import ChatbotComponent from "@/components/salesforce/customBot";

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
  function initEmbeddedMessaging() {
    console.log("initEmbeddedMessaging");
    try {
      console.log("initEmbeddedMessaging:Try");
      embeddedservice_bootstrap.settings.language = "es"; // For example, enter 'en' or 'en-US'

      embeddedservice_bootstrap.init(
        "00DHp000001rh2f",
        "Web_UGD",
        "https://fundacionipesmi.my.site.com/ESWWebUGD1704222990712",
        {
          scrt2URL: "https://fundacionipesmi.my.salesforce-scrt.com",
        }
      );
    } catch (err) {
      console.error("Error loading Embedded Messaging: ", err);
    }
  }

  return (
    <html lang="en" params={params}>
      <body className={inter.className}>
        <Navbar params={params.locales} />
        {children}
        <WhatsAppIcon />
        <Footer />
        <ChatbotComponent/>
      </body>
    </html>
  );
}
