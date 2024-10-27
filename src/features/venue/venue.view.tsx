import React from "react";
import * as S from "./venue.styles";
import { ArrowIcon, HamburgerIcon, SearchIcon } from "@/shared/assets/icons";
import { useVenue } from "@/shared/context/venue/venue.hooks";

const VenueView: React.FC = () => {
  const { venue } = useVenue();
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
      <S.Banner src={venue.webSettings.bannerImage} />
      <S.SearchField>
        <label className="field__wrapper" htmlFor="search">
          <div className="field__icon">
            <img src={SearchIcon} alt="" />
          </div>
          <input
            className="field__input"
            type="text"
            name="search"
            id="search"
            placeholder="Search menu items"
          />
        </label>
      </S.SearchField>

      <S.SectionsNavigator>
        <div className="section section--active">
          <div className="section__image">
            <img src={""} alt={""} />
          </div>
          <div className="section__title">Burgers</div>
        </div>
        <div className="section">
          <div className="section__image">
            <img src={""} alt={""} />
          </div>
          <div className="section__title">Burgers</div>
        </div>
        <div className="section">
          <div className="section__image">
            <img src={""} alt={""} />
          </div>
          <div className="section__title">Burgers</div>
        </div>
        <div className="section">
          <div className="section__image">
            <img src={""} alt={""} />
          </div>
          <div className="section__title">Burgers</div>
        </div>
        <div className="section">
          <div className="section__image">
            <img src={""} alt={""} />
          </div>
          <div className="section__title">Burgers</div>
        </div>
        <div className="section">
          <div className="section__image">
            <img src={""} alt={""} />
          </div>
          <div className="section__title">Burgers</div>
        </div>
      </S.SectionsNavigator>

      <S.SectionList>
        <div className="section">
          <div className="section-info">
            <h2 className="section-info__title">Burgers</h2>
            <button className="section-info__toggle">
              <img src={ArrowIcon} />
            </button>
          </div>
          <div className="section__items">teste</div>
        </div>
        <div className="section">
          <div className="section-info">
            <h2 className="section-info__title">Burgers</h2>
            <button className="section-info__toggle">
              <img src={ArrowIcon} />
            </button>
          </div>
          <div className="section__items">
            <S.Item>
              <div className="details">
                <span className="details__title">Hardcore</span>
                <p className="details__description">
                  180g angus beef burger, plus ribs, gruyere cheese, mayo,
                  ketchup, bacon and more.
                </p>
                <span className="details__price">
                  {(33.0).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <img src={""} className="image" />
            </S.Item>
          </div>
        </div>
      </S.SectionList>
    </>
  );
};

export default VenueView;
