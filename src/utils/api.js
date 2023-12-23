import axios from "axios";

async function getPosts(size, sort, page, retryCount = 3) {
  try {
    const response = await axios.get("https://suitmedia-backend.suitdev.com/api/ideas", {
      params: {
        "page[number]": Number(page),
        "page[size]": Number(size),
        append: ["small_image", "medium_image"],
        sort: { sort },
      },
    });
    return response.data.data;
  } catch (error) {
    if (retryCount > 0) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return getPosts(size, sort, page, retryCount - 1);
    } else {
      throw error;
    }
  }
}

export { getPosts };
