import type { Metadata } from "next";
import { Playfair, Lato } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Sections/Footer";
import Lenis from "./_components/Lenis";

const PlayfairFont = Playfair({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const LatoFont = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://monsba.vercel.app"),
  title: "Monsba - Your Trusted Partner in Construction",
  description:
    "Monsba is a leading construction company specializing in residential and commercial projects. We deliver quality construction services with a focus on innovation, sustainability, and client satisfaction.",
  openGraph: {
    title: "Monsba - Your Trusted Partner in Construction",
    description:
      "Monsba is a leading construction company specializing in residential and commercial projects. We deliver quality construction services with a focus on innovation, sustainability, and client satisfaction.",
    url: "https://monsba.vercel.app",
    siteName: "Monsba",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Monsba Construction Company",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PlayfairFont.className} ${LatoFont.variable} antialiased min-h-screen min-w-screen`}
      >
        <Lenis>
          <Header />
          {children}
          <Footer />
        </Lenis>
      </body>
    </html>
  );
}
