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

export type FormFields = {
  name: string;
  email: string;
  message: string;
  recaptcha_token: string;
};
