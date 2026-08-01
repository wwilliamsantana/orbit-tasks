import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { BoardProvider } from "@/components/providers/BoardProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Orbit Tasks",
    template: "%s | Orbit Tasks",
  },
  description:
    "Modern Kanban Board built with Next.js, TypeScript and Dnd Kit.",
  metadataBase: new URL("https://orbit-tasks-ten.vercel.app/"),
  applicationName: "Orbit Tasks",
  keywords: [
    "Kanban",
    "Task Manager",
    "Project Management",
    "React",
    "Next.js",
    "TypeScript",
    "Dnd Kit",
    "Portfolio",
  ],
  authors: [
    {
      name: "William Santana",
      url: "https://github.com/wwilliamsantana",
    },
  ],
  creator: "William Santana",
  openGraph: {
    title: "Orbit Tasks",
    description: "Modern Kanban Task Manager built with Next.js.",
    url: "https://orbit-tasks-ten.vercel.app/",
    siteName: "Orbit Tasks",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 1362,
        height: 870,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <BoardProvider>{children}</BoardProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
