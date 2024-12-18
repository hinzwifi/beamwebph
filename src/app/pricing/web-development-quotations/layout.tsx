import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Beam PH",
  description: "Nurturing Tomorrow's Brands, Today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
