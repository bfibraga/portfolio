import { ModeToggle } from "./mode-toggle";

type NavbarProps = {
  // Add any props you want to pass to the Navbar component
};

export function Navbar({}: NavbarProps) {
  return (
    <nav
      className={`h-15 w-3/5
                      mt-1
                      bg-background/30 backdrop-blur-lg 
                      rounded-lg 
                      outline-1 outline-border
                      flex 
                      justify-end items-center gap-2 
                      p-2 
                      z-[1]`}
    >
      <ModeToggle />
    </nav>
  );
}

export default Navbar;
