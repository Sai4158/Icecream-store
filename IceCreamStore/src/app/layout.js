import "./globals.css";
import { Playfair_Display, Outfit } from "next/font/google";
import { Providers } from "./providers";
import CartSidebar from "@/components/CartSidebar";
import LiquidScroll from "@/components/LiquidScroll";
import VoiceOrdering from "@/components/VoiceOrdering";
import NutritionCalculator from "@/components/NutritionCalculator";
import LoyaltyMeltdown from "@/components/LoyaltyMeltdown";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "FrostBite | Liquid Glass Experience",
  description: "The future of frozen desserts. Handcrafted, premium, and liquid smooth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${playfair.variable} bg-zinc-50 text-zinc-900`}>
        <Providers>
          <LiquidScroll>
            {children}
          </LiquidScroll>
          <CartSidebar />
          <VoiceOrdering />
          <NutritionCalculator />
          <LoyaltyMeltdown />
        </Providers>
      </body>
    </html>
  );
}
