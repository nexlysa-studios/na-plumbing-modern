import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { FAQ, Contact } from "@/components/site/Sections";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Plumbing FAQs | NA Plumbing Cape Town" },
      { name: "description", content: "Answers about NA Plumbing emergency call-outs, Cape Town service areas, response times and plumbing quotes." },
    ],
    links: [{ rel: "canonical", href: "https://www.naplumbing.co.za/faq" }],
  }),
  component: () => <SitePage><FAQ /><Contact /></SitePage>,
});
