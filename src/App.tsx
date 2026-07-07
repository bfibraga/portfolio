import { ThemeProvider } from "@/components/theme-provider";
import MatrixRainingBackground from "@/components/matrix-raining-background";
import { useMatrixStore } from "@/stores/matrix";
import Navbar from "@/components/navbar";
import Heropage from "@/components/heropage";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

function App() {
  const matrixProps = useMatrixStore();

  return (
    <ThemeProvider>
      <div className="h-screen w-screen">
        <MatrixRainingBackground
          {...matrixProps}
          className="bg-background h-full w-full absolute inset-0"
        />
        <div className="w-full h-full p-1 relative flex flex-col items-center gap-2">
          <Navbar />
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
