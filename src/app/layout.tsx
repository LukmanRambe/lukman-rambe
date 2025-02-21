import type { Metadata } from 'next';
import { Montserrat, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '900'],
});

const robotMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Lukman Rambe',
  description:
    "Lukman Rambe portfolio's website, a frontend engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on honing my skills while looking for new opportunity!.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`montserrat bg-navy ${montserrat.variable} ${robotMono.variable} antialiased`}
      >
        <Navbar />

        <main className="px-6 sm:px-28 xl:px-[270px] py-12">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
