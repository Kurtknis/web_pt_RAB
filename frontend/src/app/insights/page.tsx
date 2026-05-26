import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { topicClusters } from "@/content/blog";
import { listBlogPosts } from "@/repositories/blogRepository";

export const metadata: Metadata = createMetadata({
  title: "Insight Interior, Renovasi, dan Design Build | Cipta Kreasi Buana",
  description: "Artikel edukatif seputar desain interior, renovasi, furniture custom, dan persiapan quotation proyek.",
  path: "/insights",
});

export default function InsightsPage() {
  const posts = listBlogPosts();

  return (
    <main className="page-shell">
      <section className="section section--ivory">
        <div className="luxury-container insights-hero">
          <p className="kicker">Insights</p>
          <h1>Referensi tenang sebelum memulai proyek.</h1>
          <p>Konten edukatif untuk membantu klien memahami scope, budget, material, dan proses design build.</p>
        </div>
        <div className="luxury-container topic-clusters">
          {topicClusters.map((cluster) => (
            <article key={cluster.title}>
              <span>Topic Cluster</span>
              <h2>{cluster.title}</h2>
              <p>{cluster.description}</p>
            </article>
          ))}
        </div>
        <div className="luxury-container insights-grid">
          {posts.map((post) => (
            <Link href={`/insights/${post.slug}`} className="insight-card" key={post.slug}>
              <span>{post.category} / {post.readingMinutes} min read</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
