import { TransparentCard } from "@/components/ui/transparent-card";

function Heropage() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center relative z-10"
    >
      <TransparentCard className="px-8 py-12 md:px-16 md:py-16">
        <p className="font-heading text-xs md:text-sm text-primary tracking-wider mb-6">
          [ COIN DETECTED ]
        </p>
        <h1 className="font-heading text-2xl md:text-4xl text-primary mb-4" style={{ textShadow: "var(--glow-primary)" }}>
          BRUNO BRAGA<span className="animate-pulse ml-1">_</span>
        </h1>
        <p className="font-ui text-lg md:text-2xl text-accent mb-6" style={{ textShadow: "var(--glow-accent)" }}>
          Master in Computer Science // Full Stack Developer
        </p>
        <p className="font-ui text-sm text-muted-foreground tracking-widest">
          {">"} PRESS ANY KEY TO SCROLL _
        </p>
      </TransparentCard>
      <div className="mt-8 font-ui text-xs text-muted-foreground tracking-widest">
        SCORE: 000000
      </div>
    </section>
  );
}

export default Heropage;
