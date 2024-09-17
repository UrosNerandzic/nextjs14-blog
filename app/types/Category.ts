export interface categoryLink {
  category: {
    currentSlug: string;
  };
}

export interface categoryData {
  title: string;
  categorySlug: string;
  blogs: blog[];
}

export type blog = {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: {
    asset: {
      url: string;
    };
  };
};

export type props = {
  params: {
    categorySlug: string;
  };
};

export interface category {
  currentSlug: {
    _type: string;
    current: string;
  };
}

export interface NavigationType {
  data: {
    category: {
      currentSlug: string;
    };
  }[];
}
