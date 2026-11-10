import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { Contact, FAQ } from "@/components/site/Sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact a Plumber in Cape Town | NA Plumbing" },
      { name: "description", content: "Contact NA Plumbing Services for a Cape Town plumber, emergency call-out or plumbing quote. Call, email or WhatsApp our team." },
    ],
    links: [{ rel: "canonical", href: "https://www.naplumbing.co.za/contact" }],
  }),
  component: () => <SitePage><Contact /><FAQ /></SitePage>,
});
