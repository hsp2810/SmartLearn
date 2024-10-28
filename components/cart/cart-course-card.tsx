import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Calendar, DollarSign, Trash, User } from "lucide-react";

export default function CartCourseCard() {
  return (
    <Card>
      <CardHeader className='grid grid-cols-[1fr_110px] items-start gap-4 space-y-0'>
        <div className='space-y-1'>
          <CardTitle className='text-xl leading-none'>
            Ultimate Python course
          </CardTitle>
          <CardDescription className='leading-tight'>
            Beautifully designed components that you can copy and paste into
            your apps. Accessible.
          </CardDescription>
        </div>
        <Button variant='destructive' className='px-3 shadow-none' size={"sm"}>
          <Trash className='mr-2 h-4 w-4' />
          Remove
        </Button>
      </CardHeader>
      <CardContent>
        <div className='flex items-center space-x-4 text-sm text-muted-foreground'>
          <div className='flex gap-2 items-center'>
            <p className='text-base font-semibold'>CA$17.99</p>
            <p className='line-through font-extralight text-xs text-gray-400'>
              CA$17.99
            </p>
          </div>
          <div className='flex items-center'>
            <User className='mr-1 h-4 w-4' />
            500
          </div>
          <div className='flex items-center'>
            <Calendar className='mr-1 h-4 w-4' />
            April 2023
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
