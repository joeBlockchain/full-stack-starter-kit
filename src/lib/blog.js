import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getMDXFiles(dir) {
  console.log("dir", dir);
  let file = fs.readdirSync(dir);
  console.log("file", file);
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}

function getMDXData(dir) {
  console.log("dir", dir);
  let mdxFiles = getMDXFiles(dir);
  console.log("mdxFiles", mdxFiles);
  return mdxFiles.map((file) => {
    let { data, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return {
      metadata: data,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "src", "posts"));
}
