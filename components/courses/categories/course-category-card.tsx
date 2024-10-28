"use client";

import { Button } from "@/components/ui/button";
import React from "react";

interface CourseCategoryCardProps {
  title: string;
  isSelected?: boolean;
  onClick: any;
}

export default function CourseCategoryCard({
  title,
  isSelected,
  onClick,
}: CourseCategoryCardProps) {
  return (
    <Button
      variant={isSelected ? "primary" : "ghost"}
      onClick={() => onClick(title)}
    >
      {title}
    </Button>
  );
}
