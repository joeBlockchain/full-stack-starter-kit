//import react stuff
import { ReactNode } from "react";

//import next stuff
import Link from "next/link";

//import shadcnui stuff
import { Button } from "@/components/ui/button";

//import icon stuff
import { ArrowLeft } from "lucide-react";

//import blog stuff
import { getBlogPosts } from "@/lib/blog";
import ReactMarkdown from "react-markdown";

const components = {
  h1: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLHeadingElement>>) => (
    <h1
      className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLHeadingElement>>) => (
    <h2
      className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLHeadingElement>>) => (
    <h3
      className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLHeadingElement>>) => (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" {...props}>
      {children}
    </h4>
  ),
  p: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLParagraphElement>>) => (
    <p
      className="leading-relaxed text-lg [&:not(:first-child)]:mt-6"
      {...props}
    >
      {children}
    </p>
  ),
  a: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLAnchorElement>>) => (
    <a
      className="text-lg font-medium text-primary underline underline-offset-4"
      {...props}
    >
      {children}
    </a>
  ),
  blockquote: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLQuoteElement>>) => (
    <blockquote className="text-lg mt-6 border-l-2 pl-6 italic" {...props}>
      {children}
    </blockquote>
  ),
  ul: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLUListElement>>) => (
    <ul
      className="text-lg list-disc pl-4 [&>li]:mb-2 [&>ul]:mt-2 [&>ul]:ml-4"
      {...props}
    >
      {children}
    </ul>
  ),
  li: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLLIElement>>) => (
    <li className="text-lg mt-2" {...props}>
      {children}
    </li>
  ),
  table: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLTableElement>>) => (
    <div className="text-lg my-6 w-full overflow-y-auto">
      <table className="w-full" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLTableSectionElement>>) => (
    <thead {...props}>{children}</thead>
  ),
  tbody: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLTableSectionElement>>) => (
    <tbody {...props}>{children}</tbody>
  ),
  tr: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLTableRowElement>>) => (
    <tr className="text-lg m-0 border-t p-0 even:bg-muted" {...props}>
      {children}
    </tr>
  ),
  th: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLTableHeaderCellElement>>) => (
    <th
      className="text-lg border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLTableDataCellElement>>) => (
    <td
      className="text-lg border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    >
      {children}
    </td>
  ),
  ol: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLOListElement>>) => {
    const { type, ...olProps } = props; // Destructure to omit `type`
    return (
      <ol
        className="list-decimal my-6 ml-6 [&>li]:mt-2 [&>li::marker]:font-bold"
        {...olProps} // Spread the rest of the props
      >
        {children}
      </ol>
    );
  },
  //   img: ({
  //     src,
  //     alt,
  //     ...props
  //   }: React.PropsWithChildren<React.ImgHTMLAttributes<HTMLImageElement>>) => (
  //     <img className="max-w-full h-auto" src={src} alt={alt} {...props} />
  //   ),
  code: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLElement>>) => (
    <code className="text-lg bg-gray-200 rounded p-1" {...props}>
      {children}
    </code>
  ),
  pre: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLPreElement>>) => (
    <pre className="bg-gray-100 p-2 overflow-x-auto" {...props}>
      {children}
    </pre>
  ),
  em: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLElement>>) => (
    <em {...props}>{children}</em>
  ),
  strong: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLProps<HTMLElement>>) => (
    <strong {...props}>{children}</strong>
  ),
  hr: ({ ...props }: React.HTMLProps<HTMLHRElement>) => (
    <hr className="text-lg my-4 border-gray-300" {...props} />
  ),

  // Add more custom components as needed
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  console.log("params", params);
  const decodedSlug = decodeURIComponent(params.slug);
  const post = getBlogPosts().find((post) => post.slug === decodedSlug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="mt-16 flex flex-col ">
      <Button asChild variant="outline" className="w-40 ml-4 mb-8">
        <Link href={`/blog`}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </Button>
      <div className="items-center justify-center max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-left space-y-8">
          <h1 className="text-6xl font-extrabold">{post.metadata.title}</h1>
          <h4 className="text-xl leading-relaxed ">{post.metadata.summary}</h4>
          <div className=" text-muted-foreground">
            <span>{post.metadata.author}</span>
            <span className="mx-3">•</span>
            <span>{post.metadata.publishDate}</span>
          </div>
        </div>
        <div className="mt-8 space-y-6">
          <section>
            <ReactMarkdown components={components}>
              {post.content}
            </ReactMarkdown>
          </section>
        </div>
      </div>
    </div>
  );
}
