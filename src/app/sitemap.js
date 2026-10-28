
import { SITE } from "@/lib/data";

export default function sitemap() {
  const routes = [
    {
      path: "",
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      path: "/services",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/pricing",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/portfolio",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/contact",
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];

  return routes.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
