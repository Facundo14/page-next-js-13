import PostsList from "@/components/blog/PostsList";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: 'Blog  | InforMatteo',
  description: 'Noticias y actualidad | InforMatteo',
};

export default function Blog() {
  return (
    <PostsList />
  );
}
