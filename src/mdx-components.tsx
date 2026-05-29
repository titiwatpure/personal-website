import type { MDXComponents } from "mdx/types";
import { ArticleImage, ImageGrid } from "@/components/ui/ArticleImage";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-light text-text mb-6 mt-8 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-light text-text mb-4 mt-8">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-medium text-text mb-3 mt-6">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-sm text-text leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-sm text-text leading-relaxed mb-4 space-y-1">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside text-sm text-text leading-relaxed mb-4 space-y-1">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="ml-2">{children}</li>,
  strong: ({ children }) => (
    <strong className="text-text font-medium">{children}</strong>
  ),
  code: ({ children }) => (
    <code className="font-[family-name:var(--font-space-mono)] text-xs bg-navy px-1.5 py-0.5 rounded-sm text-cyan">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-navy border border-border rounded-sm p-4 mb-4 overflow-x-auto">
      <code className="font-[family-name:var(--font-space-mono)] text-xs text-text">
        {children}
      </code>
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-cyan/30 pl-4 text-sm text-text italic mb-4">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-border my-8" />,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-cyan hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  Image: ArticleImage,
  ImageGrid,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
