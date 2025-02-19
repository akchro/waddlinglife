import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Waddling Life",
  description: "Finding what it feels to be alive.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
