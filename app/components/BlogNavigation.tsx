import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categoryLink } from "../types/Category";
import { getNav } from "../queries/Blogs";

export default async function BlogNavigation() {
  const data: categoryLink[] = await getNav();

  const uniqueCategories = Array.from(
    new Set(data.map((post) => post.category.currentSlug))
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {uniqueCategories.map((category, idx) => (
        <Link href={`/blogs/${category}`} key={idx}>
          <Button className="w-full mt-7">{category}</Button>
        </Link>
      ))}
    </div>
  );
}
