import Image from "next/image";
import image_dummy from "../../public/images/image_dummy.jpg";
import { Post } from "../lib/types";
import {
  Squada_One,
  Big_Shoulders_Text,
  Odibee_Sans,
  Hanken_Grotesk,
} from "next/font/google";

const odibee_sans = Odibee_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const hanken_grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

function CoverImage({ data }: { data: Post }) {
  return (
    <div className="relative ml-10 md:ml-0 lg:ml-5 lg:mr-16">
      <div className="relative block aspect-[5/4] w-full">
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
  );
}

function Content({ data }: { data: Post }) {
  return (
    <div className="relative -mt-5 border-b border-neutral-400 pb-5 sm:-mt-10 md:pl-20 lg:border-0 lg:pl-40">
      <h2
        className={`${odibee_sans.className} mb-2 text-6xl font-bold !leading-[0.8] tracking-tighter text-white [text-shadow:_0_0_40px_rgb(0_0_0)] md:text-8xl`}
      >
        <a
          href={data.href}
          className="after-absolute shadow-sm after:inset-0 group-hover:shadow-[inset_0px_-40px_0px_0px_#667eea]"
        >
          {data.title}
        </a>
      </h2>
      <p
        className={`${hanken_grotesk.className} !md:leading-[1.1] mb-1.5 text-xl text-neutral-200 md:text-2xl`}
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
        </div>
      </div>
    </div>
  );
}

export default function MainStory({ data }: { data: Post }) {
  //uncomment p to display logo
  return (
    <div className="w-full lg:w-[710px] lg:pt-40">
      <div className="group mb-5 pt-7 md:mb-12 lg:min-h-[750px] lg:pr-10">
        {/* <p
          className="pointer-events-none absolute left-12 z-10 rotate-180 text-5xl text-white md:left-0 md:text-6xl lg:left-6 lg:top-48 lg:text-7xl"
          style={{ writingMode: "vertical-lr", textOrientation: "sideways" }}
        >
          This is logo
        </p> */}
        <CoverImage data={data} />
        <Content data={data} />
      </div>
    </div>
  );
}
