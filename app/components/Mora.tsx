"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

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
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {uniqueCategories.map((category, idx) => (
        <div
          onClick={() => {
            if (pathname === `/blogs/${category}`) {
              router.push("/blogs");
            } else {
              router.push(`/blogs/${category}`);
            }
          }}
          key={idx}
          className="cursor-pointer">
          <Button className="w-full mt-7">{category}</Button>
        </div>
      ))}
    </div>
  );
}
