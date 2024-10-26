import { useContext } from "react";
import { VenueContext } from "./venue.context";

export const useVenue = () => {
  const venue = useContext(VenueContext);
  return { venue };
};
