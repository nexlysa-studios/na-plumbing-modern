import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import {
  Hero,
  Trust,
  Services,
  RecentWork,
  WhyChooseUs,
  Process,
  EmergencyCTA,
  Testimonials,
  FAQ,
  About,
  QuoteForm,
  Contact,
  Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plumber Cape Town | NA Plumbing Services" },
      { name: "description", content: "Looking for a reliable plumber in Cape Town? NA Plumbing Services handles emergency call-outs, geysers, leaks, blocked drains and installations." },
      { property: "og:title", content: "Plumber Cape Town | NA Plumbing Services" },
    ],
    links: [{ rel: "canonical", href: "https://www.naplumbing.co.za/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Services />
        <RecentWork />
        <WhyChooseUs />
        <Process />
        <EmergencyCTA />
        <About />
        <Testimonials />
        <QuoteForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
