"use client";

import BMILimitationsSection from "@/components/BMILimitationsSection/BMILimitationsSection";
import BMIMeanSection from "@/components/BMIMeanSection/BMIMeanSection";
import MainSection from "@/components/MainSection/MainSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <BMIMeanSection />
      <BMILimitationsSection />
    </>
  );
}
