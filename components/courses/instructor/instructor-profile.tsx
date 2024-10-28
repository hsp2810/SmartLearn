import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function InstructorProfile() {
  return (
    <Link href={"/instructors/123"} className='flex gap-2 group'>
      <Avatar className='h-6 w-6'>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className='text-sm group-hover:underline'>Harshit Patel</p>
    </Link>
  );
}
