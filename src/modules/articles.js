import axios from "axios";

const fetchAllArticles = async () => {
  let articles = await axios.get("/articles");
  return articles.data.articles;
};
export default { fetchAllArticles };
