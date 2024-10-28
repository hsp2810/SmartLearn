import CourseReviewCard from "./course-review-card";

export default function CourseReviews() {
  return (
    <main className='space-y-2 lg:space-y-4'>
      <h3 className='font-bold text-2xl'>Reviews</h3>

      <section className='space-y-3 lg:space-y-0 lg:grid grid-cols-3 gap-3'>
        <CourseReviewCard />
        <CourseReviewCard />
        <CourseReviewCard />
      </section>
    </main>
  );
}
