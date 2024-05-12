import DeepLinkPost from "@/app/deep-links/posts/post";

export async function generateMetadata({ searchParams }) {
  return {
    title: `@${searchParams?.username}`,
    openGraph: {
      title: searchParams?.title
    }
  };
}

export default function DeepLink({ searchParams }) {
  return <DeepLinkPost searchParams={searchParams} />;
}
