import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { LucideIcon, Menu as MenuIcon } from "lucide-react";

export default function NavbarMobile({
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
    <div className="sm:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon" className="ml-4">
            <MenuIcon />
          </Button>
        </DrawerTrigger>
        <DrawerHeader className="hidden">
          <DrawerTitle>Toggle Navigation Menu</DrawerTitle>
        </DrawerHeader>
        <DrawerContent className="top-0">
          <DrawerDescription className="hidden">
            Navigation Menu
          </DrawerDescription>
          <div className="mx-auto w-full max-w-sm">
            <div className="flex flex-col gap-3 p-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="home" className="flex p-2">
                  <DrawerClose asChild>
                    <NavLink
                      to="/"
                      className="w-full text-xl font-semibold [&.active]:text-gray-400 "
                    >
                      Home
                    </NavLink>
                  </DrawerClose>
                </AccordionItem>
                <AccordionItem value="learn" className="flex p-2">
                  <DrawerClose asChild>
                    <NavLink
                      to="/learn"
                      className="w-full text-xl font-semibold [&.active]:text-gray-400 "
                    >
                      Learn
                    </NavLink>
                  </DrawerClose>
                </AccordionItem>
                <AccordionItem value="about" className="flex flex-col">
                  <AccordionTrigger className="text-xl p-2">
                    About
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-1 pt-1 pl-4">
                    {aboutLinks.map((link, index) => (
                      <AccordionItem
                        key={index}
                        value={"about " + link.href}
                        className="flex flex-col p-2"
                      >
                        <DrawerClose asChild>
                          <NavLink
                            to={"/about/" + link.href}
                            className="[&.active]:text-gray-400 flex gap-2"
                          >
                            <link.icon size="20" />
                            <div>{link.title}</div>
                          </NavLink>
                        </DrawerClose>
                      </AccordionItem>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <DrawerFooter>
              <Button asChild>
                <Link to="/login" className="font-semibold">
                  Login
                </Link>
              </Button>
              <Button asChild variant={"secondary"}>
                <Link to="/signup" className="font-semibold">
                  Signup
                </Link>
              </Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
