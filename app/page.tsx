import { androidLink, iOSLink } from "@/lib/constants";
import Stock1 from "@/assets/images/stock/1.jpg";
import Stock2 from "@/assets/images/stock/2.jpg";
import Reviewer from "@/assets/images/reviewer.jpg";
import Image from "next/image";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main>
      <Section>
        <div className={"flex flex-col gap-4 mx-auto"}>
          <h1
            className={
              "text-6xl sm:text-7xl text-center uppercase text-transparent bg-clip-text bg-linear-to-b from-primary to-accent"
            }
          >
            LGBTQ Social Media, Reimagined
          </h1>
          <div className={"max-w-lg mx-auto"}>
            <p className={"text-center"}>
              Bessa is an inclusive online creative community of all genders,
              sexual orientations, colors, shapes, sizes, and abilities.
            </p>
          </div>
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
      </Section>
      <Section>
        <div className={"relative aspect-[1.4]"}>
          <Image
            src={Stock1}
            alt={
              "A person in an expressive dance pose wearing a black lace bodysuit and platform boots, performing on a stone floor during a queer creative showcase."
            }
            loading={"eager"}
            className={"object-cover"}
            fill
          />
        </div>
      </Section>
      <Section>
        <div className={"grid grid-cols-1 sm:grid-cols-2 items-center gap-4"}>
          <div className={"relative aspect-[1.4]"}>
            <Image
              src={Stock2}
              alt={
                "Two Black men laughing and sharing content on a smartphone outdoors, representing the Bessa community's focus on queer connection and found family."
              }
              className={"object-cover grayscale"}
              fill
              sizes={"(max-width: 639px) 100vw, 488px"}
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
      </Section>
      <Section containerClassName={"bg-base-content"}>
        <div className={"max-w-3xl flex flex-col items-center gap-4 mx-auto"}>
          <blockquote
            cite={""}
            className={
              "text-white text-4xl sm:text-5xl font-serif italic text-center mb-8"
            }
          >
            &ldquo;A fun, gay social experience that I wish we had a long time
            ago!&rdquo;
          </blockquote>
          <div className={"avatar"}>
            <div className={"w-24 rounded-full"}>
              <Image src={Reviewer} alt={"Tee Kay"} />
            </div>
          </div>
          <p className={"text-white font-bold"}>Tee Kay</p>
        </div>
      </Section>
      <Section>
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
      </Section>
    </main>
  );
}
