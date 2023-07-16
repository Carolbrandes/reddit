interface Context {
  selectedButtonFilter?: string;
  setSelectedButtonFilter?: (value: string) => void;
}

interface Post {
  title: string;
  created: string;
  author: string;
  domain: string;
  thumbnail: {
    url: string;
  };
}
