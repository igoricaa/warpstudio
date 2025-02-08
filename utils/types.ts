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
    text: {
      paragraph: string;
    }[];
  };
  logos: {
    url: string;
    alt: string;
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
        url: string;
        alt: string;
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
