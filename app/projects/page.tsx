import type { Metadata } from "next";
import Project from "@/components/projects/Project";

export const metadata: Metadata = {
  title: "Projects — ArkEngine Technologies",
  description:
    "Real-world projects delivered by ArkEngine Technologies — travel booking, healthcare, and industrial platforms with measurable business outcomes.",
};

export default function ProjectsPage() {
  return <Project />;
}
