const baseUrl = "https://oauth.reddit.com";

export const fetchPosts = async (sort: string) => {
  console.log("faz requisicao");
  try {
    const token = import.meta.env.VITE_TOKEN;

    const res = await fetch(`${baseUrl}/r/react/${sort}`, {
      headers: {
        "User-Agent": "ChangeMeClient/0.1 by YourUsername",
        Authorization: `bearer ${token}`,
      },
    });
    console.log("🚀 ~ file: fetchPosts.ts:34 ~ fetchPosts ~ res:", res);
    return res.json();
  } catch (e) {
    console.error(e);
    throw new Error("Error Fetch Posts");
  }
};
