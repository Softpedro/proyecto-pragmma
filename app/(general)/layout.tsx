import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "page coorporative",
  description: "description coorporative"
};

export default function GeneralLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main lang="en">{children}</main>;
}
