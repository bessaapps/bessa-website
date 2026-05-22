import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { androidLink, iOSLink, links, sEOTitle } from "@/lib/constants";
import { LuMenu } from "react-icons/lu";

export default function TopNavigation() {
  return (
    <header className={"sticky top-0 z-50"}>
      <div className={"navbar bg-white px-2 sm:px-8"}>
        <div className={"navbar-start gap-2 sm:gap-4"}>
          <div className={"dropdown lg:hidden"}>
            <div tabIndex={0}>
              <LuMenu size={24} />
            </div>
            <nav>
              <ul
                tabIndex={-1}
                className={
                  "menu menu-sm dropdown-content bg-white z-1 mt-3 w-52 p-2"
                }
              >
                {links.map(({ href, anchor }) => (
                  <li key={href}>
                    <Link href={href} className={"font-semibold"}>
                      {anchor}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <Link
            href={"/"}
            title={sEOTitle}
            className={"text-base-content text-xl font-bold"}
          >
            <Image src={Logo} alt={"Bessa Logo"} width={40} height={40} />
          </Link>
          <Link
            href={"/"}
            title={sEOTitle}
            className={"text-base-content text-xl font-bold"}
          >
            Bessa
          </Link>
        </div>
        <div className={"navbar-center hidden lg:flex"}>
          <nav>
            <ul className={"menu menu-horizontal px-1"}>
              {links.map(({ href, anchor }) => (
                <li key={href}>
                  <Link href={href} className={"font-semibold"}>
                    {anchor}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={"navbar-end gap-2 sm:gap-4"}>
          <a href={iOSLink} target={"_blank"} className={"btn btn-secondary"}>
            iOS
          </a>
          <a
            href={androidLink}
            target={"_blank"}
            className={"btn btn-secondary"}
          >
            Android
          </a>
        </div>
      </div>
    </header>
  );
}
