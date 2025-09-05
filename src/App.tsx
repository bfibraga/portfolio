import { ThemeProvider } from "@/components/theme-provider";
import MatrixRainingBackground from "@/components/matrix-raining-background";
import { useThemeStore } from "@/stores/theme";
import { useMatrixStore } from "@/stores/matrix";
import Navbar from "@/components/navbar";

function App() {
  const theme = useThemeStore((state) => state.theme);
  const matrixProps = useMatrixStore(theme)();

  return (
    <ThemeProvider>
      <div className="h-screen w-screen">
        <MatrixRainingBackground
          className="bg-background h-full w-full absolute inset-0"
          {...matrixProps}
        />
        <div className="w-full p-1 relative flex flex-col gap-1">
          <Navbar />
          <div
            className={`
            
            h-[calc(100%-60px)] 
            rounded-lg 
            
            `}
          ></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
