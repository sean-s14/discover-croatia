import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import constants from "@/assets/styles/constants";
import { Link } from "react-router";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { LucideIcon } from "lucide-react";

export default function NavbarDesktop({
  aboutLinks,
}: {
  aboutLinks: {
    title: string;
    href: string;
    description: string;
    icon: LucideIcon;
  }[];
}) {
  return (
    <div
      className="w-full md:px-4 flex justify-between items-center"
      style={{ height: constants.NAV_HEIGHT }}
    >
      <h1 className="text-lg md:text-2xl font-semibold">Discover Croatia</h1>
      <NavigationMenu className="hidden sm:flex">
        <NavigationMenuList>
          <NavigationMenuItem className={navigationMenuTriggerStyle()}>
            <Link to="/">Home</Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>

            <NavigationMenuContent className="grid grid-cols-2 min-w-[600px] p-3 gap-2">
              {aboutLinks.map((link, index) => (
                <Link
                  key={index}
                  to={"/about/" + link.href}
                  className="min-w-full text-left items-start p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
                >
                  <div className="text-lg font-semibold">{link.title}</div>
                  <p className="text-sm font-normal">{link.description}</p>
                </Link>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className={navigationMenuTriggerStyle()}>
            <Link to="/learn">Learn</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Auth + Theme */}
      <div className="flex gap-6">
        {/* Auth */}
        <div className="hidden sm:flex gap-2">
          <Link to="/login">
            <Button variant={"outline"}>Login</Button>
          </Link>

          <Link to="/signup">
            <Button variant={"default"}>Signup</Button>
          </Link>
        </div>

        {/* Theme */}
        <ModeToggle />
      </div>
    </div>
  );
}
