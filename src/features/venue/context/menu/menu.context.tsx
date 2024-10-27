import { createContext } from "react";
import { Menu } from "./menu.types";

export const MenuContext = createContext<Menu>({} as Menu);
