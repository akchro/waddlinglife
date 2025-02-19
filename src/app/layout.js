import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";


export const metadata = {
  title: "Waddling Life",
  description: "Finding what it feels to be alive.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
    <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="06ecfd2c-c86f-49b9-ba7b-ab0b2478f8d6"
    />
    <body
    >
        {children}
    </body>

    </html>
  );
}
