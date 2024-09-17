"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

interface Post {
  category: {
    currentSlug: string;
  };
}

interface ProbaProps {
  data: Post[];
}

export default function Proba({ data }: ProbaProps) {
  const uniqueCategories = Array.from(
    new Set(data.map((post) => post.category.currentSlug))
  );

  // Stanje za trenutnu kategoriju
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Funkcija koja menja kategoriju
  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {uniqueCategories.map((category, idx) => (
        <Link
          href={selectedCategory === category ? `/blogs` : `/blogs/${category}`}
          key={idx}
          passHref>
          <Button
            className={`w-full mt-7 ${
              selectedCategory === category ? "bg-red-500" : ""
            }`}
            onClick={() => handleCategoryClick(category)}>
            {category}
          </Button>
        </Link>
      ))}
    </div>
  );
}
