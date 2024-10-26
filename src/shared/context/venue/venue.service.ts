import axios from "axios";

const httpClient = axios.create();

httpClient.defaults.baseURL =
  "https://corsproxy.io/?https://cdn-dev.preoday.com";

export const getVenue = async () => {
  return httpClient.get("/challenge/venue/9");
};
