import "./App.css";
import Providers from "./Providers";
import Navigation from "./components/ui/custom/navigation";

function App() {
  return (
    <Providers>
      <div className="text-neutral-700 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-900">
        <Navigation />
      </div>
    </Providers>
  );
}

export default App;
