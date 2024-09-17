import { client } from "../lib/sanity";
import { SlugOnlyType } from "../types/comon";

export async function getBlogs(blogSlug: string) {
  const query = `*[_type == 'blog' && slug.current == '${blogSlug}']{
   "currentSlug": slug.current,
   title,
   content,
   "titleImage": titleImage.asset->url,
   smallDescription,
   }`;
  const params = { blogSlug };
  const data = await client.fetch(query, params);
  return data;
}
export async function getData() {
  const query = `*[_type == "blog"] | order(_createdAt desc){
    title,
    slug,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    category->{
     "currentSlug": categorySlug.current
  },
  }`;
  const data = await client.fetch(query);
  return data;
}

export async function getNav() {
  const query = `*[_type == "blog"]{
  category->{
     "currentSlug": categorySlug.current
  }
}`;
  const data = await client.fetch(query);
  return data;
}

export async function getAllBlogPostsWithOnlySlug(
  blogSlug: string
): Promise<SlugOnlyType[]> {
  const query = `*[_type == "blog" && category->categorySlug.current == '${blogSlug}'] {
    "currentSlug": slug.current,
    category->{
      "categorySlug": categorySlug.current
    }
  }`;

  const getAllBlogPostsWithOnlySlug = await client.fetch<SlugOnlyType[]>(query);

  return getAllBlogPostsWithOnlySlug;
}
