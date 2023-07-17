interface Context {
  selectedButtonFilter?: string;
  setSelectedButtonFilter?: (value: string) => void;
}

interface Post {
  id: string;
  title: string;
  created: string;
  author: string;
  domain: string;
  media: {
    oembed: {
      thumbnail_url: string;
    };
  };
}
