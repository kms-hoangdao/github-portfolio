import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
  {
    role: "Senior Full-Stack Developer",
    company: "KMS Technology, Inc.",
    logo: "/KMS.png",
    duration: "2024 - Present",
    description:
      "Lead developer for multiple high-impact projects, mentoring junior developers, and implementing best practices.",
    link: "https://kms-technology.com/",
    images: ["/BirdEyes.png"]
  },
  {
    role: "Full-Stack Developer",
    company: "Code Engine Studio",
    logo: "/CES.png",
    duration: "2021 - 2024",
    description:
      "Developing and maintaining various client projects with a focus on responsive design and performance optimization, collaborating directly with clients, and supporting teammates through code reviews while enhancing user experience.",
    link: "https://www.codeenginestudio.com/",
    images: ["/ClickVoyant.png","/QwikCut.png", "/Barnardos.png","/devvault.png"]
  }
];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((job) => (
              <li
                key={job.company}
                className="border-b last:border-b-0 pb-8 last:pb-0"
              >
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={job.logo}
                    alt={job.company}
                    width={40}
                    height={40}
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{job.role}</h3>
                    <p className="text-sm text-muted-foreground">
                      {job.company}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {job.duration}
                </p>
                <p className="text-sm mt-2">{job.description}</p>
                {/* Job Images */}
                <JobImages
                  role={job.role}
                  link={job.link}
                  images={job.images}
                  duration={job.duration}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
