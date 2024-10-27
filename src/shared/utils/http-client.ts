import axios from "axios";

export const httpClient = axios.create();

httpClient.defaults.baseURL =
  "https://corsproxy.io/?https://cdn-dev.preoday.com";
