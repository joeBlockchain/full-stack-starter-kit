import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

//import shadcnui stuff
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function BlogIndex() {
  const files = fs.readdirSync(path.join(process.cwd(), "src", "posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "src", "posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto ">
        <h1 className="leading-tight lg::leading-snug font-black text-5xl ">
          The Blog.
        </h1>
        <p className="leading-normal text-xl text-muted-foreground">
          Learnings and Ramblings
        </p>
      </div>
      <ul>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="prose prose-gray mx-auto dark:prose-invert"
            >
              <article className="prose prose-gray mx-auto dark:prose-invert">
                <div className="space-y-4 not-prose">
                  <p className="text-muted-foreground">
                    {post.frontMatter.publishDate}
                  </p>
                  <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
                    <Link href={`/blog/posts/${post.slug}`}>
                      {post.frontMatter.title}
                    </Link>
                  </h1>
                  <Badge>
                    <p>{post.frontMatter.tags}</p>
                  </Badge>
                  <p>{post.frontMatter.summary}</p>
                  <p className="text-muted-foreground">
                    {post.frontMatter.author}
                  </p>
                </div>
              </article>
            </article>
          ))}
        </div>
      </ul>
    </div>
  );
}
