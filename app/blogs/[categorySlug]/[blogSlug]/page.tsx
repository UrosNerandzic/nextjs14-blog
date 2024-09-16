import { fullBlog, props, PropsBlog } from "@/app/types/Blogs";
import { urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import { getAllBlogPostsWithOnlySlug, getBlogs } from "@/app/queries/Blogs";
import { Metadata } from "next";
import Image from "next/image";
import { SlugOnlyType } from "@/app/types/comon";

// export async function generateStaticParams({ params }: PropsBlog) {
//   const blogs = await getAllBlogPostsWithOnlySlug(params.blogSlug);

//   return blogs.map((blogs: SlugOnlyType) => ({
//     blogSlug: blogs.slug,
//   }));
// }
// export async function generateMetadata({ params }: props): Promise<Metadata> {
//   const data: fullBlog = await getBlogs(params.blogSlug);

//   return {
//     title: data.title,
//     description: data.smallDescription,
//   };
// }

export default async function BlogArticle({ params }: props) {
  const blogSlug = params.blogSlug || "";
  const data: fullBlog[] = await getBlogs(blogSlug);

  return (
    <>
      {data.map((singleBlog, index) => (
        <div key={index}>
          <div className="mt-8">
            <h1>
              <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
                Jan Marshal - Blog
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
                {singleBlog.title}
              </span>
            </h1>
            <Image
              src={urlFor(singleBlog.titleImage).url()}
              alt={singleBlog.title}
              width={800}
              height={800}
              priority
              className="rounded-lg mt-8 border"
            />
            <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
              <PortableText value={singleBlog.content} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
