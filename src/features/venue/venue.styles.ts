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
