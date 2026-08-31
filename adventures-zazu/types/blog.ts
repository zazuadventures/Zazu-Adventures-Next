export type BlogContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: BlogContentBlock[];
  image?: string;
  category: string;
  author: string;
  publishedAt: string;
  featured?: boolean;
};
