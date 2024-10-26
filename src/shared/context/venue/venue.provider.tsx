import { useEffect, useState } from "react";
import { getVenue } from "./venue.service";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { Venue, VenueProviderProps } from "./venue.types";
import { VenueContext } from "./venue.context";

export const VenueProvider = ({ children }: VenueProviderProps) => {
  const [venue, setVenue] = useState<Venue>({
    webSettings: { navBackgroundColour: "", primaryColour: "" },
  });

  const fetchVenue = async () => {
    try {
      const { data } = await getVenue();
      setVenue(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchVenue();
  }, []);

  const theme: DefaultTheme = {
    navBackgroundColour: venue.webSettings.navBackgroundColour,
    primaryColour: venue.webSettings.primaryColour,
  };

  return (
    <VenueContext.Provider value={venue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </VenueContext.Provider>
  );
};
