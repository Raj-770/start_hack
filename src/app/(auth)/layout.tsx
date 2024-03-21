import {ClerkProvider} from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Flow | Join Flow",
  description: "Be a part of the flow community.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-[#000000]`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
