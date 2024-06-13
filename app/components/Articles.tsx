import { Post } from "../lib/types";

type Props = {
  title: string;
  posts: Post[];
};

export default function Articles({ data }: { data: Props }) {
  return (
    <div>
      <div className="mb-0 mt-6 h-full border-b border-neutral-600 sm:ml-8 sm:mr-4 sm:border-b-0 sm:border-l sm:pb-6">
        <div className="pb-7 pl-7 text-white sm:p-0">
          <h2 className="pb-5 pl-3 text-3xl font-bold text-teal-400 sm:pl-5">
            {data.title}
          </h2>
          <ul className="flex list-disc flex-col flex-wrap leading-none marker:text-teal-400 sm:list-none">
            {data.posts.map((post) => (
              <li key={post.id} className="mb-5 pl-3 sm:pl-5">
                <h3 className="text-xl font-bold text-white">
                  <a
                    href={post.href}
                    className="hover:shadow-[inset_0px_-1px_0px_0px_rgb(45,212,191)]"
                  >
                    {post.title}
                  </a>
                </h3>
                <div className="relative inline-block pt-1 text-xs uppercase tracking-wide">
                  <div className="inline-block">
                    <a
                      href={post.author.href}
                      className="mr-2 text-teal-500 hover:shadow-[0px_1px_0px_0px_#667eea]"
                    >
                      {post.author.name}
                    </a>
                  </div>
                  <div className="inline-block text-neutral-400">
                    <time dateTime={post.datetime}>
                      {post.date.slice(0, -", 2020".length)}
                    </time>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="ml-5 border-b border-teal-500 text-sm uppercase text-teal-500"
          >
            view all
          </a>
        </div>
      </div>
    </div>
  );
}
