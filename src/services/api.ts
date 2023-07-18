import axios from "axios";

export const api = axios.create({
  baseURL: "https://oauth.reddit.com",
  headers: {
    "User-Agent": "ChangeMeClient/0.1 by YourUsername",
    Authorization: `bearer ${import.meta.env.VITE_TOKEN}`,
  },
});
