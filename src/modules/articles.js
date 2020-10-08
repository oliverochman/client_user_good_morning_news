import axios from "axios";

const fetchAllArticles = async () => {
  let response = await axios.get("/articles");
  return response.data.articles;
};
export { fetchAllArticles };
