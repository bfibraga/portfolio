import { TransparentCard } from "@/components/ui/transparent-card";

function Experience() {
  return (
    <section id="experience" className="flex flex-col items-center w-full md:w-3/5 relative z-10 py-16">
      <h2 className="font-heading text-lg text-primary mb-8" style={{ textShadow: "var(--glow-primary)" }}>
        {">}_EXPERIENCE"}
      </h2>
      <div className="flex flex-col gap-4 w-full">
        {[1, 2, 3].map((i) => (
          <TransparentCard key={i} className="p-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-ui text-lg text-primary">POSITION_{i.toString().padStart(2, "0")}</h3>
              <span className="font-ui text-sm text-accent">202{i} — 2026</span>
            </div>
            <p className="font-body text-sm text-muted-foreground mb-3">
              Company Name • Location
            </p>
            <p className="font-body text-sm text-foreground">
              Description of role and responsibilities. Brief overview of key achievements and technologies used.
            </p>
          </TransparentCard>
        ))}
      </div>
    </section>
  );
}

export default Experience;
