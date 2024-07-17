"use client";

import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Carousal from "@/components/carousal";

export default function Component() {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <Carousal />
    </ThemeProvider>
  );
}
