import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Basit Ali - Software Engineer & UI/UX Designer",
  description: "A self-taught UI/UX designer and Software Engineer at WebHR. Creating meaningful and delightful digital products that balance user needs and business goals. 3+ years of industry experience.",
  keywords: [
    "Abdul Basit Ali",
    "Software Engineer",
    "UI/UX Designer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Designer",
    "WebHR Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Abdul Basit Ali" }],
  creator: "Abdul Basit Ali",
  publisher: "Abdul Basit Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ibiimemon.com",
    title: "Abdul Basit Ali - Software Engineer & UI/UX Designer",
    description: "A self-taught UI/UX designer and Software Engineer at WebHR. Creating meaningful and delightful digital products.",
    siteName: "Abdul Basit Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Basit Ali - Software Engineer & UI/UX Designer",
    description: "A self-taught UI/UX designer and Software Engineer at WebHR.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Run a small script before hydration to remove attributes injected by browser extensions
            that could otherwise cause hydration mismatch (e.g. cz-shortcut-listen). */}
        <Script id="remove-extension-attrs" strategy="beforeInteractive">
          {`(function(){try{const b=document && document.body;if(b && b.hasAttribute && b.hasAttribute('cz-shortcut-listen')){b.removeAttribute('cz-shortcut-listen')} }catch(e){}})()`}
        </Script>
        <link rel="canonical" href="https://ibiimemon.com" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
