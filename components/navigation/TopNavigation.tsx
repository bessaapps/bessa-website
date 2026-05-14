import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { androidLink, iOSLink, links } from "@/lib/constants";

export default function TopNavigation() {
  return (
    <header>
      <div className={"navbar bg-white"}>
        <div className={"navbar-start gap-2"}>
          <div className={"dropdown lg:hidden"}>
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <nav>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </nav>
          </div>
          <Image src={Logo} alt={"Bessa Logo"} width={40} height={40} />
          <a className="text-base-content text-xl font-bold">Bessa</a>
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
        <div className={"navbar-end gap-2"}>
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
