"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import { ShoppingBag } from "lucide-react";
import CartCourseCard from "./cart-course-card";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CartDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button className='rounded-full py-0 px-3' variant={"ghost"}>
          <ShoppingBag className='w-5 h-5' />
        </Button>
      </SheetTrigger>
      <SheetContent className='w-full md:w-[540px]'>
        <SheetHeader>
          <SheetTitle className='text-2xl font-semibold'>Your cart</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        <div className='flex justify-between mt-5 mx-2'>
          <h3 className='text-lg font-semibold'>Courses added</h3>
          <div className='flex items-center gap-2'>
            <span>Total: </span>
            <h3 className='text-3xl text-appPrimary font-semibold'>$100</h3>
          </div>
        </div>

        <ScrollArea className='h-[75%] my-1'>
          <div className='space-y-3'>
            <CartCourseCard />
            <CartCourseCard />
            <CartCourseCard />
            <CartCourseCard />
          </div>
        </ScrollArea>
        <Link
          href={"/checkout"}
          className={cn(buttonVariants({ variant: "primary" }), "w-full")}
        >
          Proceed to checkout
        </Link>
      </SheetContent>
    </Sheet>
  );
}
