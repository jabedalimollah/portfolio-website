export default function PersonSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",

    "@id": "https://jabedali.vercel.app/#person",

    name: "Jabed Ali Mollah",

    url: "https://jabedali.vercel.app/",

    image:
      "https://jabedali.vercel.app/images/my_photos/jabed-ali-mollah-profile.webp",

    jobTitle: "MERN Stack Developer",

    description:
      "Jabed Ali Mollah is a MERN Stack Developer and B.Tech Computer Science graduate specializing in React.js, Next.js, Node.js, Express.js, MongoDB, and modern web development.",

    sameAs: [
      "https://github.com/jabedalimollah",
      "https://www.linkedin.com/in/jabedalimollah/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
  );
}
