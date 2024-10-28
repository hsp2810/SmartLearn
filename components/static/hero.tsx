import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className='h-[90vh] w-3/4 mx-auto flex items-center flex-col justify-center space-y-10'>
      <h1 className='font-extrabold text-left md:text-center text-8xl bg-gradient-to-r from-[#4c0e6e] via-[#af45d5] to-[#5e0d0f] inline-block text-transparent bg-clip-text'>
        Unlock Your Potential with SmartLearn Today!
      </h1>

      <Link
        href={"/courses"}
        className={cn(
          buttonVariants({
            size: "lg",
          })
        )}
      >
        View courses <ArrowRight className='h-4 w-4 ml-1' />{" "}
      </Link>
    </section>
  );
}
