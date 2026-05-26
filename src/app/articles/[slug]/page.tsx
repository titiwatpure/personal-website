import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { GridBackground } from "@/components/effects/GridBackground";

const articles = [
  "ai-document-audit",
  "qa-engineering",
  "ai-for-engineering",
  "automation-workflow",
];

export function generateStaticParams() {
  return articles.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let Post;
  try {
    Post = (await import(`@/articles/${slug}.mdx`)).default;
  } catch {
    notFound();
  }

  const { metadata } = await import(`@/articles/${slug}.mdx`);

  return (
    <>
      <GridBackground />
      <div className="relative z-10 pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/articles"
            className="inline-flex items-center gap-1 font-[family-name:var(--font-space-mono)] text-[11px] text-text-dim hover:text-cyan transition-colors tracking-wider mb-8"
          >
            &#x2190; กลับหน้าบทความ
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="gold">{metadata.category}</Badge>
              <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-text-muted">
                {metadata.date}
              </span>
            </div>
          </div>

          {/* Content */}
          <article className="prose-custom">
            <Post />
          </article>
        </div>
      </div>
    </>
  );
}
