"use client";

import { StickyBanner } from "@/components/ui/sticky-banner";

export default function StickyBannerDemo() {
  return (
    <div className="relative flex h-[8vh] w-full flex-col ">
      <StickyBanner className="bg-white flex flex-col gap-3 mt-2">
        <p className="mx-0 max-w-[90%] text-[#ABE7B2] ">
          Edition Realty(A Real Estate Consultant){" "}
        </p>
        <div className="h-[0.5px] w-full bg-gray-400 "></div>
      </StickyBanner> 
    </div>
  );
}

