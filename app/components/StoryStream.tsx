import {
  ChatBubbleOvalLeftIcon,
  ChatBubbleLeftRightIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";
import { Post } from "../lib/types";
import { Hanken_Grotesk } from "next/font/google";
import image_dummy from "../../public/images/image_dummy.jpg";
import Image from "next/image";

const hanken_grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

function Navigation({ data }: { data: Post }) {
  return (
    <div className="relative flex w-9 min-w-9 flex-col md:-ml-[3px] md:items-start">
      <div className="absolute h-6 w-6 rounded-full bg-blue-500"></div>
      <div className="z-10 flex h-6 w-6 justify-center px-1 py-1.5 text-center text-xs font-bold uppercase leading-none">
        R
      </div>
      <div className="group relative mt-3 flex w-7 justify-center text-neutral-600 hover:text-white">
        <a href={data.href} aria-label={data.title}>
          <ChatBubbleOvalLeftIcon className="h-6 w-6 fill-transparent stroke-neutral-400 group-hover:stroke-white" />
        </a>
      </div>
    </div>
  );
}

const externalSource = {
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore fugiat voluptatum officia enim sunt, harum dolorum, necessitatibus voluptatem rerum optio?<a href='#'>Incidunt inventore nostrum provident est fugiat quos</a>, reprehenderit dolore ipsam enim dicta nemo illo officia veniam nihil. Cumque veritatis, est eius voluptates nisi illum esse expedita, a ea illo quaerat reprehenderit architecto asperiores deserunt cupiditate sequi minus minima? Voluptate rem voluptatibus neque est architecto ab non maxime nesciunt ducimus cumque. Amet modi magni laboriosam neque minus labore laudantium tempore soluta ullam maiores perspiciatis.",
  title: "This is title of article from external source. | ExternalSource",
  source: "externalsource",
  image: {
    imageUrl: null,
    alt: "this is image.",
  },
};

function Content({ data }: { data: Post }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <div className="flex flex-row md:justify-start">
        <div className="leading-2 flex flex-row flex-wrap items-center pb-2.5 text-xs uppercase tracking-widest text-neutral-400 md:pb-1.5">
          <a
            href={data.author.href}
            className="mr-2 font-bold hover:shadow-[0px_1px_0px_0px_rgb(163,163,163)]"
          >
            {data.author.name}
          </a>
          <a
            href={data.author.href}
            className="mr-2 font-bold hover:shadow-[0px_1px_0px_0px_rgb(163,163,163)]"
          >
            <time
              dateTime={data.datetime}
              className="flex items-center font-normal"
            >
              {data.date}
            </time>
          </a>
        </div>
        <div className="relative flex flex-row items-start">
          <button aria-label="Copy link">
            <LinkIcon className="h-4 w-4 text-neutral-400 hover:text-white" />
          </button>
        </div>
      </div>
      <div className="">
        <span className="inline pr-1 text-lg font-bold">{data.title}</span>
        <p
          dangerouslySetInnerHTML={{ __html: externalSource.content }}
          className={`inline ${hanken_grotesk.className} text-neutral-300 [&_a:hover]:text-blue-500 [&_a]:shadow-[inset_0_-1px_0_0_rgba(115,115,115,1),inset_0_-2px_0_0_rgba(163,163,163,0.4)]`}
        ></p>
      </div>
      <div className="pt-3">
        <div className="relative text-neutral-300">
          <a
            href="#"
            className="text-base shadow-[inset_0_-1px_0_0_rgba(59,130,246,1),inset_0_-2px_0_0_rgba(59,130,246,0.4)] hover:text-blue-500"
            target="_blank"
          >
            {externalSource.title}
          </a>
          <p className="pointer-events-none mt-2.5 text-xs font-bold uppercase tracking-widest">
            [{externalSource.source}]
          </p>
        </div>
        {/* Embedded image from social media */}
        <div className="relative mb-0 min-h-[240px] w-full overflow-x-hidden md:max-w-[460px]">
          <div className="mx-2.5 flex w-full max-w-[550px]">
            <div className="static block h-[618px] w-[446px] flex-grow"></div>
            <Image
              src={externalSource.image.imageUrl ?? image_dummy}
              alt={externalSource.image.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Card({ data }: { data: Post }) {
  return (
    <div className="relative mx-auto flex w-full max-w-lg flex-row border-b border-neutral-700 bg-neutral-900 px-0 py-4 text-white last-of-type:border-b-0 hover:cursor-pointer hover:bg-neutral-700/50 md:px-2.5">
      <Navigation data={data} />
      <Content data={data} />
    </div>
  );
}
