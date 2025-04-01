import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UNIQUE ON - 위스키 & 비지니스 네트워킹",
  description: "위스키와 함께하는 특별한 비지니스 네트워킹",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
