import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import CVDownload from "@/components/CVDownload";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Timeline />
      <Education />
      <Projects />
      <CVDownload />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} Andrea De Tomasi. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

