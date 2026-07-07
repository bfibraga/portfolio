import { ThemeProvider } from "@/components/theme-provider";
import MatrixRainingBackground from "@/components/matrix-raining-background";
import Navbar from "@/components/navbar";
import Heropage from "@/components/heropage";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

function App() {
  return (
    <ThemeProvider>
      <div className="h-screen w-screen">
        <MatrixRainingBackground
          color="#00d4ff"
          backgroundColor="transparent"
          speed={25}
          charset="mix"
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
