import axios from "axios";

export const api = axios.create({
  baseURL: "https://oauth.reddit.com",
  headers: {
    Authorization: `bearer ${import.meta.env.VITE_TOKEN}`,
  },
});
