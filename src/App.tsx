import { ThemeProvider } from "@/components/theme-provider";
import MatrixRainingBackground from "@/components/matrix-raining-background";
import { useThemeStore } from "@/stores/theme";
import { useMatrixStore } from "@/stores/matrix";
import Navbar from "@/components/navbar";
// import TransparentCard from "@/components/ui/transparent-card";
import Heropage from "@/components/heropage";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

function App() {
  const theme = useThemeStore((state) => state.theme);
  const matrixProps = useMatrixStore(theme)();

  return (
    <ThemeProvider>
      <div className="h-screen w-screen">
        <MatrixRainingBackground
          {...matrixProps}
          className="bg-background h-full w-full absolute inset-0"
          yapanese
        />
        <div className="w-full h-full p-1 relative flex flex-col items-center gap-2">
          <Navbar />
          {/* <TransparentCard
            className={`
            w-3/5
            h-[calc(100%-60px)] 
            rounded-lg 
            `}
          >
            <div className="p-4">
              <h2 className="text-lg font-bold">Hi, I'm Bruno</h2>
              <p className="text-sm text-muted-foreground">
                Master in Computer Science, Full Stack Developer, and Tech
                Enthusiast. Passionate about creating innovative web
                applications and exploring the latest technologies in the
                digital world.
              </p>
            </div>
          </TransparentCard> */}
          <Heropage />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
