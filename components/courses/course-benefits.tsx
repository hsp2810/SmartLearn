import { ArrowDownToLine, BookText, Smartphone, Trophy } from "lucide-react";
import React from "react";

export default function CourseBenefits() {
  return (
    <main className='space-y-4'>
      <h2 className='font-bold text-2xl'>What you will get</h2>

      <section className='space-y-3'>
        <p className='flex items-center'>
          <Trophy className='h-4 w-4 mr-2' /> Certificate of completion
        </p>
        <p className='flex items-center'>
          <BookText className='h-4 w-4 mr-2' /> Assignments
        </p>
        <p className='flex items-center'>
          <ArrowDownToLine className='h-4 w-4 mr-2' /> 150 Downloadable
          resources
        </p>
        <p className='flex items-center'>
          <Smartphone className='h-4 w-4 mr-2' /> Access on Phone or Tablet
        </p>
      </section>
    </main>
  );
}
