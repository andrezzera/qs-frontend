import styled from "styled-components";

export const Menu = styled.nav`
  width: 100%;
  height: 64px;
  padding: 12px 16px;
  background: ${(props) => props.theme.navBackgroundColour};
  display: flex;
  gap: 8px;
  align-items: center;

  .menu__action-wrapper {
    width: 28px;
    height: 28px;
  }

  .menu__action {
    width: 28px;
    height: 28px;
    background: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu__title {
    flex-grow: 1;
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.75px;
  }

  .menu__items {
    height: 52px;
    list-style: none;
    display: none;
  }

  .menu__item {
    min-width: 232px;
    height: 52px;
    padding: 14px 0;
    letter-spacing: 0.5%;
    font-size: 20px;
    color: #fff;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
  }

  .menu__item.menu__item--active {
    border-bottom: 5px solid #fff;
  }

  @media (min-width: 1400px) {
    height: 52px;
    justify-content: center;
    .menu__action-wrapper {
      display: none;
    }

    .menu__title {
      display: none;
    }

    .menu__items {
      display: flex;
    }
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  vertical-align: middle;
`;

export const SearchField = styled.div`
  padding: 16px;
  .field__wrapper {
    width: 100%;
    height: 40px;
    border-radius: 7px;
    border: 1px solid #8a94a4;
    display: flex;
    background: #fff;
  }

  .field__icon {
    padding: 10px;
  }

  .field__input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 7px;
    outline: none;
    padding-right: 10px;
    font-size: 16px;
    &::placeholder {
      color: #8a94a4;
    }
  }

  @media (min-width: 1400px) {
    width: 100%;
    display: flex;
    justify-content: center;
    .field__wrapper {
      max-width: 1024px;
    }
  }
`;

export const ContentWrapper = styled.div`
  @media (min-width: 1400px) {
    display: flex;
    width: 100%;
    max-width: 1024px;
    height: auto;
    padding: 32px 40px;
    background: #f8f9fa;
    align-items: flex-start;
    gap: 24px;
    margin: auto;
  }
`;

export const ContentContainer = styled.div`
  @media (min-width: 1400px) {
    width: 600px;
    height: auto;
    background: #fff;
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.14);
  }
`;

export const BasketContainer = styled.div`
  width: 320px;
  height: auto;
  background: #fff;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.14);
  display: none;
  @media (min-width: 1400px) {
    display: block;
  }
`;

export const SectionsNavigator = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  padding: 20px 0 24px 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  .section {
    width: 104px;
    height: 146px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:first-child {
      margin-left: 16px;
    }
  }

  .section--active {
    &::after {
      content: "";
      width: calc(100% - 8px);
      height: 2px;
      display: block;
      margin: auto;
      background: ${(props) => props.theme.primaryColour};
    }
    .section__title {
      font-weight: 600;
    }
    .section__image {
      border: 2px solid ${(props) => props.theme.primaryColour};
    }
  }

  .section__image {
    width: 82px;
    height: 82px;
    border-radius: 82px;
    padding: 2px;
    background-color: #fff;

    > img {
      width: 74px;
      height: 74px;
      border-radius: 74px;
      object-fit: cover;
    }
  }

  .section__title {
    width: 100%;
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0 8px 0;
    font-size: 16px;
    font-weight: 400;
    color: #121212;
    letter-spacing: 0.5px;
  }
`;

export const SectionList = styled.div`
  .section {
    width: 100%;
    height: auto;
  }

  .section-info {
    padding: 32px 16px 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover + .section__items {
      transition: all 0.26s ease;
      transform: scaleY(0);
      position: absolute;
    }
  }
  .section-info__title {
    font-size: 24px;
    color: #121212;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .section-info__toggle {
    width: 24px;
    height: 24px;
    cursor: pointer;
    > img {
      transition: all 0.1s linear;
    }
  }
  .section__items {
    width: 100%;
    height: auto;
    transform-origin: top;
    position: relative;
    transform: scaleY(1);
  }
`;

export const Item = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  gap: 16px;
  justify-content: space-between;

  .details {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    > .details__title {
      font-weight: 600;
      color: #121212;
    }

    .details__description {
      font-weight: 300;
      color: #464646;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .details__price {
      font-weight: 600;
      color: #464646;
      letter-spacing: 0.5px;
    }
  }

  .image {
    width: 128px;
    height: 85px;
    border-radius: 4px;
  }
`;
