/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paula Schurt",
  description:
    "Paula Schurt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/logo-paula.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image/bg2.png')" }}>
          <Layout>
            {children}
          </Layout>
        </div>
      </body>
    </html>
  );
}