"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOut } from "lucide-react";

import { useAuth } from "@/app/Context/AuthProvider";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { routes } from "@/data/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function Navbar() {
  const auth = useAuth();
  const pathname = usePathname();

  return (
    <nav className="w-full border-b backdrop-blur fixed top-0 z-50">
      <div className="container flex items-center justify-between mx-auto px-6 py-1">
        <div className="">
          <p className="text-xl text-gray-800 font-bold">
            financ<span className="text-emerald-600">i</span>
          </p>
        </div>
        <div className="flex gap-2">
          {routes.map(({ path, name, icon }) => {
            const active = true ? pathname == path : false;
            const Icon = icon;
            return (
              <Link
                key={path}
                href={path}
                className={`flex gap-2 items-center px-2 py-1 rounded transition-all text-sm ${
                  active ? "bg-emerald-500 text-white" : "hover:bg-gray-200"
                }`}
              >
                <Icon size={14} />
                {name}
              </Link>
            );
          })}
        </div>
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarFallback className="bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer">
                {auth.user?.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-min p-2">
            <Button
              onClick={auth.logout}
              className="bg-red-400 hover:bg-rose-600 text-white px-2 !py-0.5"
            >
              <LogOut size={16} />
              Logout
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}
