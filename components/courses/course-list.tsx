import CourseCard from "./course-card";

export default function CourseList() {
  return (
    <div className='grid gap-y-7 md:grid-cols-3'>
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
}
