import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ThumbsDown, ThumbsUp } from "lucide-react";

export default function CourseReviewCard() {
  return (
    <Card className=''>
      <CardHeader className='flex-row items-center gap-1 space-y-0 p-4 pb-0'>
        <Avatar className='h-8 w-8'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className='font-semibold text-xl'>Harshit Patel</p>
        <p className='flex items-center ml-3'>
          <Star className='w-4 h-4 mr-1' /> 4.5
        </p>
      </CardHeader>
      <CardContent className='p-4'>
        <p>
          Angela was a great instructor. She made coding fun, and the projects
          were great. Happy coding!!! Thanks so much Angela.
        </p>
      </CardContent>
      <CardFooter className='flex gap-5 px-4'>
        <button className='flex gap-1 items-center'>
          <ThumbsUp />
          <span className='text-sm'>50</span>
        </button>
        <button className='flex gap-1 items-center'>
          <ThumbsDown />
          <span className='text-sm'>5</span>
        </button>
      </CardFooter>
    </Card>
  );
}
