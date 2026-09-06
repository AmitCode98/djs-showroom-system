import type { Metadata } from "next";
import "./globals.css";
import { ShowroomTrayProvider } from "@/context/showroom-tray-context";
import { Toaster } from "@/components/ui/sonner";
import { ShowroomTraySheet } from "@/components/collections/showroom-tray-sheet";
import { RequestSuccessModal } from "@/components/collections/request-success-modal";
import { TabletConfigModal } from "@/components/admin/tablet-config-modal";
import { OfflineBanner } from "@/components/shared/offline-banner";

import { Albert_Sans, Fraunces, Hind_Siliguri } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  variable: "--font-hind-siliguri",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DJS Showroom System | Dutta Jewellers",
  description: "Premium in-store jewellery showroom platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${albertSans.variable} ${fraunces.variable} ${hindSiliguri.variable}`}
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col antialiased">
        <ShowroomTrayProvider>
          <OfflineBanner />
          {children}
          <ShowroomTraySheet />
          <RequestSuccessModal />
          <TabletConfigModal />
          <Toaster position="top-center" richColors />
        </ShowroomTrayProvider>
      </body>
    </html>
  );
}