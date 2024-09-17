import { categoryData } from "../types/Category";
import { client } from "../lib/sanity";
import { SlugOnlyType } from "../types/comon";

export async function getCategory(categorySlug: string) {
  const query = `*[_type == 'category' && categorySlug.current == '${categorySlug}']{
     title,
      "currentSlug": categorySlug.current,
     'blogs': *[_type == 'blog' && references(^._id)]{
       title,
       smallDescription,
       titleImage,
        "currentSlug": slug.current,
     }
}`;
  const params = { categorySlug };
  const data = await client.fetch(query, params);
  return data;
}

export async function getAllCategoriesWithOnlySlug() {
  const query = `*[_type == "category"] {
      "currentSlug": categorySlug,
  }`;
  const categoriesWithSlugOnly = await client.fetch<SlugOnlyType[]>(query);
  return categoriesWithSlugOnly;
}

export async function getCategorybySlug(
  categorySlug: string
): Promise<categoryData[]> {
  const query = `*[_type == 'category' ]{
     title,
      'currentSlug': $categorySlug,
   }`;
  const params = { categorySlug };
  const data = await client.fetch(query, params);
  return data;
}
