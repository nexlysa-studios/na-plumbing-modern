import type { ReactNode } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Sections";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export function SitePage({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
