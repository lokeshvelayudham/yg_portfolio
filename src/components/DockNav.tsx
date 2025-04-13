"use client";
import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  Mail,
  PanelsTopLeft,
  BriefcaseBusiness,
  Linkedin,
} from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { ThemeToggle } from "@/components/theme";
import Icon from "@mdi/react";
import { mdiArtstation, mdiYoutube } from "@mdi/js";

interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  isSeparator?: never;
}

interface SeparatorItem {
  isSeparator: true;
  title?: never;
  icon?: never;
  href?: never;
}

type DockItemType = DockItem | SeparatorItem;

export function DockNav() {
  const data: DockItemType[] = [
    {
      title: "Home",
      icon: (
        <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Projects",
      icon: (
        <PanelsTopLeft className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Experience",
      icon: (
        <BriefcaseBusiness className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/experience",
    },
    // Separator
    {
      isSeparator: true,
    },
    {
      title: "ArtStation",
      icon: <Icon path={mdiArtstation} size={1} />,
      // icon: <ScrollText className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "https://www.artstation.com/yaminiganesh3",
    },
    {
      title: "linkedin",
      icon: (
        <Linkedin className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      // icon: <ScrollText className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/yaminiganesan/",
    },
    {
      title: "Email",
      icon: (
        <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "mailto:Yaminiganesh099@gmail.com",
    },
  ];

  return (
    <div className="fixed bottom-2 left-1/2 max-w-full -translate-x-1/2 z-20">
      <Dock className="items-end pb-3">
        {data.map((item, idx) =>
          item.isSeparator ? (
            <div
              key={`separator-${idx}`}
              className="h-8 w-px bg-neutral-300 dark:bg-neutral-600 mx-2"
            />
          ) : (
            <Link
              key={idx}
              href={item.href}
              passHref
              target={
                item.href.startsWith("http") || item.href.startsWith("mailto")
                  ? "_blank"
                  : undefined
              }
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800">
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            </Link>
          )
        )}
        <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800">
          <DockLabel>Theme</DockLabel>
          <DockIcon>
            <ThemeToggle />
          </DockIcon>
        </DockItem>
      </Dock>
    </div>
  );
}
