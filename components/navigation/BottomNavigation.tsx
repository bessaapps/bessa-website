import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { androidLink, iOSLink, links, sEOTitle } from "@/lib/constants";
import Section from "@/components/Section";

export default function BottomNavigation() {
  const socialLinks = [
    { href: "https://instagram.com/getbessa", anchor: "Instagram" },
    { href: "https://linkedin.com/company/bessaapps", anchor: "LinkedIn" },
    { href: "https://x.com/getbessa", anchor: "X" },
    { href: "https://youtube.com/@getbessa", anchor: "Youtube" }
  ];

  return (
    <>
      <div className={"bg-primary"}>
        <div className={"w-full max-w-5xl px-4 py-16 mx-auto"}>
          <div className={"flex justify-between gap-4"}>
            <div>
              <p className={"text-white mb-4"}>
                Amplify your voice
                <br /> in a space built for it.
              </p>
              <div className={"flex gap-4"}>
                <a href={iOSLink} target={"_blank"} className={"btn sm:btn-lg"}>
                  iOS
                </a>
                <a
                  href={androidLink}
                  target={"_blank"}
                  className={"btn sm:btn-lg"}
                >
                  Android
                </a>
              </div>
            </div>
            <div className={"max-w-300"}>
              <div>
                <p
                  className={
                    "text-black text-xl sm:text-8xl font-bold text-right uppercase"
                  }
                >
                  Find your people
                </p>
                <p
                  className={
                    "text-white text-xl sm:text-8xl font-bold text-right uppercase"
                  }
                >
                  Share your story
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Section containerClassName={"bg-white"}>
          <div className={"grid sm:grid-cols-4 gap-4"}>
            <div className={"sm:col-span-2 flex flex-col justify-between"}>
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
                  <Link
                    href={href}
                    target={"_blank"}
                    className={"font-semibold"}
                  >
                    {anchor}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </footer>
    </>
  );
}
