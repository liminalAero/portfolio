import type { Metadata } from "next";
import { WORK } from "@/lib/work";
import { PROJECTS } from "@/lib/projects";
import WorkBrowser from "./WorkBrowser";

export const metadata: Metadata = {
  title: "Work — Akhil Venkatesh",
};

export default function WorkPage() {
  return <WorkBrowser work={WORK} projects={PROJECTS} />;
}
