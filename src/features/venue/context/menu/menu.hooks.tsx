import { useContext } from "react";
import { MenuContext } from "./menu.context";

export const useMenu = () => {
  const menu = useContext(MenuContext);
  return { menu };
};
