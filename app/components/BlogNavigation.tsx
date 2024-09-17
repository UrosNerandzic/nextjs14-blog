import { getNav } from "../queries/Blogs";
import Navigation from "./Navigation";

export default async function BlogNavigation() {
  const data = await getNav();
  return <Navigation data={data} />;
}
