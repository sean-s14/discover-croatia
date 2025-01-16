import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import constants from "@/assets/styles/constants";
import { Link } from "react-router";

export default function Navigation() {
  return (
    <nav
      className="w-full h-20 px-4 border-b-2 border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-900 flex justify-between items-center"
      style={{ height: constants.NAV_HEIGHT }}
    >
      <h1 className="text-2xl font-semibold">Discover Croatia</h1>
      <div className="flex gap-6">
        <div className="flex gap-2">
          <Link to="/login">
            <Button variant={"outline"}>Login</Button>
          </Link>

          <Link to="/signup">
            <Button variant={"default"}>Signup</Button>
          </Link>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
