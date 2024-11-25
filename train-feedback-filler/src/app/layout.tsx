import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Train Feedback Filler",
  description: "Fills feedback for trains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
