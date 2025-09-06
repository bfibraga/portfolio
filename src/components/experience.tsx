import TransparentCard from "./ui/transparent-card";

interface ExperienceProps {}

function Experience({}: ExperienceProps) {
  return (
    <TransparentCard className="md:w-3/5 w-full p-4" id="experience">
      <h2 className="text-lg font-bold">Experience</h2>
    </TransparentCard>
  );
}

export default Experience;
