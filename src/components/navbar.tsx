import { Button } from "./ui/button";

const navItems = [
  { href: "#home", label: "HOME" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#contact", label: "CONTACT" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90" style={{ boxShadow: "0 2px 10px color-mix(in srgb, var(--primary) 40%, transparent)" }}>
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <span className="font-ui text-primary text-lg tracking-widest">
          {">}_PORTFOLIO.EXE"}
        </span>
        <div className="flex gap-1">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              <Button variant="ghost" className="font-ui text-base tracking-wider hover:text-primary hover:drop-shadow-[0_0_8px_var(--primary)]">
                {item.label}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
