import type { MetadataRoute } from "next";

import { getAllBlogPosts } from "@/lib/blog";
import {
  getAllExperiences,
  getExperienceCategoryPath,
} from "@/lib/experiences";
import { getAllServices } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/blog",
    "/experiences",
    "/experiences/day-trips",
    "/experiences/multi-day-trips",
    "/experiences/packages",
    "/destinations",
    "/travel-services",
  ];
  const experiencePages = getAllExperiences().map(
    (experience) =>
      `/experiences/${getExperienceCategoryPath(experience.category)}/${experience.slug}`,
  );
  const servicePages = getAllServices().map(
    (service) => `/travel-services/${service.slug}`,
  );
  const blogPages = getAllBlogPosts().map((post) => `/blog/${post.slug}`);

  return [...staticPages, ...experiencePages, ...servicePages, ...blogPages].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: path === "/blog" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/contact" ? 0.9 : 0.7,
    }),
  );
}
