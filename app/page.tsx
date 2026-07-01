import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Stats } from '@/components/stats';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Courses } from '@/components/courses';
import { Hiring } from '@/components/hiring';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <Experience />
      <Courses />
      <Hiring />
      <Contact />
      <Footer />
    </main>
  );
}
