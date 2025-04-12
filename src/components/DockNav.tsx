"use client";
import React from "react";
import Link from "next/link";
import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
} from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { ThemeToggle } from "@/components/theme";

export function DockNav() {
  const data = [
    {
      title: "Home",
      icon: <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "Projects",
      icon: <Package className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "/projects",
    },
    {
      title: "Experience",
      icon: <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "/experience",
    },
    {
      title: "Activity",
      icon: <Activity className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Change Log",
      icon: <ScrollText className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Email",
      icon: <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
  ];

  return (
    <div className="fixed bottom-2 left-1/2 max-w-full -translate-x-1/2 z-20">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          <Link key={idx} href={item.href} passHref>
            <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800">
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
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