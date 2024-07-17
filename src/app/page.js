"use client";

import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Carousal from "@/components/carousal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Counter from "@/components/Counter";
export default function Component() {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <Carousal />

      <Counter />
    </ThemeProvider>
  );
}
