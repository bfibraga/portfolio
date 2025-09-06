import TransparentCard from "@/components/ui/transparent-card";

interface ProjectsProps {}

function Projects({}: ProjectsProps) {
  return (
    <TransparentCard className="md:w-3/5 w-full p-4" id="projects">
      <h2 className="text-lg font-bold">Projects</h2>
    </TransparentCard>
  );
}

export default Projects;
