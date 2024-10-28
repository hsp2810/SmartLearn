import React from "react";
import { Input } from "../ui/input";

export default function CourseSearch() {
  return (
    <Input
      placeholder='Search courses by title, category...'
      className='w-full md:w-1/3'
    />
  );
}
