"use client";

import { CartProvider } from "@/contexts";
import { Toaster } from "sonner";

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position="top-right" />

      <CartProvider>{children}</CartProvider>
    </>
  );
}
