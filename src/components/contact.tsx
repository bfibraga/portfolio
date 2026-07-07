import { Github, Linkedin, Mail } from "lucide-react";
import { TransparentCard } from "@/components/ui/transparent-card";
import { Button } from "@/components/ui/button";

function ContactButton({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Button variant="ghost" size="icon" className="h-12 w-12 hover:text-primary hover:drop-shadow-[0_0_10px_var(--primary)]" asChild>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </Button>
  );
}

function Contact() {
  const iconSize = "h-6 w-6";

  return (
    <section id="contact" className="flex flex-col items-center w-full md:w-3/5 relative z-10 py-16">
      <h2 className="font-heading text-lg text-primary mb-8" style={{ textShadow: "var(--glow-primary)" }}>
        {">}_CONTACT"}
      </h2>
      <TransparentCard className="p-8 w-full">
        <div className="flex flex-col items-center gap-4">
          <p className="font-ui text-lg text-foreground mb-2">FIND ME ON:</p>
          <div className="flex gap-4">
            <ContactButton
              href="https://github.com/bfibraga"
              icon={
                <>
                  <Github className={iconSize} />
                  <span className="sr-only">GitHub</span>
                </>
              }
            />
            <ContactButton
              href="https://linkedin.com/in/bfibraga"
              icon={
                <>
                  <Linkedin className={iconSize} />
                  <span className="sr-only">LinkedIn</span>
                </>
              }
            />
            <ContactButton
              href="mailto:brunobfi2000@gmail.com"
              icon={
                <>
                  <Mail className={iconSize} />
                  <span className="sr-only">Email</span>
                </>
              }
            />
          </div>
          <p className="font-ui text-xs text-muted-foreground mt-4">
            © 2026 BRUNO BRAGA // ALL RIGHTS RESERVED
          </p>
        </div>
      </TransparentCard>
    </section>
  );
}

export default Contact;
