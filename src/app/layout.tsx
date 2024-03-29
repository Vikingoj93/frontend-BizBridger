import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/app/components/NavBar";
import AuthContext from "../context/AuthContext";

export const metadata: Metadata = {
  title: "BizBridgerApp",
  description: "Organizador personal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <AuthContext>
            <NavBar />
            {children}
          </AuthContext>
        </div>
      </body>
    </html>
  );
}
