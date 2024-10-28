"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import CartDrawer from "../cart/cart-drawer";
import ProfileTooltip from "./profile-tooltip";

export default function Navbar() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <main className='flex justify-between ml-6 mr-10 py-3 items-center'>
      <Link href={"/"} className='flex items-center'>
        <Image
          src={"/logo.png"}
          alt='Website Logo'
          height={10}
          width={80}
          className='text-white logo w-[60px] md:w-[80px]'
        />
        <h1 className='hidden md:block font-bold text-3xl -ml-4 tracking-tighter text-appPrimary'>
          SmartLearn
        </h1>
      </Link>

      <ul className='font-normal text-sm md:text-base flex gap-6 md:font-semibold'>
        <li>
          <Link href={"/courses"} className='hover:text-appPrimary transition'>
            Courses
          </Link>
        </li>
        {isSignedIn && (
          <li>
            <Link
              href={"/courses"}
              className='hover:text-appPrimary transition'
            >
              My learning
            </Link>
          </li>
        )}
      </ul>

      {!isSignedIn ? (
        <Button variant={"primary"}>Sign-in</Button>
      ) : (
        <section className='flex gap-1'>
          <ProfileTooltip />
          <CartDrawer />
        </section>
      )}
    </main>
  );
}
