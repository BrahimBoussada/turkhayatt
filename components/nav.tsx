"use client";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";
import { Menu } from "lucide-react";

/* İMPORT */

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavLinks } from "@/lib/data";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", menuOpen);
  });

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);

    window.addEventListener("orientationchange", closeMenu);
    window.addEventListener("resize", closeMenu);

    return () => {
      window.addEventListener("orientationchange", closeMenu);
      window.addEventListener("resize", closeMenu);
    };
  }, [setMenuOpen]);
  return (
    <header>
      <Container>
        <div className=" flex flex-row justify-between items-center">
          {/* LOGO */}
          <div className=" py-[34px]">
            <Link href={"/"}>
              <Logo className="lg:h-[27px] h-[21px] " />
            </Link>
          </div>

          {/* LINKS */}
          <div className=" flex-row items-center justify-center gap-[89px] hidden lg:flex ">
            {NavLinks.map((navLink) => (
              <ul key={navLink.name}>
                <li>
                  <Link
                    className=" hover:text-darkGrey duration-150 transition-all"
                    href={navLink.hash}
                  >
                    {navLink.name}
                  </Link>
                </li>
              </ul>
            ))}
          </div>

          {/* CONTACT-BTN */}
          <Link href={"/contact"} className="hidden lg:flex">
            <div className=" bg-red text-white rounded-full py-[13px] px-[16px] w-fit justify-center mx-auto hover:bg-red/80 transition-all duration-150">
              <p className=" text-center">Contact Us</p>
            </div>
          </Link>

          {/* MENU */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen((open) => !open)}>
              <Menu className=" hover:text-darkGrey duration-150 transition-all w-[27px] h-[27px]" />
            </button>
          </div>
        </div>

        {/* MOBILEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */}
        {/* LINKS */}
        <div
          className={cn(
            " fixed bg-white h-full w-full left-0 px-[21px] md:px-[55px] lg:hidden",
            menuOpen ? "" : "hidden"
          )}
        >
          <div className="flex flex-col gap-[21px]">
            {NavLinks.map((navLink) => (
              <ul key={navLink.name}>
                <li>
                  <Link
                    onClick={() => setMenuOpen((open) => !open)}
                    className=" hover:text-darkGrey duration-150 transition-all text-[34px]"
                    href={navLink.hash}
                  >
                    {navLink.name}
                  </Link>
                </li>
              </ul>
            ))}
            <Link href={"/contact"} className=" w-full">
              <div className=" w-full bg-red text-white text-[34px] rounded-full py-[13px] px-[16px] justify-center mx-auto hover:bg-red/80 transition-all duration-150">
                <p className=" text-center">Contact Us</p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
