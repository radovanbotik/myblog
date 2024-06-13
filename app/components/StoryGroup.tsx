import { ChatBubbleLeftIcon } from "@heroicons/react/20/solid";
import { Post } from "../lib/types";
import { Squada_One, Big_Shoulders_Text, Odibee_Sans } from "next/font/google";

const odibee_sans = Odibee_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

type Props = {
  title: string;
  posts: Post[];
};

export default function StoryGroup({ data }: { data: Props }) {
  // add sticky lg:sticky
  return (
    <div className="ml:auto relative mb-10 ml-[65px] mt-20 min-h-[475px] w-80 max-w-lg rounded-md bg-teal-400 p-5 text-black sm:w-[410px] lg:top-10 lg:ml-0 lg:min-h-[600px] lg:overflow-hidden lg:rounded-3xl">
      <h2
        className={`${odibee_sans.className} absolute left-[-86px] top-[-25px] -z-10 flex rotate-180 text-[96px] tracking-tighter text-white lg:hidden`}
        style={{ writingMode: "vertical-rl", textOrientation: "sideways" }}
      >
        {data.title}
      </h2>
      <div className="mb-5 flex justify-between text-[10px] uppercase tracking-widest">
        <span className="font-medium">{data.title}</span>
      </div>
      <div
        className={`${odibee_sans.className} pointer-events-none absolute bottom-[-10px] right-0 mr-[-70px] hidden h-full rotate-180 text-[160px] capitalize tracking-tighter text-teal-900/30 lg:flex`}
        style={{ writingMode: "vertical-rl", textOrientation: "sideways" }}
      >
        {data.title}
      </div>
      <ol className="w-full [counter-reset:li] lg:mt-5 lg:w-[320px]">
        {data.posts.map((post) => (
          <li
            key={post.id}
            className="mb-5 border-b border-b-blue-500 pb-5 pl-7 before:absolute before:-left-[4px] before:ml-3.5 before:grid before:h-6 before:w-6 before:place-content-center before:rounded-full before:bg-blue-600 before:text-center before:text-sm before:text-teal-400 before:content-[counter(li)] before:[counter-increment:li] last:mb-0 last:border-b-0 last:pb-0"
          >
            <a href={post.href} className="hover:text-blue-500">
              <h3 className="mb-1 text-lg font-medium leading-tight tracking-wide">
                {post.title}
              </h3>
            </a>
            <p className="inline-block text-xs uppercase text-neutral-600">
              <span className="mr-2">{post.author.name}</span>
              <time dateTime={post.datetime}>{post.date}</time>
              <span>
                <span className="mx-2">|</span>
                <a
                  href={post.href}
                  aria-label={post.description}
                  className="group/comments hover:text-blue-500"
                >
                  <ChatBubbleLeftIcon className="mr-2 inline h-3.5 w-3.5 -translate-y-[0.5px] fill-transparent stroke-neutral-600 group-hover/comments:stroke-blue-500" />
                  <span className="text-xs leading-6 tracking-wide">26</span>
                </a>
              </span>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
