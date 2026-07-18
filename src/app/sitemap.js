import navLinks from "@/data/navbar/navLinks";
import projects from "@/data/projects/projectsData";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://jabedali.vercel.app";

export default function sitemap() {
  // Static pages
  const staticPages = navLinks.map((link) => ({
    url: `${SITE_URL}${link.href}`,
    lastModified: new Date(),

    changeFrequency:
      link.href === "/"
        ? "daily"
        : link.href === "/projects"
          ? "weekly"
          : "monthly",

    priority:
      link.href === "/"
        ? 1.0
        : link.href === "/projects"
          ? 0.9
          : link.href === "/about"
            ? 0.9
            : link.href === "/services"
              ? 0.8
              : link.href === "/contact"
                ? 0.8
                : 0.7,
  }));

  // Dynamic project pages
  const projectPages = projects
    .filter((project) => project.slug)
    .map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: project.featured ? 0.9 : 0.8,
    }));

  return [...staticPages, ...projectPages];
}

////////////
// // const baseUrl = "https://yourdomain.com";
// const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

// const projects = ["chatit", "notebook", "estore", "aliet", "movies-hub"];

// export default function sitemap() {
//   const currentDate = new Date();

//   return [
//     {
//       url: baseUrl,
//       lastModified: currentDate,
//       priority: 1,
//     },
//     {
//       url: `${baseUrl}/about`,
//       lastModified: currentDate,
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/skills`,
//       lastModified: currentDate,
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/projects`,
//       lastModified: currentDate,
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/contact`,
//       lastModified: currentDate,
//       priority: 0.8,
//     },
//     ...projects.map((project) => ({
//       url: `${baseUrl}/projects/${project}`,
//       lastModified: currentDate,
//       priority: 0.8,
//     })),
//   ];
// }
