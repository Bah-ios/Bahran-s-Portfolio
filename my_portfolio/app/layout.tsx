import type { Metadata } from "next";
import "./globals.css"; // Ensure this path matches your folder structure

export const metadata: Metadata = {
  title: "Bahran's Portfolio",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We removed the Montserrat variable here to stop the crash */}
      <body>{children}</body>
    </html>
  );
}