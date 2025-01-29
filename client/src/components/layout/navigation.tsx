import constants from "@/assets/styles/constants";

import NavbarDesktop from "./navbar-desktop";
import NavbarMobile from "./navbar-mobile";

import {
  LucideIcon,
  MapPin as MapPinIcon,
  Music as MusicIcon,
  Soup as SoupIcon,
  WholeWord as WholeWordIcon,
  BookText as BookTextIcon,
} from "lucide-react";

const aboutLinks: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "History",
    href: "history",
    description:
      "Overview of the country's past, from ancient history to modern day. Major historical events and figures.",
    icon: BookTextIcon,
  },
  {
    title: "Geography",
    href: "geography",
    description: "Maps, landscapes, and natural features.",
    icon: MapPinIcon,
  },
  {
    title: "Culture",
    href: "culture",
    description:
      "Traditions, festivals, and hoildays. Art, music, dance, and literature highlights.",
    icon: MusicIcon,
  },
  {
    title: "Cuisine",
    href: "cuisine",
    description:
      "Popular dishes and beverages. Recipes. Famous ingredients and culinary traditions.",
    icon: SoupIcon,
  },
  {
    title: "Language",
    href: "language",
    description: "Official and regional languages. Common phrases and words.",
    icon: WholeWordIcon,
  },
];

export default function Navigation() {
  return (
    <nav
      className="w-full px-3 md:px-4 border-b-2 border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-900 flex justify-between items-center"
      style={{ height: constants.NAV_HEIGHT }}
    >
      <NavbarDesktop aboutLinks={aboutLinks} />
      <NavbarMobile aboutLinks={aboutLinks} />
    </nav>
  );
}
