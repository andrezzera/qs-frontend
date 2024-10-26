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
