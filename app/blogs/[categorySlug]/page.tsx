import { categoryData, blog, props, category } from "@/app/types/Category";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import {
  getAllCategoriesWithOnlySlug,
  getCategory,
  getCategorybySlug,
} from "@/app/queries/Category";
import CompanyNavigation from "@/app/components/CompanyNavigation";
import Link from "next/link";
import Image from "next/image";
import { PropsBlog, simpleBlogCard } from "@/app/types/Blogs";
import { urlFor } from "@/app/lib/sanity";

export async function generateStaticParams({ params }: PropsBlog) {
  const categories = await getAllCategoriesWithOnlySlug(params.categorySlug);
  return categories.map((category: category) => ({
    categorySlug: category.slug,
  }));
}

export async function generateMetadata({ params }: props): Promise<Metadata> {
  const categories: categoryData[] = await getCategorybySlug(
    params.categorySlug
  );
  return {
    title: params.categorySlug,
  };
}

export default async function Category({ params }: props) {
  const categorySlug = params.categorySlug || "";
  const data = await getCategory(categorySlug);
  const blogs: simpleBlogCard[] = data[0]?.blogs || [];
  return (
    <>
      <CompanyNavigation />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        {blogs.map((post, index) => (
          <Card key={index}>
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
                <Link href={`/blogs/${post.currentSlug}/${post.currentSlug}`}>
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
