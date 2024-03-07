// src/lib/blog.ts
import fs from "fs";
import path from "path";

interface BlogPost {
  metadata: {
    title: string;
  };
  slug: string;
  content: string;
}

function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string): BlogPost {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const [_, metadata, content] = rawContent.split("---");
  const parsedMetadata = JSON.parse(metadata);
  return {
    metadata: parsedMetadata,
    slug: path.basename(filePath, path.extname(filePath)),
    content,
  };
}

function getMDXData(dir: string): BlogPost[] {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => readMDXFile(path.join(dir, file)));
}

export function getBlogPosts(): BlogPost[] {
  return getMDXData(path.join(process.cwd(), "src", "posts"));
}
