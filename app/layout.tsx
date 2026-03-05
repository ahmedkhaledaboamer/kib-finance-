import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${cairo.variable} ${cairo.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
