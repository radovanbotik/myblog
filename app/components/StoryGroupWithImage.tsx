// import { ChatBubbleLeftIcon } from "@heroicons/react/20/solid";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { Post } from "../lib/types";
import { Squada_One, Big_Shoulders_Text, Odibee_Sans } from "next/font/google";
import image_dummy from "../../public/images/image_dummy.jpg";
import Image from "next/image";

const odibee_sans = Odibee_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

type Props = {
  title: string;
  posts: Post[];
};

export default function StoryGroupWithImage({ data }: { data: Props }) {
  return (
    <div className="ml:auto relative mb-10 ml-[65px] mt-20 min-h-[475px] w-80 max-w-lg rounded-md bg-teal-400 p-5 text-black sm:w-[410px] lg:sticky lg:top-10 lg:ml-0 lg:min-h-[600px] lg:overflow-hidden lg:rounded-3xl">
      <h2
        className={`${odibee_sans.className} pointer-events-none absolute left-[-86px] top-[-25px] -z-10 flex rotate-180 text-[96px] tracking-tighter text-white lg:hidden`}
        style={{ writingMode: "vertical-rl", textOrientation: "sideways" }}
      >
        {data.title}
      </h2>
      <div className="mb-5 flex justify-between text-[10px] uppercase tracking-widest">
        <span className="font-medium">{data.title}</span>
        <a
          href="#"
          className="shadow-[inset_0_-1px_0_0_rgba(59,130,246,1),inset_0_-2px_0_0_rgba(59,130,246,0.4)] hover:text-blue-500"
        >
          See all Stories
        </a>
      </div>
      <div
        className={`${odibee_sans.className} pointer-events-none absolute bottom-[-10px] right-0 mr-[-70px] hidden h-full rotate-180 text-[160px] capitalize tracking-tighter text-teal-900/30 lg:flex`}
        style={{ writingMode: "vertical-rl", textOrientation: "sideways" }}
      >
        {data.title}
      </div>
      <ul className="ml-5 lg:ml-11">
        <li className="lg:-ml-2.5">
          <div className="mb-2 border-l border-blue-500 pl-2.5">
            <a href={data.posts[0].href}>
              <h3
                className={`${odibee_sans.className} mb-2.5 text-4xl font-extrabold !leading-[0.8] tracking-tight lg:text-6xl`}
              >
                {data.posts[0].title}
              </h3>
            </a>
            <p className="text-xs uppercase tracking-widest">
              <a href={data.posts[0].author.href}>
                <span className="mr-2 text-neutral-600">
                  {data.posts[0].author.name}
                </span>
              </a>
              <span className="font-light text-neutral-600">
                {data.posts[0].date.slice(0, -", 2020".length)}
              </span>
              <span>
                <span className="mx-2">|</span>
                <span className="text-right font-light">
                  <a
                    href={data.posts[0].href}
                    className="group-comments hover:text-blue-500"
                  >
                    <span>
                      <ChatBubbleLeftIcon className="mr-2 inline h-3.5 w-3.5 -translate-y-[0.5px] text-neutral-600" />
                      <span className="text-xs leading-6 tracking-wide text-neutral-600">
                        26
                      </span>
                    </span>
                    <span></span>
                  </a>
                </span>
              </span>
            </p>
          </div>
          <a
            href={data.posts[0].href}
            // className="mb-2 border border-blue-500 pl-2.5"
          >
            <div className="relative h-[182px] w-[240px] md:h-[244px] md:w-[250px] lg:-ml-[45px] lg:h-[235px] lg:w-[310px]">
              <span className="absolute inset-0 m-0 box-border block h-[initial] w-[initial] overflow-hidden p-0">
                <Image
                  src={image_dummy ?? data.posts[0].image.imageUrl}
                  alt={data.posts[0].image.alt}
                  fill={true}
                  className="absolute inset-0 m-0 box-border block h-[initial] max-h-full min-h-full w-[initial] min-w-full max-w-full overflow-hidden rounded-sm object-cover p-0"
                />
              </span>
            </div>
          </a>
        </li>
        <li className="last:border:0 md:w[calc(100%-20px)] lg:last-mb-2.5 mb-2.5 w-[240px] border-b border-blue-500 pb-2.5 before:absolute before:left-5 before:flex before:h-4 before:items-center before:text-xl before:text-blue-500 before:content-['•'] last:mb-0 last:pb-0 lg:w-[286px] lg:before:pl-[7px]">
          <a href={data.posts[2].href} className="hover:text-blue-500">
            <h3 className="mb-1 font-medium leading-[1.1] tracking-widest">
              {data.posts[2].title}
            </h3>
          </a>
          <p className="text-xs uppercase tracking-widest">
            <a href={data.posts[2].author.href}>
              <span className="mr-2 text-neutral-600">
                {data.posts[2].author.name}
              </span>
            </a>
            <span className="font-light text-neutral-600">
              {data.posts[2].date.slice(0, -", 2020".length)}
            </span>
            <span>
              <span className="mx-2">|</span>
              <span className="text-right font-light">
                <a
                  href={data.posts[2].href}
                  className="group-comments hover:text-blue-500"
                >
                  <span>
                    <ChatBubbleLeftIcon className="mr-2 inline h-3.5 w-3.5 -translate-y-[0.5px] text-neutral-600" />
                    <span className="text-xs leading-6 tracking-wide text-neutral-600">
                      26
                    </span>
                  </span>
                  <span></span>
                </a>
              </span>
            </span>
          </p>
        </li>
        <li className="last:border:0 md:w[calc(100%-20px)] lg:last-mb-2.5 mb-2.5 w-[240px] border-b border-blue-500 pb-2.5 before:absolute before:left-5 before:flex before:h-4 before:items-center before:text-xl before:text-blue-500 before:content-['•'] last:mb-0 last:pb-0 lg:w-[286px] lg:before:pl-[7px]">
          <a href={data.posts[2].href} className="hover:text-blue-500">
            <h3 className="mb-1 font-medium leading-[1.1] tracking-widest">
              {data.posts[2].title}
            </h3>
          </a>
          <p className="text-xs uppercase tracking-widest">
            <a href={data.posts[2].author.href}>
              <span className="mr-2 text-neutral-600">
                {data.posts[2].author.name}
              </span>
            </a>
            <span className="font-light text-neutral-600">
              {data.posts[2].date.slice(0, -", 2020".length)}
            </span>
            <span>
              <span className="mx-2">|</span>
              <span className="text-right font-light">
                <a
                  href={data.posts[2].href}
                  className="group-comments hover:text-blue-500"
                >
                  <span>
                    <ChatBubbleLeftIcon className="mr-2 inline h-3.5 w-3.5 -translate-y-[0.5px] text-neutral-600" />
                    <span className="text-xs leading-6 tracking-wide text-neutral-600">
                      26
                    </span>
                  </span>
                  <span></span>
                </a>
              </span>
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
}
