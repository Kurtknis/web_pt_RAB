import { blogPosts } from "@/content/blog";

export function listBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}

export function getRelatedBlogPosts(slug: string) {
  const current = getBlogPostBySlug(slug);
  if (!current) return [];

  return blogPosts
    .filter((post) => post.slug !== slug)
    .filter((post) => post.category === current.category || post.tags.some((tag) => current.tags.includes(tag)))
    .slice(0, 3);
}
