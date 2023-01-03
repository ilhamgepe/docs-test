import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { ColorScheme, Text } from "@mantine/core";

interface NavbarContentProps {
  navigation: any;
  className?: string;
  theme: ColorScheme;
}

export function NavbarContent({
  navigation,
  className,
  theme,
}: NavbarContentProps) {
  let router = useRouter();

  return (
    <nav className={clsx("text-sm", className)}>
      <ul role="list" className="space-y-9 ml-2">
        {navigation.map((section: any) => (
          <li key={section.title}>
            <h2
              className={`font-display font-medium text-slate-900 ${
                theme === "dark" && "text-white"
              }`}
            >
              {section.title}
            </h2>
            <ul
              role="list"
              className={`mt-2 space-y-2 border-l-2 border-slate-100 ${
                theme === "dark" && "border-slate-800"
              } lg:mt-4 lg:space-y-4`}
            >
              {section.links.map((link: any) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={clsx(
                      "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
                      link.href === router.pathname
                        ? "font-semibold text-sky-500 before:bg-sky-500"
                        : `text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block ${
                            theme === "dark" &&
                            "text-slate-400 before:bg-slate-700 hover:text-slate-300"
                          }`
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
