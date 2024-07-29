// app/providers.tsx
"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
