import { httpClient } from "@/shared/utils/http-client";

export const getMenu = async () => {
  return httpClient.get("/challenge/menu");
};
