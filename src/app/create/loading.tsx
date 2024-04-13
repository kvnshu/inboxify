"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/input";

function Page() {
  // States to store
  const [PDF, setPDF] = useState<File | null>(null);
  const [daysToLearn, setDaysToLearn] = useState<number | null>(null);

  return (
    // <div className="h-screen w-full p-4 flex justify-center items-center">
    <div className="h-screen flex w-full flex-wrap md:flex-nowrap gap-4 justify-center items-center">
      Loading :D
    </div>
  );
}

export default Page;
