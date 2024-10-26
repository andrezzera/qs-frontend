import React from "react";
import * as S from "./venue.styles";
import { HamburgerIcon } from "@/shared/assets/icons";

const VenueView: React.FC = () => {
  return (
    <>
      <S.Menu>
        <div className="menu__action-wrapper" />
        <div className="menu__title">Menu</div>
        <div className="menu__action-wrapper">
          <div className="menu__action">
            <img src={HamburgerIcon} />
          </div>
        </div>
      </S.Menu>
    </>
  );
};

export default VenueView;
