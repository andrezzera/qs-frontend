import { useEffect, useState } from "react";
import { Menu, MenuProviderProps } from "./menu.types";
import { getMenu } from "./menu.service";
import { MenuContext } from "./menu.context";

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [menu, setMenu] = useState<Menu>({} as Menu);

  const fetchMenu = async () => {
    try {
      const response = await getMenu();
      setMenu(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return <MenuContext.Provider value={menu}>{children}</MenuContext.Provider>;
};
