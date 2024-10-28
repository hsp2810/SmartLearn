import { ScrollArea } from "../ui/scroll-area";
import ChapterAccordion from "./chapters/chapter-accordion";

export default function CourseCurriculum() {
  return (
    <main className='w-full lg:w-3/4'>
      <h2 className='font-bold text-2xl'>Course Curriculum</h2>

      <ScrollArea className='h-[250px]'>
        <ChapterAccordion />
        <ChapterAccordion />
        <ChapterAccordion />
        <ChapterAccordion />
        <ChapterAccordion />
        <ChapterAccordion />
        <ChapterAccordion />
        <ChapterAccordion />
        <ChapterAccordion />
        <ChapterAccordion />
      </ScrollArea>
    </main>
  );
}
