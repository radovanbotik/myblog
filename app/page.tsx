import StoryDefault from "./components/StoryDefault";
import StoryBig from "./components/StoryBig";
import StoryStream from "./components/StoryStream";
import StoryGroup from "./components/StoryGroup";
import StoryGroupWithImage from "./components/StoryGroupWithImage";
import MainStory from "./components/MainStory";
import StreamHeader from "./components/StreamHeader";
import { Post } from "./lib/types";
import SectionDefaultStory from "./components/SectionDefaultStory";
import ReviewDefault from "./components/ReviewDefault";
import ReviewTop from "./components/ReviewTop";
import Articles from "./components/Articles";
import SubscribeToNewsletter from "./components/SubscribeToNewsletter";

export default function Home() {
  const post: Post = {
    id: 1,
    title: "This is a title let's make it longer.",
    href: "#",
    description:
      "This is a description it might be bit lengtier than title. This is th second line lets see how it translates to design.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore fugiat voluptatum officia enim sunt, harum dolorum, necessitatibus voluptatem rerum optio?<a href='#'>Incidunt inventore nostrum provident est fugiat quos</a>, reprehenderit dolore ipsam enim dicta nemo illo officia veniam nihil. Cumque veritatis, est eius voluptates nisi illum esse expedita, a ea illo quaerat reprehenderit architecto asperiores deserunt cupiditate sequi minus minima? Voluptate rem voluptatibus neque est architecto ab non maxime nesciunt ducimus cumque. Amet modi magni laboriosam neque minus labore laudantium tempore soluta ullam maiores perspiciatis.",
    image: {
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      alt: "image",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  };
  const post2: Post = {
    id: 2,
    title: "This is a title let's make it longer. This is a second line.",
    href: "#",
    description: "This is a description it might be bit lengtier than title",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore fugiat voluptatum officia enim sunt, harum dolorum, necessitatibus voluptatem rerum optio?<a href='#'>Incidunt inventore nostrum provident est fugiat quos</a>, reprehenderit dolore ipsam enim dicta nemo illo officia veniam nihil. Cumque veritatis, est eius voluptates nisi illum esse expedita, a ea illo quaerat reprehenderit architecto asperiores deserunt cupiditate sequi minus minima? Voluptate rem voluptatibus neque est architecto ab non maxime nesciunt ducimus cumque. Amet modi magni laboriosam neque minus labore laudantium tempore soluta ullam maiores perspiciatis.",
    image: {
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      alt: "image",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  };
  const post3: Post = {
    id: 3,
    title: "This is a title let's make it longer.",
    href: "#",
    description: "This is a description it might be bit lengtier than title",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore fugiat voluptatum officia enim sunt, harum dolorum, necessitatibus voluptatem rerum optio?<a href='#'>Incidunt inventore nostrum provident est fugiat quos</a>, reprehenderit dolore ipsam enim dicta nemo illo officia veniam nihil. Cumque veritatis, est eius voluptates nisi illum esse expedita, a ea illo quaerat reprehenderit architecto asperiores deserunt cupiditate sequi minus minima? Voluptate rem voluptatibus neque est architecto ab non maxime nesciunt ducimus cumque. Amet modi magni laboriosam neque minus labore laudantium tempore soluta ullam maiores perspiciatis.",
    image: {
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      alt: "image",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  };
  const post4: Post = {
    id: 4,
    title:
      "This is a title let's make it longer. Alright, this might work afterall.",
    href: "#",
    description: "This is a description it might be bit lengtier than title",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore fugiat voluptatum officia enim sunt, harum dolorum, necessitatibus voluptatem rerum optio?<a href='#'>Incidunt inventore nostrum provident est fugiat quos</a>, reprehenderit dolore ipsam enim dicta nemo illo officia veniam nihil. Cumque veritatis, est eius voluptates nisi illum esse expedita, a ea illo quaerat reprehenderit architecto asperiores deserunt cupiditate sequi minus minima? Voluptate rem voluptatibus neque est architecto ab non maxime nesciunt ducimus cumque. Amet modi magni laboriosam neque minus labore laudantium tempore soluta ullam maiores perspiciatis.",
    image: {
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      alt: "image",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    externalSource: {
      title: "This is title of article from external source. | ExternalSource",
      source: "externalsource",
      image: {
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "this is image.",
      },
    },
  };
  const post5: Post = {
    id: 5,
    title:
      "This is a title let's make it longer. Adding one more line to finish design.",
    href: "#",
    description: "This is a description it might be bit lengtier than title",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore fugiat voluptatum officia enim sunt, harum dolorum, necessitatibus voluptatem rerum optio?<a href='#'>Incidunt inventore nostrum provident est fugiat quos</a>, reprehenderit dolore ipsam enim dicta nemo illo officia veniam nihil. Cumque veritatis, est eius voluptates nisi illum esse expedita, a ea illo quaerat reprehenderit architecto asperiores deserunt cupiditate sequi minus minima? Voluptate rem voluptatibus neque est architecto ab non maxime nesciunt ducimus cumque. Amet modi magni laboriosam neque minus labore laudantium tempore soluta ullam maiores perspiciatis.",
    image: {
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      alt: "image",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    imagePreview: {
      images: [
        {
          href: "#",
          alt: "this is image 1",
        },
        {
          href: "#",
          alt: "this is image 2",
        },
        {
          href: "#",
          alt: "this is image 3",
        },
      ],
      description: "Move through this gallery to see all available images",
      imageSource: "Internet",
    },
  };

  const section = {
    title: "Just for you",
    posts: [post, post2, post3, post4, post5],
  };
  const section2 = { title: "Just for you", posts: [post, post2, post3] };
  const header = {
    title: "Today's news",
    updated: new Date().toLocaleTimeString(),
    featuredStory: { href: "#", title: "heading" },
  };

  return (
    <main className="flex-l flex flex-col bg-neutral-900">
      <div className="relative z-10 mx-auto mb-16 flex w-full max-w-lg flex-col px-10 md:mx-auto md:max-w-[560px] lg:mx-auto lg:max-w-5xl lg:flex-row lg:pr-0">
        <MainStory data={post} />
      </div>
      <StreamHeader data={header} />
      <StoryDefault data={post} />
      <StoryDefault data={post} />
      <StoryDefault data={post} />
      <StoryBig data={post} />
      <StoryStream data={post4} />
      <StoryStream data={post5} />
      <div className="z-10 mx-auto">
        <StoryGroup data={section} />
        <StoryGroupWithImage data={section2} />
      </div>
      <SectionDefaultStory data={post} />
      <SectionDefaultStory data={post} />
      <ReviewDefault data={post} />
      <div className="z-10 mx-auto">
        <ReviewTop data={post} />
      </div>
      <div className="z-10 mx-auto">
        <Articles data={section} />
        <SubscribeToNewsletter />
      </div>
    </main>
  );
}
