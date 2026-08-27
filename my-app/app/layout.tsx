import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio of Zhuen Zhong",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        {/* Tech/Mechanical Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 24%, rgba(100, 150, 255, 0.15) 25%, rgba(100, 150, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(100, 150, 255, 0.15) 75%, rgba(100, 150, 255, 0.15) 76%, transparent 77%, transparent),
                linear-gradient(90deg, transparent 24%, rgba(100, 150, 255, 0.15) 25%, rgba(100, 150, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(100, 150, 255, 0.15) 75%, rgba(100, 150, 255, 0.15) 76%, transparent 77%, transparent)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
