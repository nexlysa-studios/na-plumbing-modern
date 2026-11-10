import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { Services, Process, EmergencyCTA, FAQ, QuoteForm } from "@/components/site/Sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Plumbing Services in Cape Town | NA Plumbing" },
      { name: "description", content: "Cape Town plumbing services for homes and businesses: emergency plumbing, leak detection, blocked drains, burst pipes, geyser repairs, bathrooms and kitchens." },
      { name: "keywords", content: "plumbing services Cape Town, emergency plumber Cape Town, leak detection Cape Town, blocked drains Cape Town, geyser repair Cape Town" },
    ],
    links: [{ rel: "canonical", href: "https://www.naplumbing.co.za/services" }],
  }),
  component: () => <SitePage><Services /><Process /><EmergencyCTA /><FAQ /><QuoteForm /></SitePage>,
});
