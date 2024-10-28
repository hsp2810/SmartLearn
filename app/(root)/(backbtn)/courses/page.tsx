import CourseCategoryList from "@/components/courses/categories/course-category-list";
import CourseCard from "@/components/courses/course-card";
import CourseList from "@/components/courses/course-list";
import CourseSearch from "@/components/courses/course-search";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft } from "lucide-react";
import React from "react";

export default function CoursesPage() {
  return (
    <>
      <section className='space-y-4 md:space-y-0 flex flex-col md:flex-row justify-between md:items-center'>
        <h1 className='font-bold text-3xl md:text-4xl'>Courses</h1>
        <CourseSearch />
      </section>

      <ScrollArea className='w-full'>
        <CourseCategoryList />
      </ScrollArea>

      <CourseList />
    </>
  );
}
