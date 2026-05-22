import Link from "next/link";
import { sEOTitle } from "@/lib/constants";

export default function PrivacyPage() {
  return (
    <>
      <div className={"max-w-3xl flex flex-col gap-4 mx-auto my-24"}>
        <h1 className={"text-4xl font-semibold text-center mb-6"}>Privacy</h1>
        <p>
          At Bessa, your privacy is a key factor in keeping this space safe and
          affirming. We only collect the basics, such as your username, email,
          and password, along with a few optional details to help personalize
          your experience. Some info helps us improve the app, process payments,
          or keep things running smoothly. We never sell your data, and we only
          share what’s needed with trusted partners. By using Bessa, you’re
          agreeing to these terms and helping us keep this community secure,
          transparent, and full of queerness. We collect the following:
        </p>
        <div className={"flex gap-2"}>
          ⚠️
          <p>Username</p>
        </div>
        <div className={"flex gap-2"}>
          ⚠️
          <p>Email Address</p>
        </div>
        <div className={"flex gap-2"}>
          ⚠️
          <p>Password</p>
        </div>
        <div className={"flex gap-2"}>
          ⚠️
          <p>Age (Optionally)</p>
        </div>
        <div className={"flex gap-2"}>
          ⚠️
          <p>Phone Number (Optionally)</p>
        </div>
        <div className={"flex gap-2"}>
          ⚠️
          <p>GPS Location (Optionally)</p>
        </div>
        <div className={"flex gap-2"}>
          ⚠️
          <p>Camera/Photo Gallery (Optionally)</p>
        </div>
      </div>
      <div className={"max-w-3xl flex flex-col gap-4 mx-auto my-24"}>
        <h2 className={"text-4xl font-medium"}>Deltion</h2>
        <p>
          You can delete your account and all previously mentioned data at any
          time by emailing us at{" "}
          <span className={"underline"}>topher@getbessa.com</span> or by using
          your account settings in the app.
        </p>
        <p>
          Our website address is:{" "}
          <Link href={"/"} title={sEOTitle}>
            https://getbessa.com
          </Link>
        </p>
      </div>
    </>
  );
}
