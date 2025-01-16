import "./App.css";

import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import routes from "@/Routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
