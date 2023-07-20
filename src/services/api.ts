export const api = {
  baseURL: "https://oauth.reddit.com",
  getToken: async () => {
    const res = await fetch("https://www.reddit.com/api/v1/access_token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${import.meta.env.VITE_TOKEN}`,
        Cookie: "edgebucket=f842q6RMfS1KDTDRos",
      },
      body: new URLSearchParams({
        grant_type: "password",
        username: import.meta.env.VITE_USERNAME,
        password: import.meta.env.VITE_PASSWORD,
      }),
    });

    const data = await res.json();

    return data.access_token;
  },
  getPosts: async (sort: string) => {
    const token = await api.getToken();

    const resp = await fetch(`${api.baseURL}/r/react/${sort}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    const data = resp.json();
    return data;
  },
};
