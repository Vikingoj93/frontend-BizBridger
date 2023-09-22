import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar/>
          {children}</Providers>
      </body>
    </html>
  );
}
