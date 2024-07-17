"use client";

import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";

export default function Component() {
  return (
    <ThemeProvider attribute="class">
      <Header />
    </ThemeProvider>
  );
}
