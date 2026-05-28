import Link from "next/link";
import { androidLink, iOSLink } from "@/lib/constants";

export default function FAQPage() {
  return (
    <>
      <div className={"max-w-3xl flex flex-col gap-4 px-4 mx-auto my-24"}>
        <h1 className={"text-4xl font-semibold text-center mb-6"}>
          Frequently Asked Questions
        </h1>
        <p>
          Curious about Bessa? Pull up a chair, we’ve got you covered. Our FAQ
          has all the answers you need so you can sip, scroll, and join the
          party fully informed. There’s no messy group chat required.
        </p>
        <h2 className={"text-secondary text-3xl font-medium sm:w-1/2 mt-4"}>
          What is Bessa?
        </h2>
        <p>
          Bessa is a gay social media app and LGBTQ social networking app made
          by and for the LGBTQ community. It’s a place to post and share LGBTQ
          content, connect with local LGBTQ people, and build friendships that
          go beyond likes or dating. Unlike other platforms, Bessa is an
          inclusive social platform focused on authentic connection, queer
          community, and shared experiences. Whether you’re looking for events,
          friends, or just a space where you feel seen, Bessa helps you find
          your people and stay connected.
        </p>
        <h2 className={"text-secondary text-3xl font-medium sm:w-1/2 mt-4"}>
          Who can join Bessa?
        </h2>
        <p>
          Bessa is designed for everyone under the LGBTQ umbrella. While allies
          are welcome to support the project, the app itself is built to serve
          LGBTQ users who want space to connect, share experiences, and find
          each other outside of hookup culture.
        </p>
        <h2 className={"text-secondary text-3xl font-medium sm:w-1/2 mt-4"}>
          How is Bessa different from Grindr, HER, and Taimi?
        </h2>
        <p>
          Unlike dating apps, Bessa is a non-dating LGBTQ app. It’s a Grindr
          alternative for LGBTQ people who are looking to build friendships,
          explore queer culture, and engage with others through shared content
          and events. If you’re tired of swiping and want an app like HER or
          Taimi without hookup culture, Bessa offers a refreshing alternative.
        </p>
        <h2 className={"text-secondary text-3xl font-medium sm:w-1/2 mt-4"}>
          Is Bessa available for iOS or Android?
        </h2>
        <p>
          Yes! Bessa is available on both iOS and Android. Just search for it in
          the{" "}
          <Link
            href={iOSLink}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className={"underline"}
          >
            App Store
          </Link>{" "}
          or{" "}
          <Link
            href={androidLink}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className={"underline"}
          >
            Google Play
          </Link>{" "}
          to start connecting. The app works across devices so you can keep up
          with your community anywhere.
        </p>
        <h2 className={"text-secondary text-3xl font-medium sm:w-1/2 mt-4"}>
          How do I support Bessa?
        </h2>
        <p>
          Bessa is an independent LGBTQ social networking app, and community
          support helps it grow. You can{" "}
          <Link
            href={"https://getbessa.com/donate"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className={"underline"}
          >
            donate or become a sponsor
          </Link>{" "}
          to help keep the app running, fund new features, and support queer
          connection. Sponsorships include perks like a custom badge and public
          recognition.
        </p>
      </div>
    </>
  );
}
