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
  services: {
    title: string;
    description: string;
  }[];
  photoPortfolio: {
    title: string;
    projects: {
      title: string;
      galleryLink: string;
      coverImage: {
        desktopImage: {
          url: string;
          alt: string;
        };
        mobileImage?: {
          url: string;
          alt: string;
        };
      };
    }[];
  };
};
export type FormFields = {
  name: string;
  email: string;
  message: string;
  recaptcha_token: string;
};
