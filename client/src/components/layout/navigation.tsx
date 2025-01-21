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

const links: { title: string; href: string; description: string }[] = [
  {
    title: "History",
    href: "history",
    description:
      "Overview of the country's past, from ancient history to modern day. Major historical events and figures.",
  },
  {
    title: "Geography",
    href: "geography",
    description: "Maps, landscapes, and natural features.",
  },
  {
    title: "Culture",
    href: "culture",
    description:
      "Traditions, festivals, and hoildays. Art, music, dance, and literature highlights.",
  },
  {
    title: "Cuisine",
    href: "cuisine",
    description:
      "Popular dishes and beverages. Recipes. Famous ingredients and culinary traditions.",
  },
  {
    title: "Language",
    href: "language",
    description: "Official and regional languages. Common phrases and words.",
  },
];

export default function Navigation() {
  return (
    <nav
      className="w-full h-20 px-4 border-b-2 border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-900 flex justify-between items-center"
      style={{ height: constants.NAV_HEIGHT }}
    >
      <h1 className="text-2xl font-semibold">Discover Croatia</h1>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className={navigationMenuTriggerStyle()}>
            <Link to="/">Home</Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>

            <NavigationMenuContent className="grid grid-cols-2 min-w-[600px] p-3 gap-2">
              {links.map((link, index) => (
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
