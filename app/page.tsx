import { androidLink, iOSLink } from "@/lib/constants";
import Stock1 from "@/assets/images/stock/1.jpg";
import Stock2 from "@/assets/images/stock/2.jpg";
import Stock3 from "@/assets/images/stock/3.jpg";
import Reviewer from "@/assets/images/reviewer.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className={"max-w-lg mx-auto flex flex-col gap-4 my-24"}>
        <h1 className={"text-4xl font-semibold text-center"}>
          An LGBTQ+ Social Media App, Reimagined
        </h1>
        <p className={"text-center"}>
          Bessa is an inclusive, LGBTQ+ social media app designed for you to
          share your story, create queer culture, build real connections.
        </p>
        <div className={"flex justify-center gap-4"}>
          <a
            href={iOSLink}
            target={"_blank"}
            className={"btn btn-primary btn-lg"}
          >
            iOS
          </a>
          <a
            href={androidLink}
            target={"_blank"}
            className={"btn btn-primary btn-lg"}
          >
            Android
          </a>
        </div>
      </div>
      <div className={"max-w-6xl mx-auto flex flex-col gap-4 my-24"}>
        <div className={"aspect-[1.4]"}>
          <Image
            src={Stock1}
            alt={
              "A person in an expressive dance pose wearing a black lace bodysuit and platform boots, performing on a stone floor during a queer creative showcase."
            }
            loading={"eager"}
            className={"object-cover"}
          />
        </div>
      </div>
      <div className={"max-w-6xl mx-auto gap-4 my-24"}>
        <div className={"grid grid-cols-1 sm:grid-cols-2 items-center gap-4"}>
          <div className={"relative aspect-[1.4]"}>
            <Image
              src={Stock2}
              alt={
                "Two Black men laughing and sharing content on a smartphone outdoors, representing the Bessa community's focus on queer connection and found family."
              }
              className={"object-cover grayscale"}
              fill
            />
          </div>
          <div className={"flex flex-col gap-4"}>
            <h2 className={"text-4xl font-medium"}>
              Loud, Proud, and Right at Home
            </h2>
            <p>
              Bessa is a queer LGBTQ+ social media app built to amplify your
              voice and celebrate the art of being us. We are ditching the
              superficial mindset to focus on user-generated content and
              meaningful conversations, helping you create queer culture and
              foster real connections. Whether you are sharing your latest
              passion project or advocating for the community, you will find
              your people right here.
            </p>
            <div className={"flex gap-2"}>
              <a href={iOSLink} target={"_blank"} className={"btn btn-primary"}>
                iOS
              </a>
              <a
                href={androidLink}
                target={"_blank"}
                className={"btn btn-primary"}
              >
                Android
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={"bg-base-content"}>
        <div
          className={
            "max-w-3xl mx-auto flex flex-col items-center gap-4 py-24 my-24"
          }
        >
          <blockquote
            cite={""}
            className={"text-white text-5xl font-serif italic text-center mb-8"}
          >
            &ldquo;A fun, gay social experience that I wish we had a long time
            ago!&rdquo;
          </blockquote>
          <div className={"avatar"}>
            <div className="w-24 rounded-full">
              <Image src={Reviewer} alt={"Tee Kay"} />
            </div>
          </div>
          <p className={"text-white font-bold"}>Tee Kay</p>
        </div>
      </div>
      <div className={"max-w-6xl mx-auto flex gap-16"}>
        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4"}>
          <div>
            <h2 className={"text-4xl font-medium mb-2"}>
              Your Feed, Your Family
            </h2>
            <p>
              Welcome to the heart of Bessa, an LGBTQ+ social media app where
              creativity meets community. By breaking away from a superficial
              mindset, the Bessa social feed delivers a vibrant timeline that is
              queer and deeply authentic.
            </p>
          </div>
          <div>
            <h2 className={"text-4xl font-medium mb-2"}>
              No Filters. Just Us.
            </h2>
            <p>
              Tired of scrolling through platforms that reduce you to a basic
              checklist of preferences? We are too, honey! That is why the
              member directory in Bessa, your new favorite LGBTQ+ social media
              app, offers a completely fresh take on how we display user
              profiles.
            </p>
          </div>
          <div>
            <h2 className={"text-4xl font-medium mb-2"}>
              Slide Into Something Meaningful
            </h2>
            <p>
              Whether you are hyping up a local drag queen&apos;s latest
              performance, coordinating a coffee date with a new creative
              collaborator, or just sharing some late-night tea, the direct
              messaging feature in Bessa is where the real magic happens.
            </p>
          </div>
          <div>
            <h2 className={"text-4xl font-medium mb-2"}>
              Your Story Belongs Here
            </h2>
            <p>
              Bessa is officially breaking away from a superficial mindset. The
              member profiles are designed to celebrate the art of being us,
              giving you a digital canvas that is as vibrant and multifaceted as
              you are!
            </p>
          </div>
        </div>
      </div>
      <div className={"bg-secondary"}>
        <div className={"max-w-6xl mx-auto gap-4 py-24 my-24"}>
          <div className={"grid grid-cols-2 gap-4"}>
            <div className={"flex flex-col gap-4"}>
              <h2
                className={"text-white text-9xl font-medium"}
                style={{ writingMode: "sideways-lr" }}
              >
                SUPPORT
              </h2>
              <p className={"text-white"}>
                Bessa is where creativity meets community. Your contribution
                ensures we can continue offering a fresh take on queer
                connection.
              </p>
              <div>
                <a
                  href={"https://buymeacoffee.com/getbessa"}
                  target={"_blank"}
                  className={"btn btn-lg"}
                >
                  Donate
                </a>
              </div>
            </div>
            <Image
              src={Stock3}
              alt={
                "A person laughing while giving a friend a piggyback ride, wearing a shirt with social justice messages like 'No Homophobia' and 'Yes Equality,' embodying Bessa's commitment to queer activism and joy."
              }
              className={"grayscale"}
            />
          </div>
        </div>
      </div>
      {/*todo:*/}
      {/*<div className={"max-w-6xl mx-auto"}>*/}
      {/*  <h2 className={"text-4xl font-medium"}>Read More</h2>*/}
      {/*  <div className={"flex items-center justify-between border-t"}>*/}
      {/*    <Link href={"/"}>*/}
      {/*      <p className={"text-lg font-medium"}>*/}
      {/*        No Cover, All Community: Interview with QSC*/}
      {/*      </p>*/}
      {/*    </Link>*/}
      {/*    <p>*/}
      {/*      <time dateTime={"2026-12-25"}>Dec 25, 2026</time>&nbsp;&mdash; in*/}
      {/*      Tens Across the Board*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </main>
  );
}
