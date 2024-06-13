type Header = {
  title: string;
  updated: string;
  featuredStory: {
    href: string;
    title: string;
  };
};

export default function StreamHeader({ data }: { data: Header }) {
  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="relative mb-6 pl-10 lg:pl-12">
        <div>
          <h2 className="mb-2 text-base text-white">{data.title}</h2>
          <div className="absolute left-2 top-1 h-3 w-3 rounded-full bg-neutral-600 md:left-1.5 lg:left-4"></div>
        </div>
        <p className="mb-1 min-h-8 text-xs uppercase leading-snug tracking-widest">
          <span className="block text-neutral-400">
            Last refresh {data.updated}
          </span>
          <span className="text-teal-400 hover:shadow-[0px_1px_0px_0px_rgb(45,212,191)]">
            <a href={data.featuredStory.href}>{data.featuredStory.title}</a>
          </span>
        </p>
      </div>
      <div>border</div>
    </div>
  );
}
