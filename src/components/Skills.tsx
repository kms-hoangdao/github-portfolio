import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "TypeScript",
  "JavaScript",
  "SQL",
  "HTML",
  "CSS",
  "TailwindCSS",
  "NextJS",
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Docker"
];

export const Skills = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
