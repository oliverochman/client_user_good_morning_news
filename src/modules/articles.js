import axios from "axios";

const Articles = {
  async index() {
    let result = await axios.get("/articles");
    return result.data.articles;
  },

  async show(articleId) {
    let result = await axios.get(`/articles/${articleId}`);
    return result.data.article;
  },
};

export default Articles;
