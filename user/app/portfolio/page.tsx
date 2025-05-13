import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Resume from "@/components/resume/Resume";
import Contact from "@/components/contact/Contact";
import Preview from "@/components/main/preview";
// import Image from "next/image";

export default function Portfolio() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Preview />
        <Skills />
        <Encryption />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </main>
  );
}
