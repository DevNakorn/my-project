import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import { Metadata} from "next";

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

export const metadata = {
  title : 'Lrx',
  description : "Welcome to my Lr config Ai",
  keywords : 'Ai, Lightroom, Setting, lr, preset'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Navbar />
        {children}
      </body>
    </html>
  );
}
