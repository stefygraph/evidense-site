import { compileMDX } from "next-mdx-remote/rsc";

export async function renderMdx(source: string) {
  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: false },
  });

  return content;
}
