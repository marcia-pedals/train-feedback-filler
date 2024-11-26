import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@mui/material";

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
        <Container maxWidth="sm">{children}</Container>
      </body>
    </html>
  );
}
