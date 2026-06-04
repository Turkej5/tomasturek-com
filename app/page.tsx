import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Projects } from "@/components/site/projects";
import { Travel } from "@/components/site/travel";
import { Hobbies } from "@/components/site/hobbies";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Travel />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
