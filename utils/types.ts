export type Project = {
  _id: string;
  title: string;
  image: {
    url: string;
    alt: string;
  };
  video: {
    playbackId: string;
    aspectRatio: string;
  };
  order: number;
};

export type AboutUs = {
  title: string;
  aboutUsText: {
    title: string;
    text: string[];
  };
  logos: {
    url: string;
    alt: string;
    width: number;
    height: number;
  }[];
};

export type Services = {
  title: string;
  services: {
    title: string;
    description: string;
  }[];
  photoPortfolio: {
    title: string;
    projects: PhotographyProject[];
  };
};

export type PhotographyProject = {
  title: string;
  galleryLink: string;
  coverImage: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type FormFields = {
  name: string;
  email: string;
  message: string;
  recaptcha_token: string;
};

export type Route = {
  name: string;
  path: string;
  external?: boolean;
};

export type Social = {
  name: string;
  url: string;
};
