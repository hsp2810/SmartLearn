import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className='h-[90vh] flex items-center justify-center gap-7 flex-col'>
      <h1 className='font-extrabold text-6xl'>Sorry, Page not found.</h1>
      <Link
        href={"/courses"}
        className={cn(
          buttonVariants({ size: "lg", variant: "primary" }),
          "rounded-full"
        )}
      >
        Go to courses
      </Link>
    </main>
  );
}
