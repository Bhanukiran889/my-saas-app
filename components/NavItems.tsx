"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItem = [
  { label: "home", href: "/" },
  { label: "companions", href: "/companions" },
  { label: "my journey", href: "/my-journey" },
  { label: "Sign in", href: "/sign-in" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItem.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={pathname === href ? "text-primary font-semibold " : ""}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
