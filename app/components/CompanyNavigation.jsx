import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function CompanyNavigation() {
  return (
    <Link href="/blogs">
      <Button className="w-full mt-7">Return to Blog</Button>
    </Link>
  );
}
