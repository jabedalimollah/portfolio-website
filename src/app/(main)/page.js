import AboutPreview from "@/components/home/AboutPreview";
import Hero from "../../components/home/Hero";
import WhyChooseMe from "@/components/home/WhyChooseMe";

export const metadata = {
  title: "Jabed Ali Mollah | Full Stack MERN Developer",
  description:
    "Portfolio of Jabed Ali Mollah - Full Stack MERN Developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AboutPreview />
      <WhyChooseMe />
    </main>
  );
}
