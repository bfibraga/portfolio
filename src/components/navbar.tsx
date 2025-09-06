// import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

type NavbarProps = {
  // Add any props you want to pass to the Navbar component
};

export function Navbar({}: NavbarProps) {
  return (
    <nav
      className={`h-15 md:w-3/5
                      w-full
                      mt-1
                      bg-background/30 backdrop-blur-lg 
                      rounded-lg 
                      outline-1 outline-border
                      flex 
                      justify-between items-center gap-2 
                      p-2
                      z-[1]`}
    >
      <div className="flex-1 flex justify-center">
        <Button variant="ghost" asChild>
          <a href="#home">Home</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#projects">Projects</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#experience">Experience</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#contact">Contact</a>
        </Button>
      </div>
      {/* <div className="relative flex justify-end">
        <ModeToggle />
      </div> */}
    </nav>
  );
}

export default Navbar;
