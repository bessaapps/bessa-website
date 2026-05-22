import Link from "next/link";
import Stock3 from "@/assets/images/stock/3.jpg";
import Image from "next/image";

export default function DonatePage() {
  return (
    <>
      <div className={"max-w-3xl flex flex-col gap-4 mx-auto my-24"}>
        <h1 className={"text-4xl font-semibold text-center"}>Donate</h1>
        <p className={"font-bold"}>Fuel the Fabulous. Fund the Fam.</p>
        <p>
          Bessa is more than just an app; it’s where your story belongs, a
          sanctuary from the superficial, and a celebration of every gender,
          color, and shape. But real community requires real resources, and
          let’s face it: being this fabulous isn’t free. If you value a space
          that prioritizes meaningful connection, help us keep the lights on and
          the culture thriving. Fuel the fabulous, fund the fam, and donate
          today to keep Bessa loud, proud, and right at home.
        </p>
        <Image
          src={Stock3}
          alt={
            "A person laughing while giving a friend a piggyback ride, wearing a shirt with social justice messages like 'No Homophobia' and 'Yes Equality,' embodying Bessa's commitment to queer activism and joy."
          }
          className={"grayscale"}
        />
      </div>
      <div className={"max-w-3xl flex flex-col gap-4 mx-auto my-24"}>
        <h2 className={"text-4xl font-medium"}>
          This is your chance to turn found family into a home.
        </h2>
        <p>
          Bessa is stripping away the noise to focus on what matters: queer
          content and real connections. But to keep breaking the mold, Bessa
          needs backers who believe that no filters, just us, is a model worth
          fighting for. Stand with us, put your power behind the platform, and
          ensure that your story always has a place to be told.
        </p>
        <div className={"flex gap-4"}>
          <Link
            href={"https://buymeacoffee.com/getbessa"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className={"btn"}
          >
            Support Bessa
          </Link>
          <Link
            href={"https://buymeacoffee.com/getbessa/membership"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className={"btn"}
          >
            Become a Member
          </Link>
        </div>
      </div>
    </>
  );
}
