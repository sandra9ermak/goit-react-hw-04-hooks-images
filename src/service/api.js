import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = "23801243-e85441bee56b02cd6046c9902";

const setParams = (params) =>
  (axios.defaults.params = { key: API_KEY, ...params });

export const getApi = (query, page = 1, safesearch = true) => {
  setParams({
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    per_page: 12,
    page,
    safesearch,
  });
  return axios
    .get(axios.defaults.baseURL)
    .then(({ data }) => data.hits)
    .catch((err) => {
      throw err;
    });
};

// axios.defaults.baseURL = "https://newsapi.org/v2/";
// const API_KEY = "22e1feeab1ef4a16a87ba035c00cc49f";

// const setParams = (params) =>
//   (axios.defaults.params = { apiKey: API_KEY, ...params });

// export const getApi = (query = "everything", page = 1) => {
//   setParams({
//     q: query,
//     per_page: 12,
//     from: "2021-10-05",
//     sortBy: "publishedAt",
//     page,
//   });
//   return axios
//     .get(`everything`)
//     .then(({ data }) => data.articles)
//     .catch((err) => {
//       throw err;
//     });
// };
