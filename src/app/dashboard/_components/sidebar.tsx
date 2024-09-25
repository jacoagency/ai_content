"use client";

import { CreditCard, History, Rocket, WandSparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuList = [
  {
    name: "magic tools",
    icon: WandSparkles,
    path: "/dashboard",
  },
  {
    name: "output tools",
    icon: History,
    path: "/dashboard/history",
  },
  {
    name: "upgarde",
    icon: CreditCard,
    path: "/dashboard/upgrade",
  },
];
const Sidebar = () => {
  const path = usePathname();
  console.log(path);

  return (
    <div className="p-5 bg-white h-[800px] flex flex-col">
      <Rocket className="h-6 w-6" />
      <div className="mt-10 h-max flex flex-col justify-between">
        {MenuList.map((menu) => (
          <Link
            key={menu.name}
            href={menu.path}
            className="flex items-center gap-2"
          >
            <menu.icon className="h-6 w-6"></menu.icon>
            <h2 className="text-xl">{menu.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
