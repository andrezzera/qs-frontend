import { httpClient } from "@/shared/utils/http-client";

export const getVenue = async () => {
  return httpClient.get("/challenge/venue/9");
};
