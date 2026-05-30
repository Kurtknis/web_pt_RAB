import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { getBlogPostBySlug, getRelatedBlogPosts, listBlogPosts } from "@/repositories/blogRepository";

export const dynamicParams = false;

export function generateStaticParams() {
  return listBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return createMetadata({ title: "Insights | Cipta Kreasi Buana", path: "/insights" });

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
    keywords: post.tags,
    type: "article",
    publishedTime: post.publishedAt,
  });
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  const related = getRelatedBlogPosts(post.slug);

  return (
    <main className="page-shell">
      <article className="section section--ivory insight-detail">
        <div className="luxury-container">
          <p className="kicker">Insight</p>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="reading-progress" aria-label="Reading metadata">
            <span>{post.author}</span>
            <span>{post.readingMinutes} min read</span>
            <span>{new Intl.DateTimeFormat("id-ID", { dateStyle: "medium" }).format(new Date(post.publishedAt))}</span>
          </div>
          <div className="insight-detail__body">
            <p>
              Mulailah dari kondisi ruang aktual: ukuran, foto, kendala fungsi, dan ekspektasi visual. Informasi ini
              membuat tim desain dapat membaca prioritas sebelum masuk ke proposal.
            </p>
            <p>
              Untuk quotation yang lebih akurat, sertakan kisaran budget dan timeline. Angka awal tidak harus final,
              tetapi membantu menentukan pilihan material, metode kerja, dan tahapan eksekusi.
            </p>
          </div>
          {related.length ? (
            <div className="related-insights">
              <h2>Related reading</h2>
              {related.map((item) => (
                <a href={`/insights/${item.slug}`} key={item.slug}>{item.title}</a>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </main>
  );
}
