import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { Post } from "../lib/types";
import image_dummy from "../../public/images/image_dummy.jpg";
import Image from "next/image";
import { Hanken_Grotesk } from "next/font/google";

const hanken_grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

function Media({ data }: { data: Post }) {
  return (
    <div className="mt-6 flex w-full sm:w-2/3 md:flex-row">
      <div className="relative h-fit w-full rounded-sm border border-neutral-700">
        <div className="relative block aspect-square w-full">
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
      <div className="z-10 -ml-8 mt-2.5 h-20 w-16 rounded-sm bg-teal-400/70 p-2 text-center text-black">
        <p className="pb-1 text-3xl font-semibold">8</p>
        <p className="text-[11px] font-light leading-3 tracking-widest">
          Our Score
        </p>
      </div>
    </div>
  );
}

function Content({ data }: { data: Post }) {
  return (
    <div className="relative mt-8 pt-3 sm:mt-0 sm:flex sm:w-1/3 sm:flex-col sm:justify-center sm:pl-5">
      <h2 className="mb-8 text-3xl font-bold leading-none group-hover:[text-shadow:_0_0_40px_rgb(0_0_0)] sm:text-4xl">
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
          <time dateTime={data.datetime}>
            {data.date.slice(0, -", 2020".length)}
          </time>
          <span>
            <span className="mx-2">|</span>
            <a
              href={data.href}
              aria-label={data.description}
              className="group/comments hover:text-blue-500"
            >
              <ChatBubbleLeftIcon className="mr-2 inline h-3.5 w-3.5 -translate-y-[0.5px]" />
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
    <div className="w-full max-w-lg">
      <div className="group relative w-full border-b border-neutral-600 pb-6 text-white sm:flex">
        <Media data={data} />
        <Content data={data} />
      </div>
    </div>
  );
}
