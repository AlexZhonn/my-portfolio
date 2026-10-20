import type { Metadata } from "next";
import { pagesData } from "@/app/data";
import PageHeader from "@/app/components/PageHeader";
import ExperienceTimeline from "@/app/components/ExperienceTimeline";

const page = pagesData["experience"];

export const metadata: Metadata = {
  title: `${page.title} | Portfolio`,
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <ExperienceTimeline items={page.items} />
    </>
  );
}
