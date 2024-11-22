import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

export const AboutMe = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          I am a software engineer specializing in scalable web applications
          using technologies like React, Angular, Node.js, and various
          databases. My strengths include honesty, fast delivery with clean
          code, and excellent problem-solving, communication, and collaboration
          skills.
        </p>
        <p className="text-muted-foreground">
          Let's create the{" "}
          <span className="font-semibold italic">"last website you'll ever need"</span>{" "}
          — one that fuels growth and sets you apart from the competition.
        </p>
      </CardContent>
    </Card>
  );
};
