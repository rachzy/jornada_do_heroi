import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Metahumans",
  description: "Select two different metahumans and put them to fight!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body>{children}</body>
    </html>
  );
}
