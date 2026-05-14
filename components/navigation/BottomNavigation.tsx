import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { links, sEOTitle } from "@/lib/constants";

export default function BottomNavigation() {
  const socialLinks = [
    { href: "https://instagram.com/getbessa", anchor: "Instagram" },
    { href: "https://linkedin.com/company/bessaapps", anchor: "LinkedIn" },
    { href: "https://x.com/getbessa", anchor: "X" },
    { href: "https://youtube.com/@getbessa", anchor: "Youtube" }
  ];

  return (
    <footer className={"bg-white"}>
      <div className={"max-w-7xl mx-auto grid grid-cols-4 py-24"}>
        <div className={"col-span-2 flex flex-col justify-between"}>
          <Link
            href={"/"}
            title={sEOTitle}
            className={"text-base-content text-xl font-bold"}
          >
            <Image src={Logo} alt={"Bessa Logo"} width={40} height={40} />
          </Link>
          <p>
            Proudly created by{" "}
            <Link
              href={"https://bessaapps.com"}
              title={"Startup App Development"}
              target={"_blank"}
              className={"underline"}
            >
              Bessa Community Apps
            </Link>
          </p>
        </div>
        <nav>
          <ul>
            {links.map(({ href, anchor }) => (
              <li key={href}>
                <Link href={href} className={"font-semibold"}>
                  {anchor}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul>
          {socialLinks.map(({ href, anchor }) => (
            <li key={href}>
              <Link href={href} target={"_blank"} className={"font-semibold"}>
                {anchor}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
