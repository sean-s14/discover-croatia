import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navigation() {
  return (
    <div className="w-full h-20 px-4 border-b-2 border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-900 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Discover Croatia</h1>
      <div className="flex gap-2">
        <Button variant={"outline"}>Login</Button>
        <Button variant={"default"}>Signup</Button>
        <ModeToggle />
      </div>
    </div>
  );
}
