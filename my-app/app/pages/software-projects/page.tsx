import type { Metadata } from "next";
import { pagesData } from "@/app/data";
import PageHeader from "@/app/components/PageHeader";
import ProjectList from "@/app/components/ProjectList";

const page = pagesData["software-projects"];

export const metadata: Metadata = {
  title: `${page.title} | Portfolio`,
};

export default function SoftwareProjectsPage() {
  return (
    <>
      <PageHeader title={page.title} subtitle={page.subtitle} />
      <ProjectList items={page.items} />
    </>
  );
}
