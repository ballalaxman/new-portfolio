// app/providers.tsx
"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
