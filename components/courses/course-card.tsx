import { ShoppingBag, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CourseCard() {
  return (
    <main className='w-full md:max-w-xs'>
      <Image
        src={"/course.jpg"}
        alt='Course Image'
        height={300}
        width={320}
        className='rounded-md w-full'
      />
      <h3 className='font-semibold text-xl mt-2'>Ultimate Python course</h3>
      <div className='flex gap-2 font-light text-xs text-gray-400'>
        <span>500 students</span>
        <span>•</span>
        <span>24.5 hours</span>
        <span>•</span>
        <span className='flex gap-1'>
          <Star className='h-4 w-4' />
          4.6
        </span>
      </div>

      <div className='flex flex-col'>
        <p></p>
      </div>

      <div className='flex gap-2 items-end mt-3'>
        <p className='font-bold'>CA$17.99</p>
        <p className='line-through font-light text-sm text-gray-400'>
          CA$17.99
        </p>
      </div>

      <div className='flex gap-1 mt-2'>
        <Link href={"/courses/123"} className={cn(buttonVariants(), "w-full")}>
          View course
        </Link>
        <Button className='px-4 py-0' variant={"primary"}>
          <ShoppingBag className='h-4 w-4' />
        </Button>
      </div>
    </main>
  );
}
