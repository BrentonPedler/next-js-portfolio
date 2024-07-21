import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hire Brenton Pedler",
  description: "The homepage for Brenton Pedler. Web Developer and Creator.",
};

export default function RootLayout( { children } ) {
  return (
    <html lang="en">
      <body 
        className='
          max-w-screen-xl 
          mx-auto 
          px-8
        '
      >
        <Header />
        {
          children
        }
        <Footer />
      </body>
    </html>
  );
}
