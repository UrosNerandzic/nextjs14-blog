import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogNavigation from "@/app/components/BlogNavigation";
import { getData } from "@/app/queries/Blogs";
import { urlFor } from "../lib/sanity";
import { simpleBlogCard } from "../types/Blogs";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  return (
    <>
      <BlogNavigation />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        {data.map((post, idx) => (
          <Card key={idx}>
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />
            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {post.smallDescription}
              </p>
              <Button asChild className="w-full mt-7">
                <Link
                  href={`/blogs/${post.category.currentSlug}/${post.currentSlug}`}>
                  Read More
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
