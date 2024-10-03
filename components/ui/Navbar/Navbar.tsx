"use client";
import ROUTES from "@/lib/routes";
import { Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const Navbar = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="h-full">
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold mr-2">Task Manager</h1>
          <Settings className="text-lg" />
        </div>
        <ul className="flex space-x-4">
          {ROUTES.map((route) => (
            <li key={route.path}>
              <a
                href={route.path}
                className={
                  pathname === route.path
                    ? "text-gray-300 font-bold underline"
                    : "text-white"
                }
              >
                {route.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="h-[calc(100%-60px)]">{children}</div>
    </div>
  );
};

export default Navbar;
