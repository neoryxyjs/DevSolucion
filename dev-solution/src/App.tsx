import { Navigation } from "./app/components/Navigation";
import { Hero } from "./app/components/Hero";
import { Services } from "./app/components/Services";
import { Portfolio } from "./app/components/Portfolio";
import { Features } from "./app/components/Features";
import { CTA } from "./app/components/CTA";
import { Footer } from "./app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}