// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Header />
      {children}
      <Footer />
    </NextUIProvider>
  );
}
