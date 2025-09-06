import { Github, Linkedin, Mail } from "lucide-react";
import TransparentCard from "./ui/transparent-card";
import { Button } from "./ui/button";

interface ContactProps {}

function ContactButton({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Button variant="ghost" asChild>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </Button>
  );
}

function Contact({}: ContactProps) {
  const iconSize = "w-10 h-10";

  return (
    <TransparentCard
      className="w-full md:w-3/5 mt-auto p-4 flex flex-row justify-center gap-4"
      id="contact"
    >
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
    </TransparentCard>
  );
}

export default Contact;
