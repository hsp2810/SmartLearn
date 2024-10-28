"use client";

import { ArrowLeft } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function BackButtonProvider() {
  const router = useRouter();

  return (
    <Button className='px-2 py-0' onClick={() => router.back()}>
      <ArrowLeft className='h-4 w-4' />
    </Button>
  );
}
