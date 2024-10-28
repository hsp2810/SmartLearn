import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ChapterAccordion() {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Chapter 1: Programming Basics</AccordionTrigger>
        <AccordionContent>
          <p className='font-semibold'>What you will learn in this chapter</p>
          <p className='text-xs'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aliquam eveniet aspernatur nulla officia, fugit ullam cum rem quod
            facere similique totam quisquam eum adipisci minus deserunt voluptas
            illo repellendus.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
