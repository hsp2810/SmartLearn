import CourseList from "@/components/courses/course-list";
import CourseSearch from "@/components/courses/course-search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function InstructorPage() {
  return (
    <main className='space-y-10'>
      <section className='flex gap-5 items-center'>
        <Avatar className='h-36 w-36'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className='space-y-2 md:space-y-0'>
          <p className='font-bold leading-none text-3xl'>Harshit Patel</p>
          <p className='text-muted-foreground flex flex-col text-sm md:text-base md:flex-row md:gap-5'>
            <span>Lead Instructor</span> <span>10+ teaching years</span>
            <span className='flex items-center'>
              <Star className='h-4 w-4' /> 4.9
            </span>
          </p>
        </div>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>About me</CardTitle>
        </CardHeader>
        <CardContent className='text-sm md:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iusto
          officia temporibus voluptate neque repudiandae quod laboriosam placeat
          pariatur nam mollitia praesentium optio, nemo iure est. Unde quo
          dignissimos quasi at consequatur ex, esse, voluptatibus quas doloribus
          eligendi placeat illo pariatur incidunt, alias ducimus! Iure sint
          quasi tempore explicabo ut! Impedit exercitationem repellat modi
          necessitatibus aspernatur quas placeat id dolorum error dolor non quod
          rem quasi corrupti sint nesciunt eligendi repellendus, alias officia
          quo quisquam cum nemo quae deleniti. Laboriosam voluptate cum
          consequatur, delectus esse at sunt error corporis, dignissimos facilis
          ex eligendi quo veniam. Qui quidem necessitatibus minima sint?
        </CardContent>
      </Card>

      <section className='space-y-3'>
        <h2 className='font-bold text-2xl'>Best Courses</h2>
        <section>
          <CourseList />
        </section>
      </section>

      <section className='space-y-3'>
        <div className='flex flex-col md:flex-row justify-between md:items-center'>
          <h2 className='font-bold text-2xl mb-2 md:mb-0'>Search Courses</h2>
          <CourseSearch />
        </div>
        <CourseList />
      </section>
    </main>
  );
}
