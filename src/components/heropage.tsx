import TransparentCard from "@/components/ui/transparent-card";

interface HeropageProps {}

function Heropage({}: HeropageProps) {
  return (
    <TransparentCard className="md:w-3/5 w-full p-4" id="home">
      <h2 className="text-2xl font-bold">Hi, I'm Bruno</h2>
      <p className="text-md text-muted-foreground">
        Master in Computer Science, Full Stack Developer, and Tech Enthusiast.
        Passionate about creating innovative web applications and exploring the
        latest technologies in the digital world.
      </p>
    </TransparentCard>
  );
}

export default Heropage;
