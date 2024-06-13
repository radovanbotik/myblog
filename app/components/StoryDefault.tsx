import { ChatBubbleLeftIcon } from "@heroicons/react/20/solid";
import { Post } from "../lib/types";
import image_dummy from "../../public/images/image_dummy.jpg";
import Image from "next/image";

function Content({ data }: { data: Post }) {
  return (
    <div className="flex w-full items-center">
      <span
        className="mr-5 hidden rotate-180 border-l border-blue-500 pl-1 text-xs uppercase tracking-wide text-neutral-400 md:block"
        style={{ writingMode: "vertical-lr", textOrientation: "sideways" }}
      >
        {data.category.title}
      </span>
      <div className="max-w-64 sm:max-w-80">
        <span className="mb-1.5 block w-fit border-b border-blue-500 text-xs tracking-wide text-neutral-400 md:hidden">
          {data.category.title}
        </span>
        <h2 className="text-xl font-bold md:text-2xl">
          <a
            href={data.href}
            className="after-absolute after:inset-0 group-hover:shadow-[0px_1px_0px_0px_#667eea]"
          >
            {data.title}
          </a>
        </h2>
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
    </div>
  );
}

function Thumbnail({ data }: { data: Post }) {
  return (
    <div className="relative ml-2.5 h-full w-[75px] rounded border border-neutral-300 sm:w-[100px]">
      <div className="block md:hidden">
        <div className="relative aspect-square w-full">
          <a
            href={data.href}
            aria-hidden={true}
            className="block h-full w-full"
          >
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
      </div>
      <div className="hidden md:block">
        <div className="relative aspect-square w-full">
          <a
            href={data.href}
            aria-hidden={true}
            className="block h-full w-full"
          >
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
      </div>
    </div>
  );
}

export default function Card({ data }: { data: Post }) {
  return (
    <div className="group relative mx-auto flex w-full max-w-lg items-center justify-between border-b border-neutral-700 py-4 text-white last-of-type:border-b-0 hover:cursor-pointer hover:bg-neutral-700/50 md:px-2 lg:py-8">
      <Content data={data} />
      <Thumbnail data={data} />
    </div>
  );
}
