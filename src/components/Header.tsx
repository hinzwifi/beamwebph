"use client";

import { motion } from "framer-motion";
import { Menu, X, ChevronUp, ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-changer";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  const menuComponents: { title: string; href: string }[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },

    {
      title: "Careers",
      href: "/careers",
    },
    {
      title: "Store",
      href: "/store",
    },
  ];
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Marketing Rates",
      href: "/pricing/marketing-rates",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Web Development Quotation",
      href: "/pricing/web-development-quotations",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "EA and VA Rates",
      href: "/pricing/ea-va-rates",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
  ];
  return (
    <header className="bg-[#151515] text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#F2B705]">
          Beam PH
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {menuComponents.map((menus) => (
                <NavigationMenuItem key={menus.title}>
                  <Link href={menus.href} legacyBehavior passHref>
                    <NavigationMenuLink className="navigationStyling">
                      {menus.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-inherit">
                  Pricing
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-inherit">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 bg-[#151515] lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {/* {component.description} */}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="md:hidden ">
              <Menu />
            </SheetTrigger>
            <SheetContent className="bg-[#151515] ">
              <SheetHeader className="justify-center items-center mt-10 ">
                {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
                <SheetDescription>
                  <div className="flex flex-col items-center gap-3 text-xl justify-center">
                    {menuComponents.map((menus) => (
                      <Link
                        key={menus.title}
                        href={menus.href}
                        className="hover:text-[#F2B705] transition-colors"
                      >
                        {menus.title}
                      </Link>
                    ))}

                    <div
                      className="hover:text-[#F2B705] transition-colors flex  flex-row items-center gap-2 "
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Pricing {isOpen ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    <div
                      className={`${
                        isOpen
                          ? "flex flex-col items-center py-4 space-y-4 bg-[#121212] p-2 rounded-md "
                          : "hidden "
                      } " "`}
                    >
                      {components.map((component) => (
                        <Link
                          key={component.title}
                          href={component.href}
                          className="hover:text-[#F2B705] text-md transition-colors"
                        >
                          {component.title}
                        </Link>
                      ))}
                    </div>
                    <ModeToggle />
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none  transition-colors hover:bg-[#F2B705] hover:text-[#151515] focus:bg-accent focus:text-[#151515]"
          {...props}
        >
          <div className="text-sm font-medium leading-none text-white  ">
            {title}
          </div>
          <p className="line-clamp-2 text-sm  leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
