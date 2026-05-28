import Link from "next/link";

export default function DonatePage() {
  return (
    <>
      <div className={"max-w-3xl flex flex-col gap-4 px-4 mx-auto my-24"}>
        <h1 className={"text-4xl font-semibold text-center mb-6"}>Donate</h1>
        <p>
          Hey icons! Welcome to Bessa, the LGBTQ+ social media app where your
          found family is found right here. We are a queer creative hub that
          provides a vibrant, inclusive space for all genders, colors, shapes,
          sizes, and abilities. This is exactly where creativity meets
          community, giving you the ultimate platform to share everything from
          personal projects to vital advocacy, entirely breaking away from the
          superficial mindset of other apps. By dropping a tip at our Buy Me a
          Coffee, you directly support a social feed that thrives on your
          brilliant user-generated content and keeps our community fiercely
          connected.
        </p>
        <h2 className={"text-secondary text-3xl font-medium sm:w-1/2 mt-4"}>
          Keep The Energy Loud and Proud
        </h2>
        <p>
          Your generous tips and memberships give us the boost we need to
          constantly explore new approaches and keep innovating our space.
          Whether you choose a one-time donation or snag one of our fabulous
          membership tiers at Bessa Memberships, you are helping us foster deep,
          meaningful connections through direct messaging and fresh member
          profiles. Head over to show some love and keep our platform loud,
          proud, and right at home.
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
