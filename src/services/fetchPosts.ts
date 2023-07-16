export const fetchPosts = async (sort: string) => {
  console.log("🚀 ~ file: fetchPosts.ts:2 ~ fetchPosts ~ sort:", sort);
  try {
    const res = await fetch(
      `https://gateway.reddit.com/desktopapi/v1/subreddits/reactjs?rtj=only&redditWebClient=web2x&app=web2x-client-production&include=identity&sort=${sort}&layout=card`
    );
    return res.json();
  } catch (e) {
    console.error(e);
    throw new Error("Error Fetch Posts");
  }
};
