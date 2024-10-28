import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import MeetInstructor from "@/components/courses/instructor/meet-instructor";
import { Button } from "@/components/ui/button";
import CourseCurriculum from "@/components/courses/course-curriculum";
import CourseLearnings from "@/components/courses/course-learnings";
import CourseBenefits from "@/components/courses/course-benefits";
import CourseReviews from "@/components/courses/course-reviews";

export default function CoursePage() {
  return (
    <main className='space-y-6 lg:space-y-8'>
      <section className='space-y-4 lg:space-y-0 flex flex-col lg:flex-row justify-between lg:items-center'>
        <h1 className='font-bold text-3xl lg:text-4xl'>
          Learn Python in 100 Days
        </h1>
      </section>

      <section className='flex flex-col lg:flex-row gap-5 lg:gap-10 relative'>
        <Image
          src={"/course.jpg"}
          alt='Course Image'
          height={300}
          width={320}
          className='rounded-md w-full'
        />
        <div className='flex flex-col gap-3 text-lg lg:text-xl'>
          <p className='lg:text-justify'>
            Master Python by building 100 projects in 100 days. Learn data
            science, automation, build websites, games and apps!
          </p>
          <div className='flex gap-1 justify-between md:justify-center md:gap-2 uppercase'>
            <Badge variant='success' className='text-center w-fit'>
              BEST SELLER
            </Badge>
            <Badge variant='secondary' className='text-center w-fit'>
              60 total hours
            </Badge>
            <Badge variant='secondary' className='text-center w-fit'>
              1000+ students
            </Badge>
            <Badge variant='secondary' className='w-fit'>
              <span className='flex gap-1 items-center'>
                4.5 <Star className='h-4 w-4' />
              </span>
            </Badge>
          </div>

          <div className='flex gap-2 items-end mt-1 lg:mt-3'>
            <p className='font-bold text-2xl'>CA$17.99</p>
            <p className='line-through font-light text-sm text-gray-400'>
              CA$17.99
            </p>
          </div>

          <MeetInstructor />
        </div>

        <Button
          className='text-lg rounded-full p-8 absolute bottom-10 right-7 lg:right-5'
          size={"lg"}
          variant={"primary"}
        >
          <span className='hidden lg:block'>Add to cart</span>
          <ShoppingBag className='h-5 w-5 block lg:hidden' />
        </Button>
      </section>

      <CourseLearnings />

      <section className='flex flex-col lg:flex-row justify-around'>
        <CourseCurriculum />
        <CourseBenefits />
      </section>

      <CourseReviews />
    </main>
  );
}
