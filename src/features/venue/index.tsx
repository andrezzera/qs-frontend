import React from "react";
import VenueView from "./venue.view";
import { MenuProvider } from "./context/menu/menu.provider";

const VenuePage: React.FC = () => {
  return (
    <MenuProvider>
      <VenueView />
    </MenuProvider>
  );
};

export default VenuePage;
