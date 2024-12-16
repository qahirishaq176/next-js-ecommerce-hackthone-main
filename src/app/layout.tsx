import type { Metadata } from 'next'
import Navbar from '../Components/Navbar';
import { Poppins } from "next/font/google";
const pop = Poppins({ subsets: ['latin'],
  weight: ['400', '700'],
});
import './globals.css'
import Footer from '../Components/Footer';


export const metadata: Metadata = {
  title: 'CozySpace by Qahir ishaq',
  description: 'Discover premium modern furniture with elegant designs and top-quality materials. Shop single-seaters, tables, and exclusive collections tailored for comfort and style',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={pop.className}>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
