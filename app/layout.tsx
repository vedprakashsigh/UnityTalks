import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UnityTalks",
  description:
    "Welcome to UnityTalks, the ultimate nexus for unified conversations and collaboration. Designed as an inclusive and versatile platform, UnityTalks brings people together, transcending boundaries through seamless communication channels. Engage in vibrant discussions, share ideas, and forge connections effortlessly within this dynamic space. From lively voice chats to organized text channels and comprehensive community tools, UnityTalks empowers individuals and groups to convene, collaborate, and build thriving communities. Experience the power of unity in communication, where every conversation leads to new connections and boundless opportunities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
