import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
  {
    title: "Birdseye Security",
    description:
      "Birdseye Security specializes in Remote Security and Facility Supervision for a diverse selection of industries across North America.  We have proven to deliver a greater range of benefits than traditional onsite security guards and CCTV cameras, while often reducing our clients overall security and operations management budget. ",
    tech: "React",
    link: "#"
  },
  {
    title: "Barnardos",
    description:
      "Barnardo's is a children's charity that protects and supports children and young people in the AU who need us. We help bring out the best in them.",
    tech: "React Native",
    link: "#"
  },
  {
    title: "QWIKCUT",
    description:
      "QwikCut is a cloud-based, sports video management solution for colleges, high schools, middle schools, clubs, and recreational teams. Coaches utilize our software to facilitate film storage, stat breakdowns, game analytics, highlight editing, and recruiting support for athletes.",
    tech: "React",
    link: "https://www.qwikcut.com/"
  },
  {
    title: "Click Voyant",
    description:
      "Click Voyant is an analytics platform that automates analyst insights from raw marketing data and enables all businesses to have enterprise-style analytics.",
    tech: "React",
    link: "https://www.clickvoyant.com/"
  }
];

const techColors = {
    "React": "bg-blue-500",
    "React Native": "bg-green-500",
    "Vue.js": "bg-purple-500",
    "Python": "bg-yellow-500",
}

export const Projects = () => {
    return (
      <>
        <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {projects.map((project, i) => (
            <Card key={project.description}>
              <CardContent className="pt-6 h-full">
                <div className="flex flex-col h-full">
                  <Link
                    href={project.link}
                    className="font-semibold text-primary hover:underline"
                  >
                    {project.title}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1 mb-4">
                    {project.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className={cn(
                          "size-4 rounded-full",
                          techColors[project.tech as keyof typeof techColors]
                        )}
                      />
                      <span className="text-xs font-medium text-muted-foreground">
                        {project.tech}
                      </span>
                    </div>
                    <Link
                      href={project.link}
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      View Project
                      <ExternalLink className="inline-block size-3" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </>
    );
}