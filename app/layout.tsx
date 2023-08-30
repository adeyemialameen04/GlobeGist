import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import { CategoryProvider } from "./context/CategoryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Globe Gist",
  description:
    "Stay connected and informed with Globe Gist, the ultimate news app designed to bring you the latest updates from around the world. Personalized newsfeed, real-time updates, diverse sources, multimedia experience, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CategoryProvider>
          <Navbar />
          {children}
        </CategoryProvider>
      </body>
    </html>
  );
}
