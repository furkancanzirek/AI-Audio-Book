"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import HeaderStyles from "./header.module.css";
import { useState } from "react";
import { cn } from "@/app/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { data: session, status ,update} = useSession();
  const logOut = async () => {
    await signOut()
  }
  return (
    <div className="py-4 sticky top-0 bg-background z-10">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            className="hidden md:block"
            src="/assets/images/logo.png"
            width={55}
            height={55}
          />
          <Image
            className="block md:hidden"
            src="/assets/images/logo.png"
            width={50}
            height={50}
          />
          <span className="text-lg md:text-2xl font-bold tracking-wide">
            AUDIO BOOK
          </span>
        </div>
        <Button
          className="md:hidden"
          variant="icon"
          onClick={() => setShowMenu(true)}
        >
          <HiOutlineMenu className="text-3xl" />
        </Button>
        <div
          className={cn(
            "flex flex-col translate-x-full md:translate-x-0 items-center justify-center md:flex-row gap-3 fixed min-h-screen inset-0 bg-primary",
            "md:static z-50 md:z-0 md:bg-transparent md:flex md:items-center md:justify-between md:gap-0 md:min-h-0 md:inset-auto md:w-auto md:h-auto ",
            {
              "translate-x-0 transition-transform": showMenu,
            }
          )}
        >
          <ul
            className="flex gap-6 items-center
            pb-8 md:pb-0 md:pr-8
          flex-col 
          md:flex-row
          "
          >
            <Button
              className="inline md:hidden absolute top-4 right-8"
              variant="icon"
              onClick={() => setShowMenu(false)}
            >
              <HiX className="text-3xl" />
            </Button>
            <Link href="/">
            <li className={HeaderStyles["li-item"]}>Home</li>
            </Link>
            <Link href="/explore">
            <li className={HeaderStyles["li-item"]}>Explore</li>
            </Link>
            <li className={HeaderStyles["li-item"]}>Contact</li>
            <li className={HeaderStyles["li-item"]}>About</li>
          </ul>
          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image
                  className="rounded-full cursor-pointer"
                  src={session.user.image}
                  width={40}
                  height={40}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Keyboard shortcuts
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      Invite users
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    New Team
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button onClick={logOut}>Sign Out</Button>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button className="bg-background md:bg-primary w-56 md:w-auto md:text-base  text-lg uppercase md:capitalize font-semibold md:font-normal rounded-full flex items-center justify-center">
              <Link
                href="/auth"
                className="w-full h-full leading-none flex justify-center items-center"
              >
                Sign In
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
