import { ChatBubbleLeftIcon } from "@heroicons/react/20/solid";
import { Post } from "../lib/types";
import { Hanken_Grotesk } from "next/font/google";
import image_dummy from "../../public/images/image_dummy.jpg";
import Image from "next/image";

const hanken_grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

function Thumbnail({ data }: { data: Post }) {
  return (
    <div className="ml-auto mt-6 flex w-[320px] sm:ml-3.5 sm:w-[480px] md:flex-row">
      <div className="relative w-full rounded-sm border border-neutral-700">
        <div className="relative block aspect-[3/2] w-full">
          <a href={data.href} aria-hidden={true}>
            <span className="absolute inset-0 m-0 box-border block h-[initial] w-[initial] overflow-hidden p-0">
              <Image
                src={image_dummy ?? data.image.imageUrl}
                alt={data.image.alt}
                fill={true}
                className="absolute inset-0 m-0 box-border block h-[initial] max-h-full min-h-full w-[initial] min-w-full max-w-full overflow-hidden rounded-sm object-cover p-0"
              />
            </span>
          </a>
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
          aria-hidden={true}
        ></div>
        <div
          className="pointer-events-none absolute bottom-0 h-1/3 w-full bg-gradient-to-t from-black/30 to-transparent"
          aria-hidden={true}
        ></div>
      </div>
    </div>
  );
}

function Content({ data }: { data: Post }) {
  return (
    <div className="relative z-10 -mt-8 mr-6 pr-3 pt-3 sm:ml-auto sm:mr-2.5 sm:w-[440px] sm:px-4 lg:mb-2">
      <h2 className="mb-2 text-3xl font-bold leading-none [text-shadow:_0_0_40px_rgb(0_0_0)] md:text-4xl">
        <a
          href={data.href}
          className="after-absolute shadow-sm after:inset-0 group-hover:shadow-[inset_0px_-20px_0px_0px_#667eea]"
        >
          {data.title}
        </a>
      </h2>
      <p
        className={`text-lg font-light leading-tight sm:text-xl ${hanken_grotesk.className} tracking-[0.01em]`}
      >
        {data.description}
      </p>
      <div className="relative inline-block pt-1 text-xs uppercase tracking-wide">
        <div className="inline-block">
          <a
            href={data.author.href}
            className="mr-2 text-blue-500 hover:shadow-[0px_1px_0px_0px_#667eea]"
          >
            {data.author.name}
          </a>
        </div>
        <div className="inline-block text-neutral-400">
          <time dateTime={data.datetime}>{data.date}</time>
          <span>
            <span className="mx-2">|</span>
            <a
              href={data.href}
              aria-label={data.description}
              className="group/comments hover:text-blue-500"
            >
              <ChatBubbleLeftIcon className="mr-2 inline h-3.5 w-3.5 -translate-y-[0.5px] fill-transparent stroke-neutral-400 group-hover/comments:stroke-blue-500" />
              <span className="text-xs leading-6 tracking-wide">26</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Card({ data }: { data: Post }) {
  return (
    <div className="group static isolate mx-auto w-full max-w-lg cursor-pointer border-b-8 border-neutral-700 bg-neutral-900 pb-16 text-white hover:bg-neutral-700/50 lg:py-5">
      <Thumbnail data={data} />
      <Content data={data} />
    </div>
  );
}
