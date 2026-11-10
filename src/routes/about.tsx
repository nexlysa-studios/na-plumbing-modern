import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { About, WhyChooseUs, Testimonials, Contact } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NA Plumbing | Cape Town Plumbers" },
      { name: "description", content: "Meet NA Plumbing Services, a Cape Town plumbing team focused on reliable call-outs, clear communication and quality workmanship." },
    ],
    links: [{ rel: "canonical", href: "https://www.naplumbing.co.za/about" }],
  }),
  component: () => <SitePage><About /><WhyChooseUs /><Testimonials /><Contact /></SitePage>,
});
