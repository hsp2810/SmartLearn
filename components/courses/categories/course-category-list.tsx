"use client";

import { useEffect, useState } from "react";
import CourseCategoryCard from "./course-category-card";

export default function CourseCategoryList() {
  const [selectedCategory, setSelectedCategory] = useState("Programming");

  const handleSelectCategory = (title: string) => {
    setSelectedCategory(title);
  };

  const onClick = (title: string) => handleSelectCategory(title);

  return (
    <section className='flex gap-2'>
      <CourseCategoryCard
        title='Programming'
        isSelected={selectedCategory === "Programming"}
        onClick={onClick}
      />
      <CourseCategoryCard
        title='AI'
        isSelected={selectedCategory === "AI"}
        onClick={onClick}
      />
      <CourseCategoryCard
        title='Web Design'
        isSelected={selectedCategory === "Web Design"}
        onClick={onClick}
      />
      <CourseCategoryCard
        title='Java'
        isSelected={selectedCategory === "Java"}
        onClick={onClick}
      />
      <CourseCategoryCard
        title='Machine Learning'
        isSelected={selectedCategory === "Machine Learning"}
        onClick={onClick}
      />
    </section>
  );
}
