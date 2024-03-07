import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

//import shadcnui stuff
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

//import icon stuff
import { ArrowRight } from "lucide-react";

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
    <div className="max-w-6xl mx-8">
      <div className="my-10 max-w-sm ">
        <h1 className="leading-tight lg::leading-snug font-black text-5xl ">
          The Blog.
        </h1>
        <p className="mt-3 leading-8 text-xl text-muted-foreground">
          We have stories to tell you—about the features we build, makers, and
          our company.
        </p>
      </div>
      <Separator />
      <ul className="pt-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-24">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="prose prose-gray mx-auto dark:prose-invert h-full"
            >
              {/* <div className="p-28 bg-accent rounded-xl">IMAGE</div> */}
              <div className="space-y-4 not-prose">
                <p className="mt-3 text-base font-semibold text-muted-foreground">
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
                <p className="leading-7 text-lg">{post.frontMatter.summary}</p>
                <p className="text-semibold">{post.frontMatter.author}</p>
              </div>

              <Button asChild variant="outline" className="mt-4">
                <Link href={`/blog/posts/${post.slug}`}>
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </ul>
    </div>
  );
}
