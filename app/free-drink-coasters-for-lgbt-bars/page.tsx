import Image from "next/image";
import Coasters from "@/assets/images/coasters.jpg";
import Section from "@/components/Section";

export default function FreeDrinkCoastersForLgbtBarsPage() {
  return (
    <>
      <Section>
        <h1
          className={
            "text-6xl sm:text-7xl text-center uppercase text-transparent bg-clip-text bg-linear-to-b from-primary to-accent mb-16"
          }
        >
          Spice Up Your Bar Tops with Free Drink Coasters for LGBT Bars
        </h1>
        <div className={"flex flex-col gap-4"}>
          <p>
            Hey there, fabulous venue owners and managers! At Bessa, we know
            that the absolute best nights out usually start with a fierce look,
            a strong cocktail, and an even stronger sense of community. As a
            creative hub for queer content and real connections, we are all
            about celebrating our diverse, found family. That&apos;s exactly why
            we are so thrilled to offer free drink coasters for LGBTQ bars! We
            want to help you keep your bar tops spotless while serving up a
            little extra flair for your patrons.
          </p>
          <p>
            Let&apos;s be real: your patrons deserve an atmosphere that is loud,
            proud, and right at home. Our custom-designed coasters aren&apos;t
            just practical pieces of cardboard; they are cheeky, fun
            conversation starters that reflect the beautiful diversity of our
            community. These coasters bring the playful Bessa vibe straight to
            your tables.
          </p>
          <Image
            src={Coasters}
            alt={
              'Free drink coasters for LGBT bars featuring a colorful illustration of two queer men smiling, a scannable QR code, and the text "Your story belongs here" on a wooden table.'
            }
          />
          <h2 className={"text-secondary text-3xl font-medium sm:w-1/2 mt-4"}>
            Get Your Free Drink Coasters for LGBT Bars
          </h2>
          <p>
            Who doesn&apos;t love a good perk? As a massive thank you for
            providing inclusive spaces for people of all genders, sexual
            orientations, shapes, and sizes, we are offering these free coasters
            for gay bars with absolutely zero strings attached. Consider it our
            way of buying the house a round. If you&apos;ve been hunting for the
            absolute best free giveaways for gay bars, your search ends right
            here.
          </p>
          <p>
            Ready to upgrade your bar&apos;s aesthetic? Fill out the quick order
            form below with your venue&apos;s details, and we&apos;ll ship a
            batch of Bessa magic right to your door. Let&apos;s make sure that
            wherever our community gathers, it&apos;s a place of creativity!
          </p>
          <div>
            <a
              href={"https://forms.gle/dGhP1DwsDr252J2F7"}
              target={"_blank"}
              className={"btn btn-primary btn-lg"}
            >
              Get Yours Now for FREE
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
