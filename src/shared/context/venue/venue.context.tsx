import { createContext } from "react";
import { Venue } from "./venue.types";

export const VenueContext = createContext<Venue>({} as Venue);
