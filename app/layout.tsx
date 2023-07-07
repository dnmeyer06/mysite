import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import NavBar from "@/components/Navigation/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daniel Meyer's Portfolio",
  description:
    "A portfolio of Daniel Meyer's work. Created with Next.js, Tailwind CSS, and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Daniel Meyer</title>
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="flex justify-center">
            <div className="w-11/12 lg:w-10/12">
              <NavBar />
              <div className="py-10">{children}</div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
