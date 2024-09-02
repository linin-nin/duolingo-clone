import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import ExitModal from "@/components/modals/exitModal";
import HeartModal from "@/components/modals/heartModal";
import PracticeModal from "@/components/modals/practiceModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizzz - Learning by quizing",
  description: "With our web and a few minutes a day, everyone can improve thier languages",
  icons: {
    icon: "/images/duck.png"
  },
  metadataBase: new URL("https://lingo-rho-rosy.vercel.app/")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={nunito.className}>
          <Toaster/>
          <ExitModal/>
          <HeartModal/>
          <PracticeModal/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
