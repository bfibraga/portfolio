import { TransparentCard } from "@/components/ui/transparent-card";
import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center w-full md:w-3/5 relative z-10 py-16">
      <h2 className="font-heading text-lg text-primary mb-8" style={{ textShadow: "var(--glow-primary)" }}>
        {">}_PROJECTS"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {[1, 2, 3, 4].map((i) => (
          <TransparentCard key={i} className="p-0">
            <CardHeader className="p-4 pb-0">
              <CardTitle className="font-ui text-xl text-primary">
                PROJECT_{i.toString().padStart(2, "0")}
              </CardTitle>
              <CardDescription className="font-body text-sm text-muted-foreground mt-1">
                Description of project {i} — a brief overview of what this project does and the problem it solves.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pb-0">
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js"].map((tech) => (
                  <span key={tech} className="font-ui text-xs text-accent border border-accent/40 px-2 py-0.5">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <Button variant="outline" size="sm">
                ▶ VIEW
              </Button>
            </CardFooter>
          </TransparentCard>
        ))}
      </div>
    </section>
  );
}

export default Projects;
