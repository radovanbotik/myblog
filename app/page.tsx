import StoryDefault from "./components/StoryDefault";
import StoryBig from "./components/StoryBig";
import StoryStream from "./components/StoryStream";
import StoryGroup from "./components/StoryGroup";
import StoryGroupWithImage from "./components/StoryGroupWithImage";

export default function Home() {
  const post = {
    id: 1,
    title: "This is a title let's make it longer.",
    href: "#",
    description: "This is a description it might be bit lengtier than title",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
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
  const post2 = {
    id: 2,
    title: "This is a title let's make it longer. This is a second line.",
    href: "#",
    description: "This is a description it might be bit lengtier than title",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
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
  const post3 = {
    id: 3,
    title: "This is a title let's make it longer.",
    href: "#",
    description: "This is a description it might be bit lengtier than title",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
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
  const post4 = {
    id: 4,
    title: "This is a title let's make it longer. Alright, this might work afterall.",
    href: "#",
    description: "This is a description it might be bit lengtier than title",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
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
  const post5 = {
    id: 5,
    title: "This is a title let's make it longer. Adding one more line to finish design.",
    href: "#",
    description: "This is a description it might be bit lengtier than title",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
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
 
  const section = {title:'Just for you',posts:[post,post2,post3,post4,post5]}
  const section2 = {title:'Just for you',posts:[post,post2,post3]}
  return (
    <main className="flex  flex-l flex-col bg-neutral-900">
      <StoryDefault data={post} />
      <StoryDefault data={post} />
      <StoryDefault data={post} />
      <StoryBig data={post}/>
      <StoryStream data={post}/>
      <div className="z-10 mx-auto">
      <StoryGroup data={section}/>
      <StoryGroupWithImage data={section2}/>
      </div>
    </main>
  );
}
