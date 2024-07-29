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

export const Nav = () => {
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
            <button>
              <Menu className=" hover:text-darkGrey duration-150 transition-all w-[27px] h-[27px]" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
