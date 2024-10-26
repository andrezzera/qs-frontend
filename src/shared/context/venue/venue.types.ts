export interface Venue {
  webSettings: {
    primaryColour: string;
    navBackgroundColour: string;
    bannerImage: string;
  };
}

export interface VenueProviderProps {
  children: React.ReactNode;
}
