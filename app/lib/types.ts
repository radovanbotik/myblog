type Image = {
  href: string;
  alt: string;
};

export type ImagePreview = {
  images: Image[];
  description: string;
  imageSource?: string;
};

export type ExternalSource = {
  title: string;
  source: string;
  image: {
    imageUrl: string;
    alt: string;
  };
};

export type Post = {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  content: string;
  category: {
    title: string;
    href: string;
  };
  image: {
    imageUrl: string;
    alt: string;
  };
  author: {
    name: string;
    role: string;
    href: string;
    imageUrl: string;
  };
  externalSource?: ExternalSource;
  imagePreview?: ImagePreview;
};
