import type { Metadata } from "next";
// This imports the CSS file you created in the styles folder
import "../styles/globals.css"; 

export const metadata: Metadata = {
  title: "Bahran Solomon - Portfolio",
  description: "Front-end Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}