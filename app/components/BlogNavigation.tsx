import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categoryLink } from "../types/Category";
import { getNav } from "../queries/Blogs";

import Mora from "./Mora";
export default async function BlogNavigation() {
  const data: categoryLink[] = await getNav();

  return <Mora data={data} />;
}
