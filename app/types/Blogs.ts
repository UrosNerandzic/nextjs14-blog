export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  category: {
    currentSlug: string;
  };
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
  smallDescription: string;
}

export type props = {
  params: {
    blogSlug: string;
  };
};

export interface PropsBlog {
  params: {
    blogSlug: string;
    categorySlug: string;
  };
}
