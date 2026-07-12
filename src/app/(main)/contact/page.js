import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/contact/FAQ";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
  title: "Contact | Jabed Ali Mollah",
  description:
    "Get in touch with Jabed Ali Mollah, a Full Stack MERN Developer. Available for full-time jobs, internships, freelance work, and collaborations.",
  keywords: [
    "Contact Jabed Ali Mollah",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Portfolio Contact",
  ],
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <FAQ />
      <ContactCTA />
    </main>
  );
}
