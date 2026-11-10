import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { QuoteForm, Contact } from "@/components/site/Sections";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Plumbing Quote | Cape Town | NA Plumbing" },
      { name: "description", content: "Request a plumbing quote in Cape Town for geyser repairs, leak detection, blocked drains, installations or maintenance." },
    ],
    links: [{ rel: "canonical", href: "https://www.naplumbing.co.za/quote" }],
  }),
  component: () => <SitePage><QuoteForm /><Contact /></SitePage>,
});
