import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { RecentWork, Contact } from "@/components/site/Sections";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Plumbing Projects in Cape Town | NA Plumbing" },
      { name: "description", content: "Browse recent plumbing installations and renovation work completed by NA Plumbing Services in Cape Town." },
    ],
    links: [{ rel: "canonical", href: "https://www.naplumbing.co.za/work" }],
  }),
  component: () => <SitePage><RecentWork /><Contact /></SitePage>,
});
