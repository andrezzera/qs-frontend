import React from "react";
import * as S from "./venue.styles";
import { ArrowIcon, HamburgerIcon, SearchIcon } from "@/shared/assets/icons";
import { useVenue } from "@/shared/context/venue/venue.hooks";
import { useMenu } from "./context/menu/menu.hooks";

const VenueView: React.FC = () => {
  const { venue } = useVenue();
  const { menu } = useMenu();

  return (
    <>
      <S.Menu>
        <div className="menu__action-wrapper" />
        <div className="menu__title">Menu</div>
        <ul className="menu__items">
          <li className="menu__item menu__item--active">Menu</li>
          <li className="menu__item">Entrar</li>
          <li className="menu__item">Contato</li>
        </ul>
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
            <img src={SearchIcon} />
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

      <S.ContentWrapper>
        <S.ContentContainer>
          <S.SectionsNavigator>
            {menu.sections &&
              menu.sections.map((section) => (
                <div className="section" key={section.id}>
                  <div className="section__image">
                    <img src={section.images[0].image} />
                  </div>
                  <div className="section__title">{section.name}</div>
                </div>
              ))}
          </S.SectionsNavigator>

          <S.SectionList>
            {menu.sections &&
              menu.sections.map((section) => (
                <div className="section" key={section.id}>
                  <div className="section-info">
                    <h2 className="section-info__title">{section.name}</h2>
                    <button className="section-info__toggle">
                      <img src={ArrowIcon} />
                    </button>
                  </div>
                  <div className="section__items">
                    {section.items &&
                      section.items.map((item) => (
                        <S.Item key={item.id}>
                          <div className="details">
                            <span className="details__title">{item.name}</span>
                            <p className="details__description">
                              {item.description}
                            </p>
                            <span className="details__price">
                              {item.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </span>
                          </div>
                          {item.images && (
                            <img src={item.images[0].image} className="image" />
                          )}
                        </S.Item>
                      ))}
                  </div>
                </div>
              ))}
          </S.SectionList>
        </S.ContentContainer>
        <S.BasketContainer>teste</S.BasketContainer>
      </S.ContentWrapper>
    </>
  );
};

export default VenueView;
