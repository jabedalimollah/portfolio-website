// const baseUrl = "https://yourdomain.com";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

const projects = ["chatit", "notebook", "estore", "aliet", "movies-hub"];

export default function sitemap() {
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project}`,
      lastModified: currentDate,
      priority: 0.8,
    })),
  ];
}
